
from flask_restful import Api, Resource, reqparse
from transformers import pipeline


COLORS = {
    "neutral": (125, 125, 125),
    "surprise": (121, 252, 214),
    "joy": (250, 220, 120),
    "sadness": (76, 94, 134),
    "fear": (91, 64, 100),
    "love": (246, 194, 226),
    "anger": (164, 61, 61),
    "disgust": (188, 152, 98),
}


class ColorfulApiHandler(Resource):
    neutral_classifier = pipeline(
        "text-classification", 
        model='j-hartmann/emotion-english-distilroberta-base', 
        return_all_scores=False
    )

    def get(self, message):
        label, score = self.get_sentiment(message)
        rgb = self.make_color(label, score)
        return {
            'resultStatus': 'SUCCESS',
            'message': f"Sentiment: {label}: {rgb}"
        }

    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('type', type=str)
        parser.add_argument('message', type=str)

        args = parser.parse_args()

        print(args)
        # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

        request_type = args['type']
        request_json = args['message']
        # ret_status, ret_msg = ReturnData(request_type, request_json)
        # currently just returning the req straight
        ret_status = request_type
        ret_msg = request_json

        if ret_msg:
            label, score, source = self.get_sentiment(ret_msg)
            rgb = self.make_color(label, score)
            message = self.rgb_to_hex([round(c) for c in rgb])
            print(message)
        else:
            message = "Silence everywhere"
        
        final_ret = {"status": "Success", "message": message}

        return final_ret

    def get_sentiment(self, text):
        neutral = self.neutral_classifier(text)[0]
        return neutral['label'], neutral['score'], 'neutral'
    
    @staticmethod
    def make_color(sentiment_label, sentiment_score):
        color = COLORS[sentiment_label]
        neutral = [sum(COLORS[sentiment_label]) / 3]*3
        variaton = [
            (color[c] * sentiment_score + neutral[c] * (1 - sentiment_score)) 
            for c in range(3) 
        ]
        return variaton
    
    @staticmethod
    def rgb_to_hex(rgb_tuple):
        return '#{:02x}{:02x}{:02x}'.format(*rgb_tuple)




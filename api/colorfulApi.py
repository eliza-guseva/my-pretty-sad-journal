
from flask_restful import Api, Resource, reqparse
from transformers import pipeline

class ColorfulApiHandler(Resource):
    neutral_classifier = pipeline(
        "text-classification", 
        model='j-hartmann/emotion-english-distilroberta-base', 
        return_all_scores=False
    )

    angry_classifier = pipeline(
        "text-classification",
        model="bhadresh-savani/distilbert-base-uncased-emotion",
        return_all_scores=False
    )

    def get(self, message):
        label, score = self.get_sentiment(message)
        return {
            'resultStatus': 'SUCCESS',
            'message': f"Sentiment: {label} with score {score}"
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
            message = f"Sentiment: {label} with score {score:.2f}: from {source}"
        else:
            message = "No Msg"
        
        final_ret = {"status": "Success", "message": message}

        return final_ret

    def get_sentiment(self, text):
        angry = self.angry_classifier(text)[0]
        neutral = self.neutral_classifier(text)[0]
        return neutral['label'], neutral['score'], 'neutral'
        # is_false_angry = angry['label'] == 'anger' and angry['score'] < 0.90
        
        # if neutral['score'] >= angry['score']:
        #     top_label = neutral
        #     top_label['source'] = 'neutral'
        #     if top_label['score'] < 0.5:
        #         top_label['label'] = 'neutral'
        # else:
        #     top_label = angry
        #     top_label['source'] = 'angry'
        # return top_label['label'], top_label['score'], top_label['source']


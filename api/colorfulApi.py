
from flask_restful import Api, Resource, reqparse

class ColorfulApiHandler(Resource):
  def get(self, message):
    the_message = ' '.join(list(message.values()))
    return {
      'resultStatus': 'SUCCESS',
      'message': the_message
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
      message = f"The date is: {ret_msg[:30]}"
    else:
      message = "No Msg"
    
    final_ret = {"status": "Success", "message": message}

    return final_ret


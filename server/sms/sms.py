import sys
from twilio.rest import Client

sys.path.insert(1, "svm_model")
import svm_model.model
import svm_model.constants
import random

SID = "ACe51e9ddeca430bf46024bfb59a433ca5"
AUTH_TOKEN = "27646cafde30d7eaf63691b9f6b359df"


def send_sms(message):

    client = Client(SID, AUTH_TOKEN)

    message = client.messages.create(
        messaging_service_sid="MG62c0de1221c707a82f5899dd2b9bb863",
        body=message,
        to="+919310389530",
    )

    print(message.sid)


def message_month():

    organic_tip = svm_model.constants.ORGANIC_TIP

    crop_recommendation = svm_model.model.predict([20.879744, 82.002744, 202.935536])
    farming_style = svm_model.constants.farming_style[crop_recommendation]

    message = f"Hey smart kisan, Here are some tips for you.\n We recommend you to grow {crop_recommendation} in your farm.\n You can grow the crop in {farming_style}.\n {random.choice(organic_tip)}"

    send_sms(message)


def message_daily():
    organic_tip = svm_model.constants.ORGANIC_TIP

    weather = random.choice(svm_model.constants.AVERAGE_WEATHER)

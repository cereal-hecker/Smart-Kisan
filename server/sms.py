import sys
from twilio.rest import Client

sys.path.insert(1, "svm_model")
import svm_model.model
import constants
import random

SID = "ACe51e9ddeca430bf46024bfb59a433ca5"
AUTH_TOKEN = "4ee953f8a2203ed3a7ff100b592bf150"


def send_sms(message,number):

    client = Client(SID, AUTH_TOKEN)

    message = client.messages.create(
        messaging_service_sid="MG62c0de1221c707a82f5899dd2b9bb863",
        body=message,
        to=f"+91{number}",
    )


def message_month(number):

    organic_tip = constants.ORGANIC_TIP

    crop_recommendation = svm_model.model.predict([20.879744, 82.002744, 202.935536])
    farming_style = constants.farming_style[crop_recommendation]

    message = f"Hey smart kisan, Here are some tips for you.\n We recommend you to grow {crop_recommendation} in your farm.\n You can grow the crop in {farming_style}.\n {random.choice(organic_tip)}"

    send_sms(message, number)


def message_daily(season,number):
    organic_tip = constants.ORGANIC_TIP

    weather = constants.AVERAGE_WEATHER[season].keys()

    weather = random.choice(list(weather))

    weather = constants.AVERAGE_WEATHER[season][weather]
    
    message = f"Hey smart kisan, Here are some tips for you.\n Today's weather is {weather}.\n {random.choice(organic_tip)}"

    send_sms(message,number) 

# message_daily = message_daily("spring",9310389530)

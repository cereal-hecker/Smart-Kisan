import os
from twilio.rest import Client
import new

SID = os.environ('SID')
AUTH_TOKEN = '7dcbea72b0f6599fcc488a99e0adba5c'

def message():
    pass


def send_sms(message):

    client = Client(SID, AUTH_TOKEN)

    message = client.messages.create(  
                              messaging_service_sid='MGc742cc4671e99493aff86cc6b8dff6fb', 
                              body=message,
                              to='+918700877045' 
                          ) 
 





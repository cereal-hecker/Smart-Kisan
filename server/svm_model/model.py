import joblib
import random
import constants


def predict(season):

    model = joblib.load("server\svm_model\svm_model.joblib")

    
    
    N = constants.NITROGEN
    P = constants.PHOSPHORUS
    K = constants.POTASSIUM
    ph = constants.PH
    
    tempr = constants.AVERAGE_WEATHER[season].keys()
    
    tempr = random.choice(list(tempr))
    
    tempr = constants.AVERAGE_WEATHER[season][tempr]

    df = [
        [
            random.choice(N),
            random.choice(P),
            random.choice(K),
            tempr, # Temp
            constants.HUMIDITY, # humid
            random.choice(ph),
            constants.RAINFALL# rainfall
        ]
    ]
    prediction = model.predict(df)
    return prediction[0]


print(predict("winter"))

# print(predict([20.879744, 82.002744, 202.935536]))

import joblib
import random
import constants


def predict(l):

    model = joblib.load("svm_model\svm_model.joblib")

    N = constants.NITROGEN
    P = constants.PHOSPHORUS
    K = constants.POTASSIUM
    ph = constants.PH

    df = [
        [
            random.choice(N),
            random.choice(P),
            random.choice(K),
            l[0],
            l[1],
            random.choice(ph),
            l[2],
        ]
    ]
    prediction = model.predict(df)
    return prediction[0]


# print(predict([20.879744,82.002744,202.935536]))

import pandas as pd
df = pd.read_csv('Crop_recommendation.csv')
with open('ph.txt','w') as f:
    f.write("[")
    for i in df['ph'].unique():
    	f.write(f"{i},")
    
    f.write("]")

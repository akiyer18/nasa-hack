# import the libraries

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
from keras.layers import Dropout
import json
from google.colab import files
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.layers.experimental import preprocessing

np.set_printoptions(precision=3, suppress=True)


# data preprocessing
data = '/path/to/your/dataset'
column_names = ['Work burden', 'Diet', 'Fitness', 'Noise', 'Medication',
                'Pre flight', 'In flight', 'Slam shift', 'Rem shift', 'Deep Sleep', 'Light sleep', 'Waketime', 'Total Sleep']

raw_dataset = pd.read_csv(data, names=column_names,
                          na_values='?', comment='\t',
                          sep=',', skipinitialspace=True)
raw_dataset.drop('Deep Sleep',axis=1,inplace=True)
raw_dataset.drop('Light sleep',axis=1,inplace=True)
raw_dataset.drop('Waketime',axis=1,inplace=True)
raw_dataset.drop('Rem shift',axis=1,inplace=True)
raw_dataset.drop([0],inplace=True)


# split the dataset
dataset = raw_dataset.copy()
train_dataset = dataset.sample(frac=0.8, random_state=0)
test_dataset = dataset.drop(train_dataset.index)

train_dataset.describe().transpose()

train_features = train_dataset.copy()
test_features = test_dataset.copy()

train_labels = train_features.pop('Total Sleep')
test_labels = test_features.pop('Total Sleep')

# train_features.dtypes
train_features['Work burden']=train_features['Work burden'].astype(str).astype(int)
train_features['Diet']=train_features['Diet'].astype(str).astype(int)
train_features['Fitness']=train_features['Fitness'].astype(str).astype(int)
train_features['Noise']=train_features['Noise'].astype(str).astype(int)
train_features['Medication']=train_features['Medication'].astype(str).astype(int)
train_features['Pre flight']=train_features['Pre flight'].astype(str).astype(int)
train_features['In flight']=train_features['In flight'].astype(str).astype(int)
train_features['Slam shift']=train_features['Slam shift'].astype(str).astype(int)

train_labels=train_labels.astype(str).astype(int)
test_features=test_features.astype(str).astype(int)
test_labels=test_labels.astype(str).astype(int)

normalizer = preprocessing.Normalization()
normalizer.adapt(np.array(train_features))


print(normalizer.mean.numpy())


def build_and_compile_model(norm):
  model = keras.Sequential([
      norm,
      layers.Dense(128, activation='relu'),
      layers.Dense(128, activation='relu'),
      layers.Dense(128, activation='relu'),
      layers.Dense(128, activation='relu'),
      layers.Dense(128, activation='relu'),
      layers.Dense(128, activation='relu'),
      layers.Dense(128, activation='relu'),
      layers.Dense(128, activation='relu'),
      layers.Dense(128, activation='relu'),
      layers.Dense(128, activation='relu'),
      layers.Dense(1)
  ])

  model.compile(loss='mean_absolute_error',
                optimizer=tf.keras.optimizers.Adam(0.001))
  return model


dnn_model = build_and_compile_model(normalizer)
dnn_model.summary()


    %%time
history = dnn_model.fit(
    train_features, train_labels,
    validation_split=0.4,
    verbose=1, epochs=2000)

dnn_model.save('test_test1')
loaded_model = tf.keras.models.load_model('./test_test1')
print(loaded_model.get_weights()[9].shape)

print(test_features)
print(test_predictions)
print(test_predictions.shape)

t = {
    'Work burden' : 3,
    'Diet' : 2567,
    'Fitness' : 770,
    'Noise' : 70,
    'Medication' : 2,
    'Pre flight' : 390,
    'In flight' : 290,
    'Slam shift' : 290
}
   
new = pd.DataFrame(t,index = [0]) 

print(obj2)

print(new.dtypes)   

dnn_model.predict(new).flatten()

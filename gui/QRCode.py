import io
import pyqrcode
from base64 import b64encode
import eel

eel.init('web')


@eel.expose
def dummy(dummy_param):
    print("I got a parameter: ", dummy_param)
    return "string_value", 1, 1.2, True, [1, 2, 3, 4], {"name": "eel"}


@eel.expose
def pass_to_python(data):
    for i in range(len(data)):
        print(data[i])


eel.start('index.html', size=(1000, 600))

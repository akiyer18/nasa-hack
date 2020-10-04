# Sleep Shift Scheduling Tool

## Sleep loss and fatigue may lead to reduced performance and an increased risk to safety during many activities, including spaceflight. Your challenge is to develop an operational sleep shift scheduling tool that provides autonomous customization of a schedule for sleep, exercise, and nutrition to manage fatigue.


To replicate the results:
```
pip install -r requirements.txt
```

To run the code:

First, train the model on your dataset using:
```
python3 script.py
```
Then,
```
cd gui
python3 QRCode.py
```

To access the weights of our trained model: [Drive](https://drive.google.com/file/d/1tB2V1Jy-IhIHMtpSCnc27qykApu_xzqp/view?usp=sharing) 

Contributions to the repository is most welcome. (Contributions will be accepted only after the results are declared)

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 


## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Update the README.md with details of changes to the interface, this includes new environment 
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you 
   do not have permission to do that, you may request the second reviewer to merge it for you.
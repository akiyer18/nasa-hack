
int sensor_value=0;
int button_state=0;
int output_sensor_value = 0;
int tilt_value = 0;
int temperature = 0;
void setup()
{
  pinMode(12, OUTPUT);
  pinMode(A0, INPUT);
  pinMode(8, INPUT);
  pinMode(4, INPUT);
  pinMode(2, INPUT);
  Serial.begin(9600);
}

void loop()
{
  button_state=digitalRead(8);
  temperature = analogRead(A1);
  temperature = map(temperature,20,358,-40,125);
  if (button_state == HIGH && temperature>=35 && temperature <=41) {
    sensor_value=analogRead(A0);
    tilt_value = digitalRead(4);

    output_sensor_value = map(sensor_value,0,1023,0,150);
    
    //if(tilt_value==0){
      //analogWrite(12, 50);}
  //else{
    //analogWrite(12,255);}
    
  
    if (output_sensor_value>=60 && output_sensor_value<=100){
      if(tilt_value==1){
        digitalWrite(12,HIGH);
      }
      else if(tilt_value==0){
        analogWrite(12,100);}}
    else {
      digitalWrite(12, LOW);}
}
  else{
    digitalWrite(12, LOW);}
  //temperature = analogRead(A1);
  //temperature = map(temperature,20,358,-40,125);
  //Serial.println(temperature);
}

/*if movement is more and pulse is normal, then high intensity of light

if movement is less and pulse is normal, then medium intensity of light

if movement is less and pulse is high, then the led goes off

movement is more: 
Pulse is normal - 60 to 100 beats per minute
Pulse is abnormal - + or - 15 beats per minute*/

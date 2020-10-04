var work_numeric
var data_workhours
var activity_level
var weight,height,gender,preflight,inflight;
var cal_consume;
var age


function ConfirmID()
{
	
	var n = document.getElementById("name").value
	var p = document.getElementById("password").value
	document.write("redirecting....")
	var flag=0
	
	if(n =="akshaye" && p=="ak1811")
	{
		age = 30
		weight = 165
		height = 70
		gender = 0
		preflight = 388
		inflight = 284
		flag=1
	}
	else if(n=="shivam" && p=="sm1209")
	{
		age = 39
		weight = 132
		height = 68
		gender = 0
		preflight =399
		inflight = 310
		flag=1

	}
	else if(n=="gokul" && p=="gp2603")
	{
		age = 33
		weight = 150
		height = 65
		gender = 0
		preflight = 402
		inflight = 305
		flag=1

	}
	else if(n=="rohan" && p=="ro1711")
	{
		age = 36
		weight = 170
		height = 75
		gender = 0
		preflight = 415
		inflight = 295
		flag=1
	}
	else if(n=="a" && p=="a")
	{
		age = 31
		weight = 155
		height = 66
		gender = 1
		preflight = 400
		inflight = 300
		flag=1
	}
	else
	{
		alert("Wrong username or password")
		window.location='login.html'

	}

	sessionStorage.setItem("age", age);
	sessionStorage.setItem("weight",weight );
	sessionStorage.setItem("height",height );
	sessionStorage.setItem("gender",gender );
	sessionStorage.setItem("preflight", preflight);
	sessionStorage.setItem("inflight",inflight);
	if(flag==1){
	window.location = 'index.html';
	}
    

}






function calc_activity(){
	work_numeric=parseInt(work_numeric)
	data_workhours = parseInt(data_workhours)
	let factor= work_numeric*data_workhours
	sessionStorage.setItem("data_workhours", age);
	var work_burden= Math.floor(factor/5);
	if(work_burden>=10){
      work_burden=9
	}
	if(work_burden==1){
		work_burden=2
	  } 
	
	
	activity_level=Math.floor(work_burden/2)
	sessionStorage.setItem("activity_level",activity_level);
	sessionStorage.setItem("work_burden",work_burden);
	
}


function calljs() {
	
	var e = document.getElementById("work");
	work_numeric = e.options[e.selectedIndex].value;
	data_workhours = document.getElementById("data_workhours").value
	//var data_cal_consume = document.getElementById("data_cal_consume").value //remove this
	var data_noise = document.getElementById("data_noise").value
    var f = document.getElementById("medication_numeric");
	var medication_numeric = f.options[f.selectedIndex].value;
	sessionStorage.setItem("data_workhours",data_workhours);
	calc_activity()




	var data_array=[work_numeric, data_workhours, data_cal_consume, data_noise, medication_numeric]
	eel.pass_to_python(data_array)
	

	
}
function change()
{
	calc_calories()
	sleep()
	
}

// function work()
// {
// 	data_workhours=sessionStorage.getItem("")
// 	var timed = data_workhours/2
// 	var tmp= document.getElementById("work1");
// 	 tmp.innerHTML =""
// 	 tmp.innerHTML += timed;

// 	 var tmp= document.getElementById("work2");
// 	 tmp.innerHTML =""
// 	 tmp.innerHTML += timed;
	


// }



function sleep()
{
	var work_burden=sessionStorage.getItem("work_burden")
	var preflight=sessionStorage.getItem("preflight")
	var data_noise=sessionStorage.getItem("data_noise")
	var inflight=sessionStorage.getItem("inflight")
	var cal_consume=sessionStorage.getItem("cal_consume")
	var cal_burnt=sessionStorage.getItem("cal_burnt")
	var medication_numeric=sessionStorage.getItem("medication_numeric")
	var slam_shift= Math.floor(Math.random()*(300-180+1))+180
	var tmp= document.getElementById("sleep");
	 tmp.innerHTML =""
	var total_sleep = Math.floor(Math.random()*(452-302+1))+302
	
	var Wake_time = 0;
  if( 60<=data_noise <=65)
    Wake_time +=0.23* Math.floor(Math.random()*(16-12+1))+12
   else if (65<data_noise <=70)
    Wake_time +=0.23* Math.floor(Math.random()*(19-16+1))+16
   else if (70<data_noise <=75)
    Wake_time +=0.23* Math.floor((Math.random()*(22-19+1))+19 )
   else if (75<data_noise <=80)
    Wake_time +=0.23* Math.floor((Math.random()*(25-22+1))+22 )
   else
    Wake_time +=0.23* Math.floor((Math.random()*(28-25+1))+25 )
  

  if (medication_numeric ==0)
    Wake_time +=0.2* Math.floor((Math.random()*(16-13+1))+13 )
   else if( medication_numeric ==1)
    Wake_time +=0.2* Math.floor((Math.random()*(18-16+1))+16 )
   else if (medication_numeric ==2)
    Wake_time +=0.2* Math.floor((Math.random()*(21-18+1))+18 )
   else if( medication_numeric ==3)
    Wake_time +=0.2* Math.floor((Math.random()*(23-21+1))+21 )
   else if( medication_numeric ==4)
    Wake_time +=0.2* Math.floor((Math.random()*(25-23+1))+23 )
   else
    Wake_time +=0.2* Math.floor((Math.random()*(28-25+1))+25 )

  if( 2500<=cal_consume <=3000)
    Wake_time += Math.floor((Math.random()*(18-13+1))+13 *0.1)
   else if( 3000<cal_consume <=3500)
    Wake_time += Math.floor((Math.random()*(23-18+1))+18 *0.1)
   else
    Wake_time += Math.floor((Math.random()*(28-23+1))+23 *0.1)
 
 
  if( 1<=work_burden <=2)
    Wake_time += Math.floor((Math.random()*(16-13+1))+13 *0.23)
   else if( 2<work_burden <=4)
    Wake_time += Math.floor((Math.random()*(19-16+1))+16 *0.23)
   else if( 5<work_burden <=6)
    Wake_time += Math.floor((Math.random()*(22-19+1))+19 *0.23)
   else if( 6<work_burden <=8)
    Wake_time += Math.floor((Math.random()*(25-22+1))+22 *0.23)
   else
    Wake_time += Math.floor((Math.random()*(28-25+1))+25 *0.23)

  
  if (280<=inflight <=288)
    Wake_time += Math.floor((Math.random()*(16-13+1))+13 *0.05)
   else if( 288<inflight <=296)
    Wake_time += Math.floor((Math.random()*(19-16+1))+16 *0.05)
   else if( 296<inflight <=304)
    Wake_time += Math.floor((Math.random()*(22-19+1))+19 *0.05)
   else if( 304<inflight <=312)
    Wake_time += Math.floor((Math.random()*(25-22+1))+22 *0.05)
   else
    Wake_time += Math.floor((Math.random()*(28-25+1))+25 *0.05) 


  if (180<=slam_shift <=204)
    Wake_time += Math.floor((Math.random()*(16-13+1))+13 *0.05)
   else if( 204<slam_shift <=228)
    Wake_time += Math.floor((Math.random()*(19-16+1))+16*0.05)
   else if( 228<slam_shift <=252)
    Wake_time += Math.floor((Math.random()*(22-19+1))+19 *0.05)
   else if( 252<slam_shift <=276)
    Wake_time += Math.floor((Math.random()*(25-22+1))+22 *0.05)
   else
    Wake_time += Math.floor((Math.random()*(28-25+1))+25 *0.05)

  if( 380<=preflight <=390)
    Wake_time +=0.05* Math.floor(Math.random()*(17-13+1))+13
   else if( 390<Preflight <=400)
    Wake_time +=0.05* Math.floor(Math.random()*(21-17+1))+17
   else if( 400<Preflight <=410)
    Wake_time +=0.05* Math.floor(Math.random()*(24-21+1))+21
   else
    Wake_time +=0.05* Math.floor(Math.random()*(28-24+1))+24

  total_sleep += Wake_time;
  tmp.innerHTML += Math.floor(total_sleep/60);
  tmp.innerHTML += "hrs "
  tmp.innerHTML += Math.floor(total_sleep%60)
  tmp.innerHTML += "mins "
}





function calc_calories() {
	let BMM=0;
	let cal_burnt=0;
	var age=sessionStorage.getItem("age")
	var weight=sessionStorage.getItem("weight")
	var height=sessionStorage.getItem("height")
	var gender=sessionStorage.getItem("gender")
	var activity_level=sessionStorage.getItem("activity_level")
	if(gender==1){
		BMM=(weight*4.35)+(height*4.7)-(age*4.2)+655;
	}
	else{
		BMM=(weight*6.23)+(height*12.7)-(age*6.8)+66;
	}
	if(activity_level>=1 && activity_level<=3.5){
		cal_consume=BMM*1.2;
	}
	else if(activity_level>=3.5 && activity_level<=6){
		cal_consume=BMM*1.375;
	}
	else if(activity_level>=6 && activity_level<=8.25){
		cal_consume=BMM*1.55;
	}
	else{
		cal_consume=BMM*1.75;
	}
  //document.write(BMM ); 
 // document.write('\n'); 
 //document.write("Total calories to be taken: ")
 //document.write(cal_consume);
 //document.write("<br>")
 //document.write("<br>");
 
 // Astronaut first breakfast: cold roast pork, mashed potatoes, rich wheat bread, quince sticks and coffee.
 
 // Astronaut second breakfast: cheese, ship biscuits and apple juice.
 
 // Astronaut lunch: jellied sturgeon, sorrel soup, stewed beef, bread, grape and plum juice, prunes.
 
 // Astronaut supper: pork hamburger with egg, cottage cheese with nuts, rye bread, sweets and tea
 
 let cal=0;
 let val=0;
 rand_eat_break= Math.floor((Math.random() * 4) + 1);
 var tmp= document.getElementById("breakfast");
 tmp.innerHTML =""
 if(rand_eat_break==1){
	
	
	 tmp.innerHTML +=  ("<br>");
	 tmp.innerHTML += ("Cocoa: ");
	 tmp.innerHTML += ('100g')
	 tmp.innerHTML +=  ("<br>");
	 
	 cal=0.2*(cal_consume)*(1.5/3.5);
	tmp.innerHTML += ("Canadian Bacon and Applesauce (RSB): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g');
	 tmp.innerHTML +=  ("<br>"); 
 
 
 cal=0.2*(cal_consume)*(1.5/3.5);
	 tmp.innerHTML += ("Spiced Fruit Cereal (RSB): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
 
 cal=0.2*(cal_consume)*(0.5/3.5);
	 tmp.innerHTML += ("Fruit cocktail (RSB): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
	 
 }
 
 else if(rand_eat_break==2){
	 tmp.innerHTML +=  ("<br>");
	 tmp.innerHTML += ("Grape Drink: ");
	 tmp.innerHTML += ('100g')
	 tmp.innerHTML +=  ("<br>");
	 
	 cal=0.2*(cal_consume)*(35/44);
		 tmp.innerHTML += ("Cornflakes (RSB): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g');
	 tmp.innerHTML +=  ("<br>"); 
 
 
 cal=0.2*(cal_consume)*(5/44);
	 tmp.innerHTML += ("Fruit Cocktail (RSB): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
 
 cal=0.2*(cal_consume)*(1/11);
	 tmp.innerHTML += ("Peaches (IM): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
	 
 }
 
 else if(rand_eat_break==3){
	 tmp.innerHTML +=  ("<br>");
	 tmp.innerHTML += ("Pineapple Drink: ");
	 tmp.innerHTML += ('100g')
	 tmp.innerHTML +=  ("<br>");
	 
	 cal=0.2*(cal_consume)*(35/45);
		 tmp.innerHTML += ("Sausage Patties (RSB): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g');
	 tmp.innerHTML +=  ("<br>"); 
 
 
 cal=0.2*(cal_consume)*(5/45);
	 tmp.innerHTML += ("Apricot (IM): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
 
 cal=0.2*(cal_consume)*(4/45);
	 tmp.innerHTML += ("Peaches (IM): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
	 
 }
 
  else if(rand_eat_break==4){
	 tmp.innerHTML +=  ("<br>");
	 tmp.innerHTML += ("Orange Juice: ");
	 tmp.innerHTML += ('100g')
	 tmp.innerHTML +=  ("<br>");
	 
	 cal=0.2*(cal_consume)*(15/40);
		 tmp.innerHTML += ("Scrambled eggs (RSB): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g');
	 tmp.innerHTML +=  ("<br>"); 
 
 
 cal=0.2*(cal_consume)*(15/40);
	 tmp.innerHTML += ("Spiced Fruit Cereal (RSB): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
 
 cal=0.2*(cal_consume)*(4/40);
	 tmp.innerHTML += ("Peaches (IM): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
	 
	 
 cal=0.2*(cal_consume)*(5/40);
	 tmp.innerHTML += ("Apricot (IM): ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>")
 
	 
 }
  
 var tmp= document.getElementById("lunch");
 tmp.innerHTML =""
 rand_eat_lunch=Math.floor((Math.random() * 3) + 1);
 // rand_eat_lunch=1
 
 if(rand_eat_lunch==1){
	 tmp.innerHTML += ("Chicken and rice soup: ");
	 tmp.innerHTML += ('100g');
	 tmp.innerHTML +=  ("<br>");
	 
	 // cal=0.2*(cal_consume)*(35/45);
	 tmp.innerHTML += ("Bread Slice and Mustard: ");
	 // tmp.innerHTML += (cal);
	 tmp.innerHTML += ('4 slices');
	 tmp.innerHTML +=  ("<br>"); 
 
 
 cal=(7/20)*(cal_consume)*(25/60);
	 tmp.innerHTML += ("Beef Pot Roast: ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
 
 cal=(7/20)*(cal_consume)*(35/60);
	 tmp.innerHTML += ("Chicken and Vegetables: ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
	 
 }
 
 
 
 else if(rand_eat_lunch==2){
	 tmp.innerHTML +=  ("<br>");
	 tmp.innerHTML += ("Lobster Bisque: ");
	 tmp.innerHTML += ('100g');
	 tmp.innerHTML +=  ("<br>");
	 
	 // cal=0.2*(cal_consume)*(35/45);
	 tmp.innerHTML += ("Bread Slice and Peanut Butter: ");
	 // tmp.innerHTML += (cal);
	 tmp.innerHTML += ('4 slices');
	 tmp.innerHTML +=  ("<br>"); 
 
 
 cal=(7/20)*(cal_consume)*(25/65);
	 tmp.innerHTML += ("Beef Stew: ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
 
 cal=(7/20)*(cal_consume)*(40/65);
	 tmp.innerHTML += ("Beef and Vegetables: ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
	 
 }
 
 
 else {
 
	 tmp.innerHTML +=  ("<br>");
	 tmp.innerHTML += ("Tomato soup: ");
	 tmp.innerHTML += ('100g');
	 tmp.innerHTML +=  ("<br>");
	 
	 // cal=0.2*(cal_consume)*(35/45);
	 tmp.innerHTML += ("Bread Slice and Cheese: ");
	 // tmp.innerHTML += (cal);
	 tmp.innerHTML += ('4 slices');
	 tmp.innerHTML +=  ("<br>"); 
 
 
 cal=(7/20)*(cal_consume)*(25/60);
	 tmp.innerHTML += ("Pork and scalloped potatoes: ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
 
 cal=(7/20)*(cal_consume)*(35/60);
	 tmp.innerHTML += ("Chicken and Rice: ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
	 
 }
 
 
 var tmp= document.getElementById("dinner");
 tmp.innerHTML =""
 rand_eat_dinner=Math.floor((Math.random() * 3) + 1);
 // rand_eat_lunch=1
 
 
 if(rand_eat_dinner==1){
	 tmp.innerHTML += ("Applesauce: ");
	 tmp.innerHTML += ('100g');
	 tmp.innerHTML +=  ("<br>");
	 
	 // cal=0.2*(cal_consume)*(35/45);
	 tmp.innerHTML += ("(Optional) Hem Salad: ");
	 // tmp.innerHTML += (cal);
	 tmp.innerHTML += ('100g');
	 tmp.innerHTML +=  ("<br>"); 
 
 
 cal=(7/20)*(cal_consume)*(15/40);
	 tmp.innerHTML += ("Spaghetti and Meat Sauce: ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
 
 cal=(7/20)*(cal_consume)*(25/40);
	 tmp.innerHTML += ("Chicken Stew: ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
	 
 }
 
 
 
 else if(rand_eat_lunch==2){
	 tmp.innerHTML +=  ("<br>");
	 tmp.innerHTML += ("Banana Pudding: ");
	 tmp.innerHTML += ('100g');
	 tmp.innerHTML +=  ("<br>");
	 
	 // cal=0.2*(cal_consume)*(35/45);
	 tmp.innerHTML += ("(Optional) Chicken Salad: ");
	 // tmp.innerHTML += (cal);
	 tmp.innerHTML += ('100g');
	 tmp.innerHTML +=  ("<br>"); 
 
 
 cal=(7/20)*(cal_consume)*(30/60);
	 tmp.innerHTML += ("Beef and gravy: ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
 
 cal=(7/20)*(cal_consume)*(30/60);
	 tmp.innerHTML += ("Frankfurters: ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
	 
 }
 
 
 else {
 
	 tmp.innerHTML +=  ("<br>");
	 tmp.innerHTML += ("Butterscotch Pudding: ");
	 tmp.innerHTML += ('100g');
	 tmp.innerHTML +=  ("<br>");
	 
	 // cal=0.2*(cal_consume)*(35/45);
	 tmp.innerHTML += ("(Optional) Cobb Salad: ");
	 // document.write(cal);
	 tmp.innerHTML += ('100g');
	 tmp.innerHTML +=  ("<br>"); 
 
 
 cal=(7/20)*(cal_consume)*(20/40);
	 tmp.innerHTML += ("Meatballs and Sauce: ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
 
 cal=(7/20)*(cal_consume)*(20/40);
	 tmp.innerHTML += ("Turkey and Gravy: ");
	 tmp.innerHTML += (cal.toFixed(2));
	 tmp.innerHTML += ('g'); 
	 
	 tmp.innerHTML +=  ("<br>");
 
	 
 }
   sessionStorage.setItem("cal_consume",cal_consume);   
   fitness_calc()
	
 }



function fitness_calc()
            {   var cal_consume= sessionStorage.getItem("cal_consume")
                let reqc = 0.3*cal_consume;
                let cb = 0;//total time of exercise
                let b = 4.83;//bicycle calories per min
                let r = 9.83;//running calories per min
                let sq = 6.36;//squats calories per min
                let dl = 7.33;//deadlifting calories per min
                let cr = 5.66;//calf raises calories per min
                let class0 = b+r+dl;
                let class1 = b+sq+cr;
                let class2 = r+sq+cr;
                let class3 = sq+dl+cr;
				
				let x = Math.floor(Math.random()*4);
				var tmp = document.getElementById('exercise1');
				tmp.innerHTML = ""
                switch(x)
                {
					case 0: cb = reqc/(3*b) + reqc/(3*r) + reqc/(3*dl);
							
							
                            tmp.innerHTML += ("Bicycling for " + Math.floor(reqc/(6*b)) + " minutes<br>");
                            tmp.innerHTML += ("Running/jogging for " + Math.floor(reqc/(6*r)) + " minutes<br>");
                            tmp.innerHTML += ("Deadlifting for " + Math.floor(reqc/(6*dl)) + " minutes<br>");
                            break;
					case 1: cb = reqc/(3*b) + reqc/(3*sq) + reqc/(3*cr);
							
							
                            tmp.innerHTML += ("Bicycling for " + Math.floor(reqc/(6*b)) + " minutes<br>");
                            tmp.innerHTML += ("Squats for " + Math.floor(reqc/(6*sq)) + " minutes<br>");
                            tmp.innerHTML += ("Calf raises for " + Math.floor(reqc/(6*cr)) + " minutes<br>");
                            break;
					case 2: cb = reqc/(3*r) + reqc/(3*sq) + reqc/(3*cr);
							
							
                            tmp.innerHTML += ("Running for " + Math.floor(reqc/(6*r)) + " minutes<br>");
                            tmp.innerHTML += ("Squats for " + Math.floor(reqc/(6*sq)) + " minutes<br>");
                            tmp.innerHTML += ("Calf raises for " + Math.floor(reqc/(6*cr)) + " minutes<br>");
                            break;
					case 3: cb = reqc/(3*sq) + reqc/(3*dl) + reqc/(3*cr);
							var div = document.getElementById('exercise');
                            tmp.innerHTML += ("Squats for " + Math.floor(reqc/(6*sq)) + " minutes<br>");
                            tmp.innerHTML += ("Deadlifting for " + Math.floor(reqc/(6*dl)) + " minutes<br>");
                            tmp.innerHTML += ("Calf raises for " + Math.floor(reqc/(6*cr)) + " minutes<br>");
                            break;        
				}
				
				var tmp = document.getElementById('exercise2');
				tmp.innerHTML = "" 
                switch(x)
                {
					case 0: cb = reqc/(3*b) + reqc/(3*r) + reqc/(3*dl);
							
                            tmp.innerHTML += ("Bicycling for " + Math.floor(reqc/(6*b)) + " minutes<br>");
                            tmp.innerHTML += ("Running/jogging for " + Math.floor(reqc/(6*r)) + " minutes<br>");
                            tmp.innerHTML += ("Deadlifting for " + Math.floor(reqc/(6*dl)) + " minutes<br>");
                            break;
					case 1: cb = reqc/(3*b) + reqc/(3*sq) + reqc/(3*cr);
							
                            tmp.innerHTML += ("Bicycling for " + Math.floor(reqc/(6*b)) + " minutes<br>");
                            tmp.innerHTML += ("Squats for " + Math.floor(reqc/(6*sq)) + " minutes<br>");
                            tmp.innerHTML += ("Calf raises for " + Math.floor(reqc/(6*cr)) + " minutes<br>");
                            break;
					case 2: cb = reqc/(3*r) + reqc/(3*sq) + reqc/(3*cr);
							
                            tmp.innerHTML += ("Running for " + Math.floor(reqc/(6*r)) + " minutes<br>");
                            tmp.innerHTML += ("Squats for " + Math.floor(reqc/(6*sq)) + " minutes<br>");
                            tmp.innerHTML += ("Calf raises for " + Math.floor(reqc/(6*cr)) + " minutes<br>");
                            break;
					case 3: cb = reqc/(3*sq) + reqc/(3*dl) + reqc/(3*cr);
                            tmp.innerHTML += ("Squats for " + Math.floor(reqc/(6*sq)) + " minutes<br>");
                            tmp.innerHTML += ("Deadlifting for " + Math.floor(reqc/(6*dl)) + " minutes<br>");
                            tmp.innerHTML += ("Calf raises for " + Math.floor(reqc/(6*cr)) + " minutes<br>");
                            break;        
                }
                //tmp.innerHTML += (Math.floor(cb));
			}
			













//Timetable JavaScript

(function(){
	// Vertical Timeline - by CodyHouse.co
	  function VerticalTimeline( element ) {
		  this.element = element;
		  this.blocks = this.element.getElementsByClassName("cd-timeline__block");
		  this.images = this.element.getElementsByClassName("cd-timeline__img");
		  this.contents = this.element.getElementsByClassName("cd-timeline__content");
		  this.offset = 0.8;
		  this.hideBlocks();
	  };
  
	  VerticalTimeline.prototype.hideBlocks = function() {
		  if ( !"classList" in document.documentElement ) {
			  return; // no animation on older browsers
		  }
		  //hide timeline blocks which are outside the viewport
		  var self = this;
		  for( var i = 0; i < this.blocks.length; i++) {
			  (function(i){
				  if( self.blocks .getBoundingClientRect().top > window.innerHeight*self.offset ) {
					  self.images .classList.add("cd-timeline__img--hidden"); 
					  self.contents .classList.add("cd-timeline__content--hidden"); 
				  }
			  })(i);
		  }
	  };
  
	  VerticalTimeline.prototype.showBlocks = function() {
		  if ( ! "classList" in document.documentElement ) {
			  return;
		  }
		  var self = this;
		  for( var i = 0; i < this.blocks.length; i++) {
			  (function(i){
				  if( self.contents .classList.contains("cd-timeline__content--hidden") && self.blocks .getBoundingClientRect().top <= window.innerHeight*self.offset ) {
					  // add bounce-in animation
					  self.images .classList.add("cd-timeline__img--bounce-in");
					  self.contents .classList.add("cd-timeline__content--bounce-in");
					  self.images .classList.remove("cd-timeline__img--hidden");
					  self.contents .classList.remove("cd-timeline__content--hidden");
				  }
			  })(i);
		  }
	  };
  
	  var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
		  verticalTimelinesArray = [],
		  scrolling = false;
	  if( verticalTimelines.length > 0 ) {
		  for( var i = 0; i < verticalTimelines.length; i++) {
			  (function(i){
				  verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines ));
			  })(i);
		  }
  
		  //show timeline blocks on scrolling
		  window.addEventListener("scroll", function(event) {
			  if( !scrolling ) {
				  scrolling = true;
				  (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
			  }
		  });
	  }
  
	  function checkTimelineScroll() {
		  verticalTimelinesArray.forEach(function(timeline){
			  timeline.showBlocks();
		  });
		  scrolling = false;
	  };
  })();
  
  /*
  var para = document.createElement("p");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);
  
  var element = document.getElementById("div1");
  element.appendChild(para);
  */
  /*
  const append = (message)=>{
	  const messageElement = document.createElement('div');
	  messageElement.innerText = message;
	  messageElement.classList.add('message');
	  messageContainer.append(messageElement);
  }
  
  append(`You: ${message}`, 'right')
  
 var div = document.getElementById('myElementID');
div.innerHTML += "Here is some more data appended"; */
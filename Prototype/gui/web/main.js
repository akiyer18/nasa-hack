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
	var data_diet = document.getElementById("data_diet").value
	var data_noise = document.getElementById("data_noise").value
    var f = document.getElementById("medication");
	var medication_numeric = f.options[f.selectedIndex].value;
	calc_activity()
	var data_array=[work_numeric, data_workhours, data_diet, data_noise, medication_numeric]
	eel.pass_to_python(data_array)
	

	
}
function change()
{
	calc_calories()
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
 
 tmp.innerHTML +=  ("<br>");
 tmp.innerHTML +=  ("<br>");
 if(rand_eat_lunch==1){
	 tmp.innerHTML +=  ("<br>");
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
 
 
 tmp.innerHTML +=  ("<br>");
 tmp.innerHTML +=  ("<br>");
 

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
				  if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
					  self.images[i].classList.add("cd-timeline__img--hidden"); 
					  self.contents[i].classList.add("cd-timeline__content--hidden"); 
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
				  if( self.contents[i].classList.contains("cd-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
					  // add bounce-in animation
					  self.images[i].classList.add("cd-timeline__img--bounce-in");
					  self.contents[i].classList.add("cd-timeline__content--bounce-in");
					  self.images[i].classList.remove("cd-timeline__img--hidden");
					  self.contents[i].classList.remove("cd-timeline__content--hidden");
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
				  verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
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
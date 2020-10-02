var work_numeric
var data_workhours
var activity_level
var weight,height,gender,preflight,inflight;
var cal_consume;
var age

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
    calc_calories()
}


function calljs() {
	
	var e = document.getElementById("work");
	work_numeric = e.options[e.selectedIndex].value;
	data_workhours = document.getElementById("data_workhours").value
	var data_diet = document.getElementById("data_diet").value
	var data_noise = document.getElementById("data_noise").value
    var f = document.getElementById("medication");
	var medication_numeric = f.options[f.selectedIndex].value;
	document.write()
	calc_activity() 
	var data_array=[work_numeric, data_workhours, data_diet, data_noise, medication_numeric]
	eel.pass_to_python(data_array)
	//window.location = 'page3.html';

}


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
	else if(n=="khushi" && p=="ku1505")
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
  document.write(BMM ); 
  document.write('\n'); 
 document.write("Total calories to be taken: ")
 document.write(cal_consume);
 document.write("<br>")
 document.write("<br>");
 
 // Astronaut first breakfast: cold roast pork, mashed potatoes, rich wheat bread, quince sticks and coffee.
 
 // Astronaut second breakfast: cheese, ship biscuits and apple juice.
 
 // Astronaut lunch: jellied sturgeon, sorrel soup, stewed beef, bread, grape and plum juice, prunes.
 
 // Astronaut supper: pork hamburger with egg, cottage cheese with nuts, rye bread, sweets and tea
 
 let cal=0;
 let val=0;
 rand_eat_break= Math.floor((Math.random() * 4) + 1);
 if(rand_eat_break==1){
	 document.write("Breakfast")
	 document.write ("<br>");
	 document.write("Cocoa: ");
	 document.write('100g')
	 document.write ("<br>");
	 
	 cal=0.2*(cal_consume)*(1.5/3.5);
		 document.write("Canadian Bacon and Applesauce (RSB): ");
	 document.write(cal.toFixed(2));
	 document.write('g');
	 document.write ("<br>"); 
 
 
 cal=0.2*(cal_consume)*(1.5/3.5);
	 document.write("Spiced Fruit Cereal (RSB): ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
 
 cal=0.2*(cal_consume)*(0.5/3.5);
	 document.write("Fruit cocktail (RSB): ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
	 
 }
 
 else if(rand_eat_break==2){
	 document.write("Breakfast")
	 document.write ("<br>");
	 document.write("Grape Drink: ");
	 document.write('100g')
	 document.write ("<br>");
	 
	 cal=0.2*(cal_consume)*(35/44);
		 document.write("Cornflakes (RSB): ");
	 document.write(cal.toFixed(2));
	 document.write('g');
	 document.write ("<br>"); 
 
 
 cal=0.2*(cal_consume)*(5/44);
	 document.write("Fruit Cocktail (RSB): ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
 
 cal=0.2*(cal_consume)*(1/11);
	 document.write("Peaches (IM): ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
	 
 }
 
 else if(rand_eat_break==3){
	 document.write("Breakfast")
	 document.write ("<br>");
	 document.write("Pineapple Drink: ");
	 document.write('100g')
	 document.write ("<br>");
	 
	 cal=0.2*(cal_consume)*(35/45);
		 document.write("Sausage Patties (RSB): ");
	 document.write(cal.toFixed(2));
	 document.write('g');
	 document.write ("<br>"); 
 
 
 cal=0.2*(cal_consume)*(5/45);
	 document.write("Apricot (IM): ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
 
 cal=0.2*(cal_consume)*(4/45);
	 document.write("Peaches (IM): ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
	 
 }
 
  else if(rand_eat_break==4){
	 document.write("Breakfast")
	 document.write ("<br>");
	 document.write("Orange Juice: ");
	 document.write('100g')
	 document.write ("<br>");
	 
	 cal=0.2*(cal_consume)*(15/40);
		 document.write("Scrambled eggs (RSB): ");
	 document.write(cal.toFixed(2));
	 document.write('g');
	 document.write ("<br>"); 
 
 
 cal=0.2*(cal_consume)*(15/40);
	 document.write("Spiced Fruit Cereal (RSB): ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
 
 cal=0.2*(cal_consume)*(4/40);
	 document.write("Peaches (IM): ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
	 
	 
 cal=0.2*(cal_consume)*(5/40);
	 document.write("Apricot (IM): ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>")
 
	 
 }
 
 
 
 rand_eat_lunch=Math.floor((Math.random() * 3) + 1);
 // rand_eat_lunch=1
 
 document.write ("<br>");
 document.write ("<br>");
 if(rand_eat_lunch==1){
	 document.write("Lunch");
	 document.write ("<br>");
	 document.write("Chicken and rice soup: ");
	 document.write('100g');
	 document.write ("<br>");
	 
	 // cal=0.2*(cal_consume)*(35/45);
	 document.write("Bread Slice and Mustard: ");
	 // document.write(cal);
	 document.write('4 slices');
	 document.write ("<br>"); 
 
 
 cal=(7/20)*(cal_consume)*(25/60);
	 document.write("Beef Pot Roast: ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
 
 cal=(7/20)*(cal_consume)*(35/60);
	 document.write("Chicken and Vegetables: ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
	 
 }
 
 
 
 else if(rand_eat_lunch==2){
	 document.write("Lunch");
	 document.write ("<br>");
	 document.write("Lobster Bisque: ");
	 document.write('100g');
	 document.write ("<br>");
	 
	 // cal=0.2*(cal_consume)*(35/45);
	 document.write("Bread Slice and Peanut Butter: ");
	 // document.write(cal);
	 document.write('4 slices');
	 document.write ("<br>"); 
 
 
 cal=(7/20)*(cal_consume)*(25/65);
	 document.write("Beef Stew: ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
 
 cal=(7/20)*(cal_consume)*(40/65);
	 document.write("Beef and Vegetables: ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
	 
 }
 
 
 else {
 
	 document.write("Lunch");
	 document.write ("<br>");
	 document.write("Tomato soup: ");
	 document.write('100g');
	 document.write ("<br>");
	 
	 // cal=0.2*(cal_consume)*(35/45);
	 document.write("Bread Slice and Cheese: ");
	 // document.write(cal);
	 document.write('4 slices');
	 document.write ("<br>"); 
 
 
 cal=(7/20)*(cal_consume)*(25/60);
	 document.write("Pork and scalloped potatoes: ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
 
 cal=(7/20)*(cal_consume)*(35/60);
	 document.write("Chicken and Rice: ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
	 
 }
 
 
 document.write ("<br>");
 document.write ("<br>");
 
 rand_eat_dinner=Math.floor((Math.random() * 3) + 1);
 // rand_eat_lunch=1
 
 
 if(rand_eat_dinner==1){
	 document.write("Dinner");
	 document.write ("<br>");
	 document.write("Applesauce: ");
	 document.write('100g');
	 document.write ("<br>");
	 
	 // cal=0.2*(cal_consume)*(35/45);
	 document.write("(Optional) Hem Salad: ");
	 // document.write(cal);
	 document.write('100g');
	 document.write ("<br>"); 
 
 
 cal=(7/20)*(cal_consume)*(15/40);
	 document.write("Spaghetti and Meat Sauce: ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
 
 cal=(7/20)*(cal_consume)*(25/40);
	 document.write("Chicken Stew: ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
	 
 }
 
 
 
 else if(rand_eat_lunch==2){
	 document.write("Dinner");
	 document.write ("<br>");
	 document.write("Banana Pudding: ");
	 document.write('100g');
	 document.write ("<br>");
	 
	 // cal=0.2*(cal_consume)*(35/45);
	 document.write("(Optional) Chicken Salad: ");
	 // document.write(cal);
	 document.write('100g');
	 document.write ("<br>"); 
 
 
 cal=(7/20)*(cal_consume)*(30/60);
	 document.write("Beef and gravy: ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
 
 cal=(7/20)*(cal_consume)*(30/60);
	 document.write("Frankfurters: ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
	 
 }
 
 
 else {
 
	 document.write("Dinner");
	 document.write ("<br>");
	 document.write("Butterscotch Pudding: ");
	 document.write('100g');
	 document.write ("<br>");
	 
	 // cal=0.2*(cal_consume)*(35/45);
	 document.write("(Optional) Cobb Salad: ");
	 // document.write(cal);
	 document.write('100g');
	 document.write ("<br>"); 
 
 
 cal=(7/20)*(cal_consume)*(20/40);
	 document.write("Meatballs and Sauce: ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
 
 cal=(7/20)*(cal_consume)*(20/40);
	 document.write("Turkey and Gravy: ");
	 document.write(cal.toFixed(2));
	 document.write('g'); 
	 
	 document.write ("<br>");
 
	 
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

                switch(x)
                {
                    case 0: cb = reqc/(3*b) + reqc/(3*r) + reqc/(3*dl);
                            document.write("Bicycling for " + Math.floor(reqc/(3*b)) + " minutes<br>");
                            document.write("Running/jogging for " + Math.floor(reqc/(3*r)) + " minutes<br>");
                            document.write("Deadlifting for " + Math.floor(reqc/(3*dl)) + " minutes<br>");
                            break;
                    case 1: cb = reqc/(3*b) + reqc/(3*sq) + reqc/(3*cr);
                            document.write("Bicycling for " + Math.floor(reqc/(3*b)) + " minutes<br>");
                            document.write("Squats for " + Math.floor(reqc/(3*sq)) + " minutes<br>");
                            document.write("Calf raises for " + Math.floor(reqc/(3*cr)) + " minutes<br>");
                            break;
                    case 2: cb = reqc/(3*r) + reqc/(3*sq) + reqc/(3*cr);
                            document.write("Running for " + Math.floor(reqc/(3*r)) + " minutes<br>");
                            document.write("Squats for " + Math.floor(reqc/(3*sq)) + " minutes<br>");
                            document.write("Calf raises for " + Math.floor(reqc/(3*cr)) + " minutes<br>");
                            break;
                    case 3: cb = reqc/(3*sq) + reqc/(3*dl) + reqc/(3*cr);
                            document.write("Squats for " + Math.floor(reqc/(3*sq)) + " minutes<br>");
                            document.write("Deadlifting for " + Math.floor(reqc/(3*dl)) + " minutes<br>");
                            document.write("Calf raises for " + Math.floor(reqc/(3*cr)) + " minutes<br>");
                            break;        
                }
                document.write(Math.floor(cb));
            }
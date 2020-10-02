function calljs() {
	
	var e = document.getElementById("work");
	var work_numeric = e.options[e.selectedIndex].value;
	var data_workhours = document.getElementById("data_workhours").value
	var data_diet = document.getElementById("data_diet").value
	var data_noise = document.getElementById("data_noise").value
    var f = document.getElementById("medication");
    var medication_numeric = f.options[f.selectedIndex].value;
	var data_array=[work_numeric, data_workhours, data_diet, data_noise, medication_numeric]
	eel.pass_to_python(data_array)
	window.location = 'page3.html';

}

function ConfirmID()
{
	var age,weight,height,gender,preflight,inflight;
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
	if(flag==1){
	window.location = 'index.html';
	}

}
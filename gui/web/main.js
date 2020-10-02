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

}


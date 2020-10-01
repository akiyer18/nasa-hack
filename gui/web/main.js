function calljs() {
	var data1 = document.getElementById("data1").value
	var data2 = document.getElementById("data2").value
	var data3 = document.getElementById("data3").value
	var data6 = document.getElementById("data6").value
	var data7 = document.getElementById("data7").value
	var data8 = document.getElementById("data8").value
	var e = document.getElementById("work");
	var strUser = e.options[e.selectedIndex].value;
	var f = document.getElementById("medication");
    var strUser2 = f.options[f.selectedIndex].value;
	var data_array=[data1,data2,data3,data6,data7,data8,strUser,strUser2]
    eel.pass_to_python(data_array)

}


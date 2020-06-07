
var name= "school name";
var type= "type";		
var minAge= 5;	
var maxAge= 10;
var latitude = "34°10′38″N";		
var longitude=	"118°24′57″W";		
var totalEnrollment= 1000;		
var totalStaff= 100;		
var address = "California";		
var asian = 0.40;
var white = 0.10;
var hispanic = 0.50;
var squareArea = 10000;		
var areaCaseRate = 490
var totalMask = 200;
var riskIndex = 20;
var frequency=0;
var maskPercentage= 0;
var schoolList = ['','Grant High School','Van Nuys High School','Marco Antonio Firebaugh High School'];

function setSchoolList(){
	var myDiv = document.getElementById("schoolDiv");
	var selectList = document.createElement("select");
	selectList.setAttribute("id", "school");
	selectList.setAttribute('onchange','setSchool(this)')
	myDiv.appendChild(selectList);
	
	for (var i = 0; i < schoolList.length; i++) {
		var option = document.createElement("option");
		option.setAttribute("value", schoolList[i]);
		option.text = schoolList[i];
		option.value= schoolList[i];
		selectList.appendChild(option);
	}
}


setSchoolList()

function updateData(){
	document.getElementById("name").innerHTML = name;
	document.getElementById("type").innerHTML = type;
	document.getElementById("minAge").innerHTML =  minAge;
	document.getElementById("maxAge").innerHTML = maxAge;
	document.getElementById("latitude").innerHTML = latitude;
	document.getElementById("longitude").innerHTML = longitude;
	document.getElementById("enroll").innerHTML = totalEnrollment;
	document.getElementById("staff").innerHTML = totalStaff;
	document.getElementById("address").innerHTML = address;
	document.getElementById("asian").innerHTML =  asian + "%";
	document.getElementById("white").innerHTML =  white +"%";
	document.getElementById("hispanic").innerHTML =  hispanic +"%";
	document.getElementById("area").innerHTML = squareArea;
	document.getElementById("rate").innerHTML = areaCaseRate;
}

function getData(){
	frequency = document.getElementById("frequency").value;
	maskPercentage = document.getElementById("mask").value;
	console.log(frequency);
	console.log(maskPercentage);
}

function setResult(){
	document.getElementById("risk").innerHTML = riskIndex;
	document.getElementById("totalMask").innerHTML = totalMask;
}


$(document).ready(function() {
  $('#estimateButton').click(function(event) {
	getData();
	setResult();
	event.preventDefault();
  })

})

function setSchool(sel){
	name = sel.options[sel.selectedIndex].value;
	updateData();
}

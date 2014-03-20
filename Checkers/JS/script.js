var firstTime = 0;

function renderTime(){
	var currentTime = new Date();
	var diem = "AM"
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	
	
	if(h == 0){
		h=12;
	}
	else if(h>12){
		h=h-12;
		diem="PM";
	}
	
	
	if(h<10){
		h = "0"+ h;
	}
	
	if(m<10){
		m = "0"+m;
	}
	
	if(s<10){
		s = "0"+s;
	}
	
	var myClock = document.getElementById("clockDisplay");
	myClock.textContent = h+":"+m+":"+s+" "+diem;
	
	if((location.pathname.substring(location.pathname.lastIndexOf("/") + 1)=="index.php" || location.pathname.substring(location.pathname.lastIndexOf("/") + 1)=="") && firstTime==0){
		board();
		firstTime++;
	}
	
	setTimeout('renderTime()', 1000);
	
	
	

}



function board(){
	var c=document.getElementById("gameBoard");
	var ctx=c.getContext("2d");
	ctx.fillStyle= "#a30000";
	ctx.fillRect(0,0,640,640);
	
	for(var i=0; i<=7; i++){
		for(var j=0; j<=7; j++){
			
			if((i+j)%2==0){
				ctx.fillStyle = "black";
				ctx.fillRect(j*80,i*80,80,80);
			}
		}
	}
	
}


function clicked(){
	var c=document.getElementById("gameBoard");
	var ctx=c.getContext("2d");
	var counter = 0;
	for(var i=0; i<= 7; i++){
		for(var j=0; j<=7; j++){
			counter++;
			
			if((i+j)%2==0 && counter<25){
				ctx.shadowColor="white"
				ctx.shadowBlur = 3;
				ctx.shadowOffsetX = 2;
				ctx.shadowOffsetY = 2;
				
				ctx.fillStyle = "#808080";
				//ctx.strokeStyle= "#a30000";
				ctx.beginPath();
				ctx.arc(j*80+40,i*80+40,25,0,2*Math.PI);
				ctx.fill();
				//ctx.stroke();
				
			}
			
			if((i+j)%2==0 && counter>=41){
				ctx.shadowColor="white"
				ctx.shadowBlur = 3;
				ctx.shadowOffsetX = 1;
				ctx.shadowOffsetY = 1;
				
				
				ctx.fillStyle = "red";
				//ctx.strokeStyle= "#eeee8d";
				ctx.beginPath();
				ctx.arc(j*80+40,i*80+40,25,0,2*Math.PI);
				
				
				ctx.fill();
				//ctx.stroke();
				
				
			}	
		}
	}
}


function validate_fname(){
	var input=document.forms["registration"]["firstname"].value;
	
	if (input==null || input==""){
		document.forms["registration"]["firstname"].style.background="#c86666";
		document.forms["registration"]["firstname"].placeholder="First Name *REQUIRED FIELD*";
		
	}

	else
		document.forms["registration"]["firstname"].style.background="white";
}


function validate_lname(){
	var input=document.forms["registration"]["lastname"].value;

	if (input==null || input==""){
		document.forms["registration"]["lastname"].style.background="#c86666";
		document.forms["registration"]["lastname"].placeholder="Last Name *REQUIRED FIELD*";
	}
	
	else
		document.forms["registration"]["lastname"].style.background="white";
}

function validate_phone(){
	var input=document.forms["registration"]["phonenumber"].value;
	var pattern= new RegExp("^(\([0-9]{3}\) |[0-9]{3}\-)[0-9]{3}-[0-9]{4}");
	var isValid= pattern.test(input);

	if (!isValid || input==null || input==""){
		
		document.forms["registration"]["phonenumber"].style.background="#c86666";
		document.forms["registration"]["phonenumber"].placeholder="Phone Number (ex.xxx-xxx-xxxx) *REQUIRED FIELD*";
	}
	
	else
		document.forms["registration"]["phonenumber"].style.background="white";
}


function validate_email(){
	var input=document.forms["registration"]["email"].value;
	var pattern= new RegExp("[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}");
	var isValid= pattern.test(input);
	
	if (!isValid || input==null || input==""){
		document.forms["registration"]["email"].style.background="#c86666";
		document.forms["registration"]["email"].placeholder="Email *REQUIRED FIELD*";
	}
	
	else
		document.forms["registration"]["email"].style.background="white";
}

function validate_password(){
	var input=document.forms["registration"]["password"].value;
	if (input==null || input==""){
		document.forms["registration"]["password"].style.background="#c86666";
		document.forms["registration"]["password"].placeholder="Password *REQUIRED FIELD*";
	}
	
	else if(input.length<8){
		document.forms["registration"]["password"].style.background="#c86666";
		document.forms["registration"]["password"].value="";
		document.forms["registration"]["password"].placeholder="Password *TOO SHORT ATLEAST 8 CHARACTERS*";
	}
	else
		document.forms["registration"]["password"].style.background="white";
}

function validate_confpassword(){
	input=document.forms["registration"]["confpassword"].value;
	input2=document.forms["registration"]["password"].value;
	
	if (input==null || input=="" || !(input==input2)){
		document.forms["registration"]["confpassword"].style.background="#c86666";
		document.forms["registration"]["confpassword"].placeholder="Confirm Password *REQUIRED FIELD*";
	}
	
	else
		document.forms["registration"]["confpassword"].style.background="white";

}



function validateForm(){
	var badInput= 0;
	
	//FIRST NAME VALIDATION
	var input=document.forms["registration"]["firstname"].value;
	
	if (input==null || input=="")
		badInput++;	
	
	//****************************************************************************
	
	//LAST NAME VALIDATION
	input=document.forms["registration"]["lastname"].value;
	if (input==null || input=="")
		badInput++;

	
	//****************************************************************************
	
	//PHONE NUMBER VALIDATION
	input=document.forms["registration"]["phonenumber"].value;
	var pattern= new RegExp("^(\([0-9]{3}\) |[0-9]{3}\-)[0-9]{3}-[0-9]{4}");
	var isValid= pattern.test(input);
	
	if (!isValid || input==null || input=="")
		badInput++;
	
	//****************************************************************************

	
	
	//EMAIL VALIDATION
	input=document.forms["registration"]["email"].value;
	var pattern= new RegExp("[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}");
	var isValid= pattern.test(input);
	
	if (!isValid || input==null || input=="")
		badInput++;

	
	//****************************************************************************
	
	
	
	//PASSWORD VALIDATION
	input=document.forms["registration"]["password"].value;
	if (input==null || input=="")
		badInput++;
	
	
	
	input=document.forms["registration"]["confpassword"].value;
	input2=document.forms["registration"]["password"].value;
	
	if (input==null || input=="" || !(input==input2))
		badInput++;

	
	//****************************************************************************

	
	if(badInput>0){
		alert("Please Fill In All Fields Appropriately!");
		return false;
	}
		
	
}




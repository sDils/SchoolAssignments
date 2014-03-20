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
	
	if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1)=="index.html" && firstTime==0){
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

function validateForm(){
	var input=document.forms["registration"]["firstname"].value;
	if (input==null || input=="First Name"){
		document.forms["registration"]["firstname"].style.background="#eeee8d";
		alert("Please Provide Your First Name Before Submitting");
		document.forms["registration"]["firstname"].style.background="white"
		return false;
	}
	
	input=document.forms["registration"]["lastname"].value;
	if (input==null || input=="Last Name"){
		document.forms["registration"]["lastname"].style.background="#eeee8d";
		alert("Please Provide Your Family Name Before Submitting");
		document.forms["registration"]["lastname"].style.background="white";
		
		return false;
	}
	
	
	input=document.forms["registration"]["phonenumber"].value;
	var pattern= new RegExp("^(\([0-9]{3}\) |[0-9]{3}\-)[0-9]{3}-[0-9]{4}");
	var isValid= pattern.test(input);
	
	if (!isValid || input==null || input==""){
		document.forms["registration"]["phonenumber"].style.background="#eeee8d";
		alert("Please Provide A Valid Phone Number Before Submitting");
		document.forms["registration"]["phonenumber"].style.background="white";
		
		return false;
	}
	
	
	input=document.forms["registration"]["email"].value;
	var pattern= new RegExp("[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}");
	var isValid= pattern.test(input);
	
	if (!isValid || input==null || input==""){
		document.forms["registration"]["email"].style.background="#eeee8d";
		alert("Please Provide A Valid Email Before Submitting");
		document.forms["registration"]["email"].style.background="white";
		
		return false;
	}
	
	
	input=document.forms["registration"]["password"].value;
	if (input==null || input=="Password"){
		document.forms["registration"]["password"].style.background="#eeee8d";
		alert("Please Provide A Password Before Submitting");
		document.forms["registration"]["password"].style.background="white";
		
		return false;
	}
	
	input=document.forms["registration"]["confpassword"].value;
	input2=document.forms["registration"]["password"].value;
	
	if (input==null || input=="Confirm Password" || !(input==input2)){
		document.forms["registration"]["confpassword"].style.background="#eeee8d";
		alert("Your Password Has To Be Properly Confirmed Before Submitting");
		document.forms["registration"]["confpassword"].style.background="white";
		
		return false;

	}
	
	alert("Your Accont Has Been Created \n Thank You For Playing!")
}




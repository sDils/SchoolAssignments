

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
	
	setTimeout('renderTime()', 1000);
}


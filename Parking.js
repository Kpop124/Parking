canvas=document.getElementById("canvas1");
ctx=canvas.getContext("2d")
car_height=80;
car_width=80;
car_x=10;
car_y=10;
car_picture="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMtQ7gzRphBNHOpCuo9FGQ1trKm2A0vzduz-upw2eLZYOMgi0-MsXH0dvXShE3XGZ-vRs&usqp=CAU"
function imageShow(){
    background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground(); 
	background_imgTag.src = background_pic_canvas;

	car_imgTag = new Image(); 
	car_imgTag.onload = uploadrover(); 
	car_imgTag.src = car_picture;  
   
}

function uploadBackground(){
    ctx.drawImage(background_pic_canvas,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(car_picture,car_x,car_y,car_width,car_height);
}
window.addEventListener("keyDown",)
function keyDown(e){
     keypress=e.keyCode;
     if (keypress==38){
         up()
     }
     if (keypress==40){
        down()
    }
    if (keypress==37){
        left()
    }
    if (keypress==39){
        right()
    }
}

function up(){
      if( car_y>=0){
      car_y=car_y-10;
   }

}

function down(){
      if( car_y<=600){
      car_y=car_y+10;
   }

}
function left(){
       if( car_x>=0){
      car_x=car_x-10;
   }

}
function right(){
    if( car_x<=800){
      car_x=car_x+10;
   }

}








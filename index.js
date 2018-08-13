var navBar=document.getElementById("navBar");
var aboutPixFlip=document.getElementById("aboutPixFlip");
var cardFace=document.getElementById("cardFace");
var cardBack=document.getElementById("cardBack");
var toggle=document.getElementById("toggle");
var lists=document.getElementById("lists");
var img_box1=document.getElementById("img_box1");
var info_box1=document.getElementById("info_box1");
var img_box2=document.getElementById("img_box2");
var info_box2=document.getElementById("info_box2");

window.onscroll= function scrollAni(){
    if(document.body.scrollTop > 50){
    navBar.className="black";
        }else{
           navBar.className= ""; 
        }
  
    if(document.body.scrollTop > 370){
       img_box1.className+=" move_left"
        info_box1.className+=" move_right";
       }else{
        img_box1.className="img_box_left";
        info_box1.className="info_box_right";
       }

    if(document.body.scrollTop > 770){
        img_box2.className+=" move_right"
        info_box2.className+=" move_left";
       }else{
        img_box2.className="img_box_right";
        info_box2.className="info_box_left";
       }
    
    if(document.body.scrollTop > 1250){
         img_box3.className+=" move_left"
        info_box3.className+=" move_right";
       }else{
        img_box3.className="img_box_left";
        info_box3.className="info_box_right"; 
    }
    
     if(document.body.scrollTop>2250){
         cardFace.style.transform="rotateY(-180deg)";
         cardBack.style.transform="rotateY(0deg)";
     }else{
          cardFace.style.transform=null;
          cardBack.style.transform=null;
     }
      
}

    
toggle.onclick= function(){
    if(lists.style.display === "none"){
        lists.style.display = "block";
        toggle.style.backgroundColor="white";
    }else {
        lists.style.display ="none";
        toggle.style.backgroundColor="#F2EDE1";
    }
}  


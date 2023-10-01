var hitrn =0;
function hitvalue(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function makeBubble(){
    var clutter= "";

    for(var i =1;i<=152;i++){
        var rn=Math.floor(Math.random()*10)
    clutter+=` <div class="bubble">${rn} </div> `
    
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}
var score=0;
function increaseScore() {
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
var timer=60 ;
function runtimer(){
   var timerint= setInterval(function(){
        if(timer>0){
            timer--;
     document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
        }
    
    },1000)
}

var btm=document.querySelector("#pbtm")
btm.addEventListener("click",function(dets){
var clickednum = (Number(dets.target.textContent))
if (clickednum===hitrn){
    increaseScore();
    makeBubble();
    hitvalue();
}
})



makeBubble();
runtimer();
hitvalue();


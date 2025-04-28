let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let startBtn = document.createElement("button");
startBtn.innerText = "Start";

document.addEventListener("click",function(){
    if(started == false){
        console.log("game started");
        started = true;
    
        levelUp();
    }
});

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
    
        levelUp();
    }
});

function gameFlash(btn){
    console.log("Flashing button:", btn); // Debugging    
         btn.classList.add("flash");
         setTimeout(function(){
            btn.classList.remove("flash");
         },300);
         
}

function userFlash(btn){
    console.log("Flashing button:", btn); // Debugging    
         btn.classList.add("userFlash");
         setTimeout(function(){
            btn.classList.remove("userFlash");
         },300);
         
}


function levelUp(){
      userSeq = [];
      level++;
      h2.innerText = `Level ${level}`;

      let randIdx = Math.floor(Math.random() * 4);
      let randColor = btns[randIdx];
      let randBtn = document.querySelector(`.${randColor}`);
      console.log(randIdx);      
      console.log(randColor);
      console.log(randBtn);   

      gameSeq.push(randColor);

      gameFlash(randBtn);
}

function checkAns(idx){
    
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML =`Game Over! Your score was <b>${level}<b><br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");

    userSeq.push(userColor);

    setTimeout(() => {
        checkAns(userSeq.length - 1);
    }, 500); // Adjust the delay as needed

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started =false;
    gameSeq = [];
    level = 0;
}
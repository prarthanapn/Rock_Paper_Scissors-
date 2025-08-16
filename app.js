let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompchoice=()=>{

    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame=()=>{
     msg.innerText = "Game was draw. Play again!";
     msg.style.backgroundColor = "darkblue";
};

const showWinner=(userWin, userchoice, compchoice)=>{
    if(userWin){
        userscore++;
        msg.innerText = `You Won! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userScorePara.innerText=userscore;
    }
    else{
        compscore++;
        msg.innerText = `You lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
        compScorePara.innerText=compscore;
    }
};


const playgame=(userchoice)=>{
  const compchoice=gencompchoice();
   if(userchoice === compchoice){
     drawgame();
   }else{
    let userWin=true;
    if(userchoice === "rock"){
        //scissor,paper
        if(compchoice === "scissors"){
            userWin=true;
       }
       else if(compchoice === "paper"){
             userWin=false;
       }
   }
   if(userchoice === "paper")
   {
    //rock,scissors
    if(compchoice === "rock"){
        userWin=true;
    }else if(compchoice === "scissors"){
        userWin=false;
   }
  }
  if(userchoice === "scissors")
  {
    if(compchoice === "rock")
    {
        userWin=false;
    }
    else if(compchoice==="paper"){
        userWin=true;
    }
  }
  showWinner(userWin,userchoice,compchoice);
}
};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newbutton");
let msgContainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true;//playerX, playerO

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO =false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
});
let pos1val,pos2val,pos3val;

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () =>{
    for( let pattern of winpatterns) {
         pos1val = boxes[pattern[0]].innerText;
         pos2val = boxes[pattern[1]].innerText;
         pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val !="" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("Winner",pos1val);
            showwinner(pos1val);
        }
      }
    }
};

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
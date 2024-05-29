//fach all elements
let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//fach winning array matrix
let turnO = true;//playerX , PlayerO

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

//reset game ||new game
const restGame = () =>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}




//box condition X or O
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        // console.log("Box was clicked");

        if(turnO){  //playerO
            box.innerText = "O";
            turnO = false;
        }
        else{      //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;


        checkWinner();
    });
});

//disable boxes
    const disabledBoxes = () => {
        for(let box of boxes){
            box.disabled = true;
        }
    }


    //enableBoxes
    const enabledBoxes = () => {
        for(let box of boxes){
            box.disabled = false;
            box.innerText =""
        }
    }
//who is winner [fach the array and chake the winner]
const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

//chake the winning pattern
checkWinner = () =>{
    for(let pattern of winPatterns){
       
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            // console.log("winner",pos1Val);

            showWinner(pos1Val);
        }
    }
       
    
    }
};

//reset game ||new game
newGameBtn.addEventListener("click",restGame);
resetButton.addEventListener("click",restGame);
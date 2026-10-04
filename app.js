let btn = document.querySelector("#mode");
let user = document.querySelector(".user-score");
let comp = document.querySelector(".compt-score");
let msg = document.querySelector(".msg-container");
let user_score = document.querySelector("#user-score");
let compt_score = document.querySelector("#compt-score");
let userscore = 0;
let comptscore = 0;
const genCompChoice = () => {
    const options = ["stone","paper","scissor"];
    const randomIndx = Math.floor(Math.random() *3);
    return options[randomIndx];
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const Draw = () => {
    msg.innerText = "Game Draw";
    msg.style.backgroundColor = " rgb(28, 85, 87)";
}
const showWinner = (userwin) => {
    if(userwin){
        userscore++;
        user_score.innerText = userscore;
        msg.innerText = "You Win !";
        msg.style.backgroundColor ="green";
    }
    else{
        comptscore++;
        compt_score.innerText = comptscore;
        msg.innerText = "Computer Win !";
        msg.style.backgroundColor = "red";
    }
    if(userscore === 5 || comptscore === 5){
        if(userscore > comptscore){
            msg.innerText = "You Win !\nPlay Again";
        }
        else{
            msg.innerText = "You Lose.\nPlay Again";
        }
        userscore = 0;
        comptscore = 0;
    }
};
const playGame = (userChoice) => {
    const comptChoice = genCompChoice();
    if(userChoice === comptChoice){
        Draw();
    }
    else {
        let userwin = true;
        if(userChoice === "stone"){
            userwin = comptChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userwin = comptChoice ==="scissor" ? false : true;
        }
        else{
            userwin = comptChoice === "stone" ? false : true;
        }
        showWinner(userwin);
    }
}
current_mode = "light";
btn.addEventListener("click",() => {
    if(current_mode === "light"){
        current_mode = "dark";
        document.body.classList.add("dark");
    }
    else{
        current_mode = "light";
        document.body.classList.remove("dark");
    }
});


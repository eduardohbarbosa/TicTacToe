let player, winner = null;
let playerSelect = document.getElementById("player-select");
let winnerSelect = document.getElementById("winner-select");
let squares =  document.getElementsByClassName('square')
let value = "X";

changePlayer(value);

function getSquare(id){
    if(winner !== null){
        return;
    }
    let square = document.getElementById(id);

    if(square.innerHTML !== '-'){
        return;
    }

    square.innerHTML = player;
    square.style.backgroundColor = '#34D0B2';

    if (player === "X"){
        value = "O"
    }else{
        value = "X"
    }

    checkWinner();
    changePlayer(value);
}

function changePlayer(value){
    player = value;
    playerSelect.innerHTML = value
}

function checkWinner(){
    if(checkSequence(squares[0], squares[1], squares[2])){
        changeColor(squares[0], squares[1], squares[2]);
        changeWinner(squares[0]);
        return;
    }
    if(checkSequence(squares[3], squares[4], squares[5])){
        changeColor(squares[3], squares[4], squares[5]);
        changeWinner(squares[3]);
        return;
    }

    if(checkSequence(squares[6], squares[7], squares[8])){
        changeColor(squares[6], squares[7], squares[8]);
        changeWinner(squares[6]);
        return;
    }
    if(checkSequence(squares[0], squares[4], squares[8])){
        changeColor(squares[0], squares[4], squares[8]);
        changeWinner(squares[0]);
        return;
    }
    if(checkSequence(squares[2], squares[4], squares[6])){
        changeColor(squares[2], squares[4], squares[6]);
        changeWinner(squares[2]);
        return;
    }
    if(checkSequence(squares[0], squares[3], squares[6])){
        changeColor(squares[0], squares[3], squares[6]);
        changeWinner(squares[0]);
        return;
    }
    if(checkSequence(squares[1], squares[4], squares[7])){
        changeColor(squares[1], squares[4], squares[7]);
        changeWinner(squares[1]);
        return;
    }
    if(checkSequence(squares[2], squares[5], squares[8])){
        changeColor(squares[2], squares[5], squares[8]);
        changeWinner(squares[2]);
        return;
    }
}

function changeColor(q1, q2, q3){
    q1.style.backgroundColor ='#60FCA2';
    q2.style.backgroundColor ='#60FCA2';
    q3.style.backgroundColor ='#60FCA2';
}

function changeWinner(q){
    winner = q.innerHTML;
    winnerSelect.innerHTML = winner;
}

function checkSequence(q1, q2, q3){
    let equal = false;
    if(q1.innerHTML !== '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML){
        equal = true;
    }
    return equal;
}

function restart(){
    winner = null;
    winnerSelect.innerHTML = '';
    for(i = 0; i < 9; i++){
        squares[i].style.backgroundColor = '#3E4653';
        squares[i].style.color = '#3E4653';
        squares[i].innerHTML = '-'
    }

    changePlayer("X")
}
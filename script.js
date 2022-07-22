
 function Player()
 {      
        const R = document.querySelector('#Rock');
        R.addEventListener('click', () => {
          let player_selection='rock'
          RPS('rock')
          });
        const P = document.querySelector('#Paper');
        P.addEventListener('click', () => {
          let player_selection='paper'
          RPS('paper')
        });
        const S = document.querySelector('#Scissors');
        S.addEventListener('click', () => {
          let player_selection='scissors'
          RPS('scissors')
        });
    }
function RPS(player_selection){
    function computerplay(){
        let rand=Math.floor(Math.random()*3);
        if (rand===0)
            rand="rock";
        else if (rand==1)
            rand="paper";
        else
            rand="scissors";
        alert("COMPUTER SELECTION : "+rand);
        var a = document.createElement("img");
        a.src="images/"+rand+".JPG"
        var c = document.getElementById('computer');
        c.after(a);
        return rand
    }
    function RPS(player_selection,computer_selection){
        if ((player_selection == "rock" && computer_selection == "scissor")||(player_selection == "paper" && computer_selection == "rock")||(player_selection == "scissor" && computer_selection == "paper"))
            alert("you win!"+player_selection+"beats"+computer_selection)
        else if (player_selection==computer_selection)
            alert("Its a tie!")
        else 
            alert("You lose!"+computer_selection+"beats"+player_selection)
    }
    let computer_selection=computerplay()
    RPS(player_selection,computer_selection)
}
Player()
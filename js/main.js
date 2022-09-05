const gameBoard = (() =>{        
const sectors = document.querySelectorAll(".sector");

let sector = Array.from(sectors);
const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let choice = "X"; 
        
const gamePlay = () =>{
    const count = () => sector.forEach((val, index)=>{
        val.addEventListener('click',()=>{
            if(val.textContent === choice){
                index += 1;
            }else{
                index = 0;
            }
        })
        
    })
    const move = () =>{                
        sector.forEach((mark)=>{
            mark.addEventListener("click",()=>{
                if(mark.textContent === ""){                                            
                choice = choice === "X"?"O":"X";
                mark.textContent = choice;
                gameWinner();
                }                                               
            })
        })                
    }
    move()
    const resetGame = () =>{
        const reset = document.querySelector("#reset");
        reset.addEventListener('click',()=>{
            sector.forEach((mark) =>{
                mark.textContent = "";
            })
        })
    }
    resetGame();           
    const gameWinner = () => {
        let checkWinner = winner.find((combo) => 
            combo.every(idx => sector[idx].textContent === choice)
        );
        if (checkWinner) {
            alert(choice + " has won!");
        } else if(boardIsFull()) {
            alert('tie');
        }
    };              
}
const players = (_player1, _player2, _machine)=>{
    
}
return {gamePlay};       
})();
gameBoard.gamePlay();
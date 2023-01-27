console.log("Welcome to Tic tac Teo");
let music = new Audio("background.mp3.mp3");
let audioturn = new Audio("Ting.mp3.wav");
let gameover = new Audio("gameover.mp3.wav");
let turn = "X";
let isgameover = false;

//Function to chenge the Turn ;

const chengeturn = () =>{
    return turn === "X"?"0": "X"
}

//Function to Check for A win 

const checkWin = () =>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [7,8,9],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ]
     wins.forEach(e => {
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText  !== "")){
           document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
          isgameover = true;
          document.querySelector('.imgbox').getElementsByTagName('iframe')[0].style.width="200px"


        }

        
    });

}
//Game logic 
//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector(".boxtext");
    Element.addEventListener('click',()=>{
        if(boxtext.innerText === '' ){
            boxtext.innerText = turn;
           turn =   chengeturn();
            audioturn.play();
            checkWin();
            if(!isgameover){
           document.getElementsByClassName("info")[0].innerText = 'Turn for'+turn;
            } 
        }
    })
})

//Add one click listner to reset button 
reset.addEventListener('click',() =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element =>{
        Element.innerText = ""
    });
    

        
})




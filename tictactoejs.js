let playerX = true
let td = document.getElementsByClassName('box')
let symbol = 'X'
let countTurn = 0
let button = document.getElementById("button")

// what happens onclick
for(let i = 0 ; i < td.length ; i++){
    td[i].addEventListener("click", function onClick(){
        if (playerX == true) {
            symbol = "X"
        } 
        else  {
            symbol = "O"
        }
        if(td[i].innerHTML == ''){
        //switch players
        playerX = !playerX
        td[i].innerHTML= symbol;
        
        //increases moves used
         countTurn++
        }
         else{
             alert('Choose somewhere else!')
         }
        
        //checkforwinner
        printWinner()
        }
    );
}

//checking who wins
let td1 = document.getElementById("a")
let td2 = document.getElementById("b")        
let td3 = document.getElementById("c")    
let td4 = document.getElementById("d")    
let td5 = document.getElementById("e")    
let td6 = document.getElementById("f")    
let td7 = document.getElementById("g")    
let td8 = document.getElementById("h")    
let td9 = document.getElementById("i")   
  
function checkWin(){
       //horizontal
    if (td1.innerHTML == td2.innerHTML && td1.innerHTML == td3.innerHTML && td3.innerHTML !== '') {
       return true
    }   
    else if (td4.innerHTML == td5.innerHTML && td4.innerHTML== td6.innerHTML && td6.innerHTML !== ''){
        return true
    }
    else if (td7.innerHTML == td8.innerHTML && td7.innerHTML == td9.innerHTML && td9.innerHTML !== ''){
        return true
    }
    //vertical
    else if (td1.innerHTML == td4.innerHTML && td1.innerHTML== td7.innerHTML && td7.innerHTML !== ''){
        return true
    }
    else if (td2.innerHTML == td5.innerHTML && td2.innerHTML== td8.innerHTML && td8.innerHTML !== ''){
        return true
    }
    else if (td3.innerHTML == td6.innerHTML && td3.innerHTML== td9.innerHTML && td9.innerHTML !== ''){
        return true
    }
    //diagonal
    else if (td1.innerHTML == td5.innerHTML && td1.innerHTML== td9.innerHTML && td9.innerHTML !== ''){
        return true
    }
    else if (td3.innerHTML == td5.innerHTML && td3.innerHTML== td7.innerHTML && td7.innerHTML !== ''){
        return true
    }
    else{
     return false
    }
}

function printWinner(){
    if (checkWin() == true ){
        alert(symbol + ' won!')
    }
    else if(countTurn == 9 && checkWin() == false){
        alert('Its a tie!')
    }
}
 
function replay () {
    for(let i = 0; i < td.length; i++){
        countTurn=0
        td[i].innerHTML = '';
        }
    }

button.onclick = function(){
    replay()
}

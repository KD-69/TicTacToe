
let tap = true;
count = 0;




function func(id) {
    document.getElementById("tapSound").setAttribute("src", "tap.wav") 
    if (tap == true) {
        document.getElementById("note").innerHTML = "Turn of O";

    } else {
        document.getElementById("note").innerHTML = "Turn of X";
    }


    if (tap == true) {
        document.getElementById(id).innerHTML = "X";
        document.getElementById(id).disabled = true;

        tap = false;
    } else {
        document.getElementById(id).innerHTML = "O";
        document.getElementById(id).disabled = true;
        tap = true;
    }

    count += 1;
    if(count >=9){
        document.getElementById("note").innerHTML = "Game Over! Please reset the game.";
        document.getElementById("tapSound").setAttribute("src", "gameOver.wav") 
    }
    win();
}

   


    


   



// Reset Button



function reset() {

    document.getElementById("tapSound").setAttribute("src", "reset.wav")

    document.getElementById("b11").innerHTML = "";
    document.getElementById("b12").innerHTML = "";
    document.getElementById("b13").innerHTML = "";
    document.getElementById("b21").innerHTML = "";
    document.getElementById("b22").innerHTML = "";
    document.getElementById("b23").innerHTML = "";
    document.getElementById("b31").innerHTML = "";
    document.getElementById("b32").innerHTML = "";
    document.getElementById("b33").innerHTML = "";

    document.getElementById("b11").disabled = false;
    document.getElementById("b12").disabled = false;
    document.getElementById("b13").disabled = false;
    document.getElementById("b21").disabled = false;
    document.getElementById("b22").disabled = false;
    document.getElementById("b23").disabled = false;
    document.getElementById("b31").disabled = false;
    document.getElementById("b32").disabled = false;
    document.getElementById("b33").disabled = false;

    document.getElementById("note").innerHTML = "Let's Play the Game ! Turn Of X";

    count = 0;
    tap = true;

}


// Wiining section


  function win(){
    // let b11 = document.getElementById("b11")
    // let b12 = document.getElementById("b12")
    // let b13 = document.getElementById("b13")
    // let b21 = document.getElementById("b21")
    // let b22 = document.getElementById("b22")
    // let b23 = document.getElementById("b23")
    // let b31 = document.getElementById("b31")
    // let b32 = document.getElementById("b32")
    // let b33 = document.getElementById("b33")


    
    
    
    
    if(b11.innerHTML == "X" && b12.innerHTML == "X" &&b13.innerHTML == "X"){

         document.getElementById("b11").disabled = true;
         document.getElementById("b12").disabled = true;
         document.getElementById("b13").disabled = true;
         document.getElementById("b21").disabled = true;
         document.getElementById("b22").disabled = true;
         document.getElementById("b23").disabled = true;
         document.getElementById("b31").disabled = true;
         document.getElementById("b32").disabled = true;
         document.getElementById("b33").disabled = true;
        
        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "X is winner! Please Reset the game.";

    }
    if(b21.innerHTML == "X" && b22.innerHTML == "X" &&b23.innerHTML == "X"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;
    
        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "X is winner! Please Reset the game.";

    }
    if(b31.innerHTML == "X" && b32.innerHTML == "X" &&b33.innerHTML == "X"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;
        
        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "X is winner! Please Reset the game.";

    }
    if(b11.innerHTML == "X" && b21.innerHTML == "X" &&b31.innerHTML == "X"){
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;
    
        document.getElementById("tapSound").setAttribute("src", "/win.wav")
        document.getElementById("note").innerHTML = "X is winner! Please Reset the game.";

    }
    if(b12.innerHTML == "X" && b22.innerHTML == "X" &&b32.innerHTML == "X"){

        document.getElementById("b11").disabled = true;
         document.getElementById("b12").disabled = true;
         document.getElementById("b13").disabled = true;
         document.getElementById("b21").disabled = true;
         document.getElementById("b22").disabled = true;
         document.getElementById("b23").disabled = true;
         document.getElementById("b31").disabled = true;
         document.getElementById("b32").disabled = true;
         document.getElementById("b33").disabled = true;
    
         document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "X is winner! Please Reset the game.";

    }
    if(b13.innerHTML == "X" && b23.innerHTML == "X" &&b33.innerHTML == "X"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;
    
        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "X is winner! Please Reset the game.";

    }
    if(b11.innerHTML == "X" && b22.innerHTML == "X" &&b33.innerHTML == "X"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;
    
        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "X is winner! Please Reset the game.";

    }
    if(b13.innerHTML == "X" && b22.innerHTML == "X" &&b31.innerHTML == "X"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;

        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "X is winner! Please Reset the game.";

    }


    if(b11.innerHTML == "O" && b12.innerHTML == "O" &&b13.innerHTML == "O"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;
    
        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "O is winner! Please Reset the game.";

    }
    if(b21.innerHTML == "O" && b22.innerHTML == "O" &&b23.innerHTML == "O"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;
    
        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "O is winner! Please Reset the game.";

    }
    if(b31.innerHTML == "O" && b32.innerHTML == "O" &&b33.innerHTML == "O"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;
    
        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "O is winner! Please Reset the game.";

    }
    if(b11.innerHTML == "O" && b21.innerHTML == "O" &&b31.innerHTML == "O"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;
    
        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "O is winner! Please Reset the game.";

    }
    if(b12.innerHTML == "O" && b22.innerHTML == "O" &&b32.innerHTML == "O"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;
    
        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "O is winner! Please Reset the game.";

    }
    if(b13.innerHTML == "O" && b23.innerHTML == "O" &&b33.innerHTML == "O"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;
    
        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "O is winner! Please Reset the game.";

    }
    if(b11.innerHTML == "O" && b22.innerHTML == "O" &&b33.innerHTML == "O"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;

        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "O is winner! Please Reset the game.";

    }
    if(b13.innerHTML == "O" && b22.innerHTML == "O" &&b31.innerHTML == "O"){

        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b21").disabled = true;
        document.getElementById("b22").disabled = true;
        document.getElementById("b23").disabled = true;
        document.getElementById("b31").disabled = true;
        document.getElementById("b32").disabled = true;
        document.getElementById("b33").disabled = true;
    
        document.getElementById("tapSound").setAttribute("src", "win.wav")
        document.getElementById("note").innerHTML = "O is winner! Please Reset the game.";

    }
}

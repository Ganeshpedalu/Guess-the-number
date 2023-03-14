let letsplaypage = ()=>{
    window.location.href = "html file/index.html";
}

let number = Math.floor(Math.random()*100)+1;
let guesses = 0;

let checkGuess = ()=>{
    var guess = document.getElementById("guess").value;
   
    if(guess>100){
        document.getElementById("message").innerHTML = "Please enter valid number.";
        return
    }


    if (guess == number) {
        document.getElementById("message").innerHTML = "Congratulations, you guessed the number in " + guesses + " guesses!";
      } else if (guess < number) {
        document.getElementById("message").innerHTML = "Too low, try again.";
        guesses++;
      } else {
        document.getElementById("message").innerHTML = "Too high, try again.";
        guesses++;
      }
    }


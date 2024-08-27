
let running  = true;
let min = 1, max = 100;
let attemp = 0;
let answer = Math.trunc((Math.random() * max) + min);



while(running){

  let guess = window.prompt("Guess the number :");
  guess = Number(guess);

  if(isNaN(guess)){
    alert("Please enter a Number...");
  }
  else if(guess < min || guess > max){    
    alert("Please enter a valid Number!");
  }
  else{
      attemp++;
      if(guess < answer){
        alert("Guess is Less than the Answer!");

      }
      else if(guess > answer){
        alert("Guess is Greater than the Answer!");
      }
      else{
        alert("Great, You found the Answer.. You attemped " + attemp + " times");
        running = false;
      }

  }

}
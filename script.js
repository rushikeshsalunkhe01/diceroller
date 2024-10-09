const min = 1;
const max = 6;

document.getElementById("rollBtn").addEventListener("click", function() {
 
  document.getElementById("rollBtn").disabled = true;
  
 
  document.getElementById("result").textContent = "Rolling...";
  
 
  setTimeout(() => {
    const randomNumber = Math.round(Math.random() * (max - min)) + min;
    const diceImage = document.getElementById("diceImage");
    
    
    switch (randomNumber) {
      case 1:
        diceImage.src = "imges/dice1.png";
        break;
      case 2:
        diceImage.src = "imges/dice2.png";
        break;
      case 3:
        diceImage.src = "imges/dice3.png";
        break;
      case 4:
        diceImage.src = "imges/dice4.png";
        break;
      case 5:
        diceImage.src = "imges/dice5.png";
        break;
      case 6:
        diceImage.src = "imges/dice6.png";
        break;
      default:
        diceImage.src = "imges/dice1.png";
    }
    

    document.getElementById("result").textContent = `You rolled a ${randomNumber}!`;
    
   
    document.getElementById("rollBtn").disabled = false;
  }, 500);  
});

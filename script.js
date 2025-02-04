function flipCoin() {
  const coin = document.getElementById('coin');
  const resultDisplay = document.getElementById('result');

  // Simulate a coin flip
  const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

  // Update the coin's appearance
  if (result === 'Heads') {
      coin.className = 'coin heads';
      resultDisplay.textContent = "Heads: Legacy on the rise!";
  } else {
      coin.className = 'coin tails';
      resultDisplay.textContent = "Tails: Harriet's legacy inspires us all!";
  }
}

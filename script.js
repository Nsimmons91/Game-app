function flipCoin() {
  return Math.random() < 0.5 ? 'Heads' : 'Tails';
}

function playGame() {
  let player1Heads = 0;
  let player2Heads = 0;
  const winningHeads = 5; // Number of heads needed to win
  let turns = 0;
  const maxInitialTurns = 5; // First round turns
  const statusElement = document.getElementById('game-status');
  statusElement.innerHTML = ''; // Clear previous game status

  // First round of 5 turns each
  for (let i = 0; i < maxInitialTurns; i++) {
      turns++;
      const player1Flip = flipCoin();
      const player2Flip = flipCoin();

      if (player1Flip === 'Heads') {
          player1Heads++;
      }
      if (player2Flip === 'Heads') {
          player2Heads++;
      }

      statusElement.innerHTML += `Turn ${turns}: Player 1: <span class="${player1Flip === 'Heads' ? 'result-heads' : 'result-tails'}">${player1Flip}</span>, Player 2: <span class="${player2Flip === 'Heads' ? 'result-heads' : 'result-tails'}">${player2Flip}</span><br>`;
      statusElement.innerHTML += `Player 1 Heads: ${player1Heads}, Player 2 Heads: ${player2Heads}<br><br>`;
  }

  // Continue until one player reaches the winning condition
  while (player1Heads < winningHeads && player2Heads < winningHeads) {
      turns++;
      const player1Flip = flipCoin();
      const player2Flip = flipCoin();

      if (player1Flip === 'Heads') {
          player1Heads++;
      }
      if (player2Flip === 'Heads') {
          player2Heads++;
      }

      statusElement.innerHTML += `Turn ${turns}: Player 1: <span class="${player1Flip === 'Heads' ? 'result-heads' : 'result-tails'}">${player1Flip}</span>, Player 2: <span class="${player2Flip === 'Heads' ? 'result-heads' : 'result-tails'}">${player2Flip}</span><br>`;
      statusElement.innerHTML += `Player 1 Heads: ${player1Heads}, Player 2 Heads: ${player2Heads}<br><br>`;
  }

  // Determine the winner and display the appropriate message
  if (player1Heads >= winningHeads) {
      statusElement.innerHTML += `<strong>Player 1 wins after ${turns} turns! KEEP THE LEGACY ALIVE!</strong>`;
  } else {
      statusElement.innerHTML += `<strong>Player 2 wins after ${turns} turns! Never give up!</strong>`;
  }
}
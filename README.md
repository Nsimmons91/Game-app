# Game-app
<!-- 
 Instructions
 Each person will take turns clicking the flip button
 Each player will have a counter that automatically updates the score after each turn.
 To start the game over, press the reset button
-->
<!-- 
HTML
Create the basic html format for coin flip games( can be found on youtube)
Link the css and javascript links
Come up with a title for the game
Create different div containers for each game component?( example title, coin, button and score)
Add a submit button to flip the coin
-->

<!-- 
JAVASCRIPT
Double check Javascript is connected to HTML
Grab elements by id or class name
Create a variable for heads and tails
Create variables for coin,flip button, reset button, and result text and grab the elements by class name or id
Add event listeners to create the percentage of flips between heads and tails


When something goes wrong in the cloning process or if the code is not working as expected, here are the instructions. 


1. Clone the Repository:
   - Use Git to clone the repository. If something goes wrong, check the repository URL .
   
2. Navigate to Project Directory:
   - Open the terminal and navigate to the project directory.
     
3. Open the Project:
   - Use your code editor to open the project folder.
   - Check that the following files are included and linked in html:
     - index.html
     - styles.css
     - script.js


5. Look at the HTML Structure:
   - Open index.html and makke sure that the elements with classnaames and ID's  `coin`, `flip-button`, and `reset-button` are correctly defined.
   - Check that the score elements with IDs `heads-score` and `tails-score` arre there.


6. Check CSS Styling:
   - Open styles.css and confirm that classes `spin-heads` and `spin-tails` are defined and include in the keyframe animations.


7. Check JavaScript:
   - Open script.js and check :
     - let heads = 0; let tails = 0;` initializes the score.
     - The `coin`, `flipBtn`, and `resetBtn` correctly select the elements.
     - The event listeners for `flipBtn` and `resetBtn` are set up to handle clicks.
     - The updateScore function updates the DOM with the latest scores.


8. Test:
   - Open index.html in a web browser to test the game. I use vs code and the live server extension
   - Click the "Flip" button to ensure the coin flips and scores update.
   - Click the "Reset" button to ensure the scores reset.


9. Troubleshooting Steps:
   - Console Error: Open  developer tools in browser(usually F12 or right-click > Inspect) and check the console for any JavaScript errors annd fix. 
   - Element Selection: Check that the IDs and classes in the JavaScript match those in the HTML.(make sure both css and javascript is linked to html)
   - Animation Issues: Make sure CSS animations are correctly defined and linked.

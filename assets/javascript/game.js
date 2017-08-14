// Psudo-code game mechanics/goals
// Keep writing comments what each part is doing when writing code
// Less Laura-scatter-brain, more easy-to-follow ;)
// TODO: write readme file to explain game story********


// Start of game: Random number is generated & displayed on page
// Random number is btwn 19-120

// There are four images on the page, each with a secret random number assigned
// Player doesn't know the value of the number until they click on each image
// Random number is btwn 1-12
// Each click adds the value of the image to the player's score

// Player is trying to match their added score total to the random number generated on the page (targetNumber)
// Player wins when score total matches targetNumber
// Player loses when score total goes above targetNumber

// Total wins & losses are tracked on the page
// Alert win or loss to player

// When new game starts, random number values are generated again (both targetNumber and images)
// Player score resets to 0

// Fun idea: Show an overall crystal being filled up with color. When the crystal is filled (repaired), the whole game is won! and can reset the entire page, wins/losses and all


/* VARIABLES=======================================
 */


// Start whole game as an object! Something's wrong tho, this breaks EVERYTHING********
//var crystalGameObject = {

// Know I'll need this, not sure where yet... 
//Don't forget to uncomment the closing brace below
$(document).ready(function() {

// Target random number is btwn 19-120  ~FIXED
/*   var targetNumber = function getRandomInt(19, 120) {
        //min = Math.ceil(19);
        //max = Math.floor(120);
        return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    };
*/

// targetNumber WORKS
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
// FOR TESTING
console.log('Target number: ' + targetNumber);

// target id '#target-number'
$('#target-number').text(targetNumber);

// playerCounter is the score, the number that clicking on buttons adds to
// target id '#player-score'
var playerCounter = 0;

// target class '.game-score'
var wins = 0;
var losses = 0;


// Variable to hold value options for each button (hero images)
// Each random number is btwn 1-12; Needs to NOT include 0  ~FIXED
// values WORKS
var values = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
// FOR TESTING
console.log('A hero image value: ' + values);
// or
// var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// target class '.crystal-heroes'




/* FUNCTIONS=======================================
 */




// Crystal game example generates the same image and assigns value to that. I want different images, and 4 not 12..........
// Copy same for loop for now, but will need to edit
// Backwards for loop to set it to only 4 times????????

// Or, assign .on('click') and values variable to each image

// OR, make a new array of 4 (equalling my number of buttons), THEN do the loops & .on('cick') ?

var crystalHeroes = ['1st', '2nd', '3rd', '4th'];

for (var crystalHeroIndex = 0; crystalHeroIndex < crystalHeroes.length; crystalHeroIndex++) {

    //console.log(crystalHeroes);
    console.log(crystalHeroIndex);

    //Assign random number from values to each element in crystalHeroes array
    console.log(this);

    //append(values)
}


// Why doesn't this work inside of a function???

// Images can be clicked on WORKS
//$('#1st').on('click', function() {
$('.crystal-heroes').on('click', function() {   
    //console.log('1st was clicked');
    console.log('Any image was clicked');
});




// THIS WAS FROM EXAMPLE GAME - BUT MY IMAGES ARE STATIC ON PAGE..... NEEDS RENAMING. SEE ABOVE.
    $('.hero-image').on('click', function() {

        var heroValue = ($(this).attr('data-herovalue'));
    //this parseInt will make sure the numbers stay numbers rather than being returned as a string
        heroValue = parseInt(heroValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
        playerCounter += heroValue;

    //empty div for '#player-score'

        console.log('Your total so-far: ' + playerCounter);
    //alert("New score: " + playerCounter);

        if (playerCounter === targetNumber) {
        console.log('You win');
        //alert("You win!");

        //'#wins'

        } else if (playerCounter > targetNumber) {
        console.log('You lose');
        //alert("You lose!!");
    
        //'#losses'
         }

        });



});
// ^^This SHOULD closes the opening $(document).ready function, but it's NOT



/* MAIN PROCESS=======================================
 */




// }
// ^^This closing curly brace closes the whole game object



// git add assets/javascript/game.js
// git add assets/css/style.css
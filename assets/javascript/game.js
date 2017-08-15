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


//Don't forget to uncomment the closing brace below
$(document).ready(function() {

    // Target random number is btwn 19-120  ~FIXED

// Does this need to be a function to get reset on round end?

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

    var holderArray = [];




    /* FUNCTIONS=======================================
     */

    // Assign .on('click') and values variable to each image?

    // OR, make a new array of 4 (equalling my number of buttons), THEN do the loops & .on('cick') ?

    // Variable for number of images buttons
    var crystalHeroes = ['1st', '2nd', '3rd', '4th'];

//Trying to make this function work so I can reset the image values on reset
//function assignToImages() {

    for (var crystalHeroIndex = 0; crystalHeroIndex < crystalHeroes.length; crystalHeroIndex++) {

        //console.log(crystalHeroes);
        //console.log(crystalHeroIndex);

        //Assign random number from values to each element in crystalHeroes array

        // Variable to hold value options for each button (hero images)
        // Each random number is btwn 1-12; Needs to NOT include 0  ~FIXED
        // values WORKS

        var value = Math.floor(Math.random() * (12 - 1)) + 1;
        
        checkForRandomness(value, crystalHeroIndex);
        // FOR TESTING
        //console.log('An image value: ' + value);
    }


    // Function to check if the random number image value is being repetative or not
    function checkForRandomness(numbToCheck, crystalHeroIndex) {

        if (holderArray.indexOf(numbToCheck) !== -1) {

            numbToCheck = Math.floor(Math.random() * (12 - 1)) + 1;

            checkForRandomness(numbToCheck, crystalHeroIndex);

            console.log('No. from if statement: ' + numbToCheck);

        } else {
            $('#' + crystalHeroes[crystalHeroIndex]).attr('data-imagevalue', numbToCheck);
            holderArray.push(numbToCheck);
            
            console.log('No. from else statement: ' + numbToCheck);

        }
    }

//}  --this goes to the function I keep trying to make to be able to reset the image values



/* MAIN PROCESS=======================================
 */


    // Images can be clicked on WORKS
    //$('#1st').on('click', function() {
    $('.crystal-heroes').on('click', function() {
        //    console.log('1st was clicked');
        //    console.log('Any image was clicked');

        console.log($(this));

        var imgValue = ($(this).attr('data-imagevalue'));

        console.log('This is the image\'s value: ' + imgValue);


        //this parseInt will make sure the numbers stay numbers (integers) rather than being returned as a string

        imgValue = parseInt(imgValue);

        // Add the image's value to the players's "counter" which is a global variable
        // Every click, from every images adds to the global counter
        playerCounter += imgValue;

        //empty div for '#player-score'

        console.log('Your total so-far: ' + playerCounter);
        //alert("New score: " + playerCounter);
        $('#player-score').text(playerCounter);


        if (playerCounter === targetNumber) {
            
            $('#wins').text(++wins);

            console.log('You win');
            //alert("You win!");

            reWriteStats();
           

            // SHOULD THIS JUST BE ELSE?
        } else if (playerCounter > targetNumber) {
            
            $('#losses').text(++losses);

            console.log('You lose');
            //alert("You lose!!");

            reWriteStats();

        }

    });

// Reset function, STILL NEEDS TO GENERATE NEW NUMBERS
function reWriteStats() {
    
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log('Reset targetNumber: ' + targetNumber);
    $('#target-number').text(targetNumber);

    playerCounter = 0;
    $('#player-score').empty();

    //assignToImages();
    //$('#crystal-heroes').empty();

    // Trying to recall the code that creates the four random image values....
    
    for (crystalHeroIndex = 0; crystalHeroIndex < crystalHeroes.length; crystalHeroIndex++) {

        value = Math.floor(Math.random() * (12 - 1)) + 1;
       
        checkForRandomness(value, crystalHeroIndex);
        // FOR TESTING
        console.log('RESET image value: ' + value);

        //Can this just call the checkForRandomness()? - NOPE
    }
}



});
// ^^This closes the opening $(document).ready function








// }
// ^^This closing curly brace closes the whole game object



// git add assets/javascript/game.js
// git add assets/css/style.css
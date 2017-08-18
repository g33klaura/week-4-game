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

//Readies the document for jQuery
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

    // Array to hold random number image values, as they're being checked for repetition
    // SOMETIMES still get duplicate image values (check console.log to see what numbers are generated in the if or else part of the checkForRandomness function)
    var holderArray = [];


    /* FUNCTIONS=======================================
    */
    // Assign .on('click') and values variable to each image?
    // OR, make a new array of 4 (equalling my number of buttons), THEN do the loops & .on('cick') ?  ~THIS ONE!

    // Variable for number of images buttons
    var crystalHeroes = ['1st', '2nd', '3rd', '4th'];

    //Trying to make this function work so I can reset the image values on reset  ~FIXED
    function assignToImages() {
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

        // Function to check if the image values are being repeated when generated (trying to keep images from having the same value in a game round)  ~Mostly works
        function checkForRandomness(numbToCheck, crystalHeroIndex) {
            if (holderArray.indexOf(numbToCheck) !== -1) {
                numbToCheck = Math.floor(Math.random() * (12 - 1)) + 1;
                checkForRandomness(numbToCheck, crystalHeroIndex);
                // FOR TESTING
                console.log('Number from if statement: ' + numbToCheck);
            } else {
                $('#' + crystalHeroes[crystalHeroIndex]).attr('data-imagevalue', numbToCheck);
                holderArray.push(numbToCheck);
                // FOR TESTING
                console.log('Number from else statement: ' + numbToCheck);
            }
        }
    }
    // ^^This closes the assignToImages() function


    // Hover button image effects
    $('.crystal-heroes').mouseenter(function() {
        $(this).fadeTo('fast', 0.5);
    });
    $('.crystal-heroes').mouseleave(function() {
        $(this).fadeTo('fast', 1);
    });


    // Need a function to call, to empty the player score and winlose alert divs??? *sad face*


    /* MAIN PROCESS=======================================
    */
    // Call function to populate random image values
    assignToImages();

    // Images can be clicked on WORKS
    //$('#1st').on('click', function() {
    $('.crystal-heroes').on('click', function() {
        //console.log('1st was clicked');
        //console.log('Any image was clicked');
        //console.log($(this));

        // Assigns one of the randomly generated values to each image when clicked on
        var imgValue = ($(this).attr('data-imagevalue'));
        // FOR TESTING
        console.log('This image value is: ' + imgValue);
        

        //this parseInt will make sure the numbers stay numbers (integers) rather than being returned as a string
        imgValue = parseInt(imgValue);

        // Every click, from every images adds to the player score counter
        playerCounter += imgValue;

        //empty div for '#player-score'
        // FOR TESTING
        // console.log('Your total so-far: ' + playerCounter);
        //alert("New score: " + playerCounter);

        $('#player-score').text(playerCounter);
        
        if (playerCounter === targetNumber) {

            $('#wins').text(++wins);
            
            console.log('You win');
            //alert("You win!");
            
        // ALERT WIN OR LOSE TO EMPTY DIV 
            $('#game-round-alert').html("<h2>'Hooray! You\'ve won!!'</h2>");

            // Call function written below to reset the game for another round
            reWriteStats();

        } else if (playerCounter > targetNumber) {
            
            $('#losses').text(++losses);
            
            console.log('You lose');
            //alert("You lose!!");
            
        // ALERT WIN OR LOSE TO EMPTY DIV 
            $('#game-round-alert').html("<h2>'Sorry, you\'ve lost.'</h2>"); 

            // Call function to reset the game for another round
            reWriteStats();
        }
    });
    //  ^^ Closes the .on('click') function

    

    // Reset function: generate new random numbers, reset player score counter, leave total wins/losses alone
    function reWriteStats() {

        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        //console.log('Reset targetNumber: ' + targetNumber);
        $('#target-number').text(targetNumber);

        playerCounter = 0;
        //$('#player-score').empty();

        //$('#game-round-alert').empty();

        assignToImages();
        
    }

});
// ^^This IS SUPPOSED TO CLOSE the opening $(document).ready function, but I can't for the life of me figure out why it won't link to the top of the document anymore
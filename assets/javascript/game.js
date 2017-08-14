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
// Start whole game as an object! Check this********
//var crystalGameObject = {

    // Know I'll need this, not sure where yet... 
    //Don't forget to uncomment the closing brace below
//    $(document).ready(function() {

        // Target random number is btwn 19-120
        // HOW TO SET 19 AS START MIN VALUE?????????
    /*   var targetNumber = function getRandomInt(19, 120) {
            //min = Math.ceil(19);
            //max = Math.floor(120);
            return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        };
    */
        var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        // FOR TESTING
        console.log('Target number: ' + targetNumber);

        // target id '#target-number'
        $('#target-number').text(targetNumber);

        // playerCounter is the score, the number that clicking on buttons adds to
        var playerCounter = 0;
        // target id '#player-score'

        var wins = 0;
        var losses = 0;
        // target id '#wins-losses'

        // Variable to hold value options for each button (hero images)
        // Each random number is btwn 1-12

        var heroValues = Math.floor(Math.random() * 12);
        // FOR TESTING
        console.log('A hero image value: ' + heroValues);
        // or
        // var heroValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        // target class '.crystal-heroes'

        /* FUNCTIONS=======================================
         */

        // Crystal game example generates the same image and assigns value to that. I want different images, and 4 not 12..........
        // Copy same for loop for now, but will need to edit
        // Backwards for loop to set it to only 4 times????????

        for (var heroValueIndex = 0; heroValueIndex < heroValues.length; heroValueIndex++) {


            // Can I have my images already on the page, then apply things to them? Do they have to be generated BY js?.....
            // Assuming I can do whatever the eff I want, as long as it works.....

            // Or, assign .on('click') and heroValues variable to each image
            // Think this needs to be in a for loop function
            var heroImage = $('<img>');

            heroImage.attr('data-crystalValue', heroValues[heroValueIndex]);

            // FOR TESTING
            console.log(heroValueIndex);
        }



        /* MAIN PROCESS=======================================
         */


//    });
    // ^^This closes the opening $(document).ready function
// }
// ^^This closing curly brace closes the whole game object
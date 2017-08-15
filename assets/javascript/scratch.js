/* 
* JS SCRATCH PAPER
*
* Needed a place to keep snippets I've tried, or have yet to try
*
*/

/* 
Did this if/else statement before turning it into a function to get the random non-repeating numbers values for the images

            if (holderArray.indexOf(value) !== -1) {

            value = Math.floor(Math.random() * (12 - 1)) + 1;
            $('#' + crystalHeroes[crystalHeroIndex]).attr('data-imagevalue', value);

            //append(values)
            } else {
                $('#' + crystalHeroes[crystalHeroIndex]).attr('data-imagevalue', value);
            }
        */



/* Want fancy fade in/out on hover if can get imageClick function to work!!
function imageClick() {    
    $('#1st').mouseenter(function() {
        $('#1st').fadeTo('fast', 0.5);
    });

    $('#1st').mouseleave(function() {
        $('#1st').fadeTo('fast', 1);
    });
}
*/



// FROM EXAMPLE: Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.

        /*
            imgValue.attr('data-imagevalue', crystalHeroes[crystalHeroIndex]);
            console.log(addValueToImage);

        */

        // THIS WAS FROM EXAMPLE GAME - BUT MY IMAGES ARE STATIC ON PAGE..... NEEDS RENAMING. SEE ABOVE.
        // $('.hero-image').on('click', function() {



// IMAGES NEED NUMBERS ASSIGNED TO THEM
/*
for (var heroValueIndex = 0; heroValueIndex < values.length; heroValueIndex++) {
*/



/*
    // Think this needs to be in a for loop function
    var hero = $('<img>');

    // Adds a class of hero-image to the images in <ul>?
    hero.addClass('hero-image');
    // Image already on page
    // Hopefully sets value from the options from values
    hero.attr('data-herovalue', values[heroValueIndex]);

    $('.crystal-heroes').append(hero);

    // FOR TESTING
    console.log(hero[heroValueIndex]);
*/
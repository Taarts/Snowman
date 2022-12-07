placed alphabet in the game

setup:
images of snowman
letters of alphabet for user to click
math.floor

useState to set:
secret word
guessed letters
player score
current word

function to start the game:
function to select a letter from the Alphabet
if it's part of the word, map over the "placeholders" add it to the guessed letters by blanking it
up the player score by one if correct and use this "score" to select the next image of the snowman

Inside the game component:
onClick function for the start button

<ul><li> for split word selected and create the letter spaces "_"
Alphabet.map to complete the word

swapped randomWordLocal for secret word and then it worked

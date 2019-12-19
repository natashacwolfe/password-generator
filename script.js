
// this assignment was full of long days researching, following tutorials, etc. 
// I wasnt getting very far on my own... 
// I phoned a friend who is in the industry for help...which is why this code is much 
// cleaner than my original code. He helped me work thru it so it made sense. 
// I had all the pieces, but he helped me put it together so it would actually work



// once generate button is pressed this starts the function createPw
function createPw() { 
    
    // first thing we need is how long do you want your pw? the user 
    // must put a number 8-128 or an alert will apear
    
    let pwLength = prompt('How long do you want your password? Must be between 8 - 128 characters.');

    // an array of the characters that can be used for the password. 
    // each string in the array will be linked to a button to use 
    // lowercase, symbols, or numbers, or uppercase.

    let characters = [
        '!@#$%^&*()',
        '0123456789',
        'abcdefghijklmnopqrstuvwxyz',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    ];

    // at least one box must be checked, but the user gets to 
    // decide what type of characters they want to use 
    // each box is linked to an item in the array of characters 

    let boxes = [
        'sChar',
        'nChar',
        'lChar',
        'uChar'
    ];
    
    // password is set to blank, we wll randomly create the password 

    let password = '';

    function getRandomInt(max) {   // this will select the checkec boxes randomly
        return Math.floor(Math.random() * Math.floor(max)); // max will be boxes.length
    }
        if (pwLength >= 8 && pwLength <= 128) {   // pw length between 8 - 128
            let noBoxChecked = true; // if no boxes are checked this will not run and it will go to the first alert
            for (box of boxes) { 
                if (document.getElementById(box).checked){  // if no box is checked cont. on
                noBoxChecked = false; // there are checked boxes
            }
        }
        if (!noBoxChecked) { // not no boxes checked... meaning there are checked boxes then...
            for (let i = 0; i <= pwLength; i++){ 
                // continue this for length of desire pw from user input
                let piece; // one piece or character of the generated password
                do { 
                    piece = getRandomInt(boxes.length); // will cycle thru the box selections 
                    console.log('piece: ', piece);
                    console.log(document.getElementById(boxes[piece]).checked); 
                    // will log true if box is selected 
                    //false if it is not selected and try again until pw length is fullfiled 
                } while (!document.getElementById(boxes[piece]).checked);
                    // if it is not checked - dont do it! 
            
                password = password + characters[piece].charAt ( // pw = randomd charaters from random box secletions
                    Math.floor(Math.random() * Math.floor(characters[piece].length - 1)));

            }
        }
    else {
        // if no box is selected
        alert('You must have at least one type of charater box selected.');
    }   
    } else {
        // if they dont read the prompt and input less than 8 or greater than 128
            alert('It must be between 8-128 charaters.');
        }
        // put the new random pw in the text box that has the current placeholder
        document.getElementById('textBox').value = password;
        console.log(password);
}
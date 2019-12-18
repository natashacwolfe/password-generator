
function createPw() {
    let pwLength = prompt('How long do you want your password? Must be between 8 - 128 characters.');

    let characters = [
        '!@#$%^&*()',
        '0123456789',
        'abcdefghijklmnopqrstuvwxyz',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    ];

    let boxes = [
        'sChar',
        'nChar',
        'lChar',
        'uChar'
    ];
    
    let password = '';

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
        if (pwLength >= 8 && pwLength <= 128) {
            let noBoxChecked = true;
            for (box of boxes) {
                if (document.getElementById(box).checked){
                noBoxChecked = false;
            }
        }
        if (!noBoxChecked) {
            for (let i = 0; i <= pwLength; i++){
                let piece;
                do {
                    piece = getRandomInt(boxes.length);
                    console.log('piece: ', piece);
                    console.log(document.getElementById(boxes[piece]).checked);
                } while (!document.getElementById(boxes[piece]).checked);
            
                password = password + characters[piece].charAt (
                    Math.floor(Math.random() * Math.floor(characters[piece].length - 1)));

            }
        }
    else {
        alert('You must have at least one type of charater box selected.');
    }   
    } else {
            alert('It must be between 8-128 charaters.');
        }

        document.getElementById('textBox').value = password;
        console.log(password);
}
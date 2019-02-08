import alphabet from './alphabet.js';
import randomHangmanWords from './hangmanwords.js';

// make buttons rows that will use the alphabet array text appear on screen
const keyboardAlpha = document.getElementById('keyboard');
const gallowTextAppear = document.getElementById('gallows-text');

// const wordSource = randomHangmanWords.length;
const wordPicker = getRandomIntInclusive(0, randomHangmanWords.length - 1); //have this explained to you essentially its a function rather than the math random being combined with randomword list to show the text in galley window 
const wordChoices = randomHangmanWords[wordPicker]; //wordpicker is function to randomly call integer (a string in this case) from the random words array
// have explained why you can use [] randomHangmanWords, its most likely becuase randomhangmanwords is an array

for(let i = 0; i < wordChoices.length; i++) {
    const showWords = document.createElement('span');
    
    showWords.classList.add('hangmanText');
    showWords.textContent = '_ ';
    
    gallowTextAppear.appendChild(showWords);
    
}

for(let i = 0; i < alphabet.length; i++) {
    //lines 15-18 create rows of buttons
    let singleLetter = alphabet[i];
    const makeKeyboard = document.createElement('button');
    makeKeyboard.textContent = singleLetter;
    makeKeyboard.classList.add('makingButtons');

    let winCommand = document.getElementById('result-display');
    // let loseCommand = document.getElementById('result-display');

    
    let counter = 0;
    // create addEventListener so when user clicks buttons console.log the alphabet array into the gallows section of html doc
    makeKeyboard.addEventListener('click', function(event){
        event.preventDefault();
        // let imageSource = '';
        
        for(let i = 0; i < wordChoices.length; i++) {
            const wordChoose = wordChoices[i];
            // console.log(wordChoose);
            // get click to recognize right or wrong choice
            if(singleLetter === wordChoose) {
                const fillIn = document.querySelectorAll('.hangmanText');
                fillIn[i].textContent = singleLetter;
                winCommand.textContent = 'you win';
                console.log(winCommand);
            } else {
                
                // imageSource = '../assets/hangman' + counter + '.png';
                // loseCommand.textContent = 'not quite';
            }
            // makeTextSpace.classList.add('showLetters');
            
            // gallowTextAppear.appendChild(makeTextSpace);
        }
    });
    
    keyboardAlpha.appendChild(makeKeyboard);
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // both min and max are inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

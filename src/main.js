import alphabet from './alphabet.js';
import randomHangmanWords from './hangmanwords.js';

// make buttons rows that will use the alphabet array text appear on screen
const keyboardAlpha = document.getElementById('keyboard');
const gallowTextAppear = document.getElementById('gallows-text');
const letterInput = alphabet.length;

// const wordSource = randomHangmanWords.length;
const wordPicker = getRandomIntInclusive(0, randomHangmanWords.length - 1); //have this explained to you essentially its a function rather than the math random being combined with randomword list to show the text in galley window 
const wordChoices = randomHangmanWords[wordPicker]; //wordpicker is function to randomly call integer (a string in this case) from the random words array
// have explained why you can use [] randomHangmanWords, its most likely becuase randomhangmanwords is an array

for(let i = 0; i < alphabet.length; i++) {
    let singleLetter = alphabet[i];
    const makeKeyboard = document.createElement('button');
    makeKeyboard.textContent = singleLetter;
    
    makeKeyboard.classList.add('makingButtons');
    
    // create addEventListener so when user clicks buttons console.log the alphabet array into the gallows section of html doc
    makeKeyboard.addEventListener('click', function(){
        for(let i = 0; i < letterInput; i++) {
            let wordChoose = wordChoices[i];
            const makeTextSpace = document.createElement('span');
            makeTextSpace.textContent = wordChoose;
            
            if(singleLetter === wordChoose) {
                const fillIn = document.querySelectorAll('.hangmanText');
                fillIn[i].textContent = singleLetter;
            } else {
            
            }
            
            makeTextSpace.classList.add('showLetters');
            
            // gallowTextAppear.appendChild(makeTextSpace);
        }
    });
    
    keyboardAlpha.appendChild(makeKeyboard);
    
}

//create a randomized for loop for choosing from hangman wordlist upon refresh
for(let i = 0; i < wordChoices.length; i++) {
    const showWords = document.createElement('span');
    
    showWords.classList.add('hangmanText');
    showWords.textContent = '_ ';
    
    gallowTextAppear.appendChild(showWords);
    
}

const imageArray = [
    '.assets/octoboy.jpg',
    '.assets/punguinboy.jpg',
    '.assets/pickleboy.jpg',
    '.assets/shrimpin.jpg'
];

const myImage = document.getElementById('body-parts');

for(let i = 0; i < imageArray.length; i++) {
    let imageReveal = imageArray[i];
    const showPics = document.createElement('span');
    // showPics.value = imageReveal;
    showPics.classList.add('hangmanImages');

    myImage.appendChild(imageReveal);
     
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // both min and max are inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// let imageIndex = 0;

// function changeImage(){
//     myImage.setAttribute('src', imageArray[imageIndex]);
//     imageIndex = (imageIndex + 1) % imageArray.length;
// }
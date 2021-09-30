// import function and rab DOM elements
const nameInput = document.getElementById('name');
// const button = document.getElementById('generate');
const button = document.getElementById('submit');
const firstName = document.getElementById('first-name');
const proInput = document.getElementById('pronoun');
// const button2 = document.getElementById('pronoun-generate');
const proNoun = document.getElementById('pro-noun');
const button3 = document.getElementById('redBack');
const button4 = document.getElementById('pinkBack');
const button5 = document.getElementById('greenBack');
const button6 = document.getElementById('blueBack');


//initialize global state

//set event listners
    // get user input
    // use user input to updatre state
    // update DOM to reflect the new state

// const myFunction = function(){
//     console.log('i am a function');
// };
// // defines and makes the function run
// myFunction();

button.addEventListener('click', () => {
    // when the button is clicked
    // get the value of the input
    // replace the text in the nametag with value
    // console.log('I am clicking!');
    let newName = nameInput.value;
    firstName.textContent = newName;
    let newPro = proInput.value;
    proNoun.textContent = newPro;
});

// button2.addEventListener('click', () => {
//     let newPro = proInput.value;
//     proNoun.textContent = newPro;
// });

button3.addEventListener('click', () => { 
    document.getElementById('header').style.backgroundColor = 'red'; 
    document.getElementById('footer').style.backgroundColor = 'red'; 
    // console.log('test');
});

button4.addEventListener('click', () => { 
    document.getElementById('header').style.backgroundColor = 'pink'; 
    document.getElementById('footer').style.backgroundColor = 'pink'; 
    // console.log('test');
});

button5.addEventListener('click', () => { 
    document.getElementById('header').style.backgroundColor = 'lightgreen'; 
    document.getElementById('footer').style.backgroundColor = 'lightgreen'; 
});

button6.addEventListener('click', () => { 
    document.getElementById('header').style.backgroundColor = 'lightblue'; 
    document.getElementById('footer').style.backgroundColor = 'lightblue'; 
});


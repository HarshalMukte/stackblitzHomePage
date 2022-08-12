//Code Starts

// for code Change Layout
const leftSection = document.querySelector(".leftSection");
const centerSection = document.querySelector(".centerSection");

const centerBottom = document.querySelector(".centerBottom");
const rightBottom = document.querySelector(".rightBottom");

const changeCodeLayout = () => {
  const randomOneForFlex = (Math.random() * 2).toFixed(1);
  const randomTwoForFlex = (Math.random() * 2).toFixed(1);

  const randomHeightOne = Math.floor(Math.random() * 60);
  const randomHeightTwo = Math.floor(Math.random() * 30);

  //giving the random value to flex
  centerSection.style.flex = randomTwoForFlex;
  leftSection.style.flex = randomOneForFlex;

  centerBottom.style.height = `${randomHeightOne}%`;
  rightBottom.style.height = `${randomHeightTwo}%`;

};


//for Text Change
const textMobile = document.querySelector("#text_mobile");
const textArray = ["My name is harshal.", "learn new framework.", "run live example."];
let count = 0;

const changeText = () => {
  textMobile.textContent = textArray[count];
  textMobile.classList.add("isActiveText");  
  
  count++;
  if (count === textArray.length) {
    count = 0;
  }

    setTimeout(() => {
      textMobile.classList.remove("isActiveText");  
    }, 1500);
    
};

setInterval(() => {
  changeText()
  changeCodeLayout();
}, 3000);









// changeText();

// let arrayCount = 0;
// let letterCount = 0;
// let reverse = false;
// let currentPhrase = []
// let timer = 50

// const changeText = () => {

//     textMobile.textContent = currentPhrase.join("")

//     if (arrayCount < textArray.length) {

//         if (!reverse && letterCount <= textArray[arrayCount].length) {
//             currentPhrase.push(textArray[arrayCount][letterCount])
//             letterCount ++;
//             timer = 50
//         }

//         if (reverse && letterCount <= textArray[arrayCount].length) {
//             currentPhrase.pop(textArray[arrayCount][letterCount])
//             letterCount --
//             timer = 50
//         }
//         if (letterCount === textArray[arrayCount].length) {
//             reverse = true;
//         }
//         if (letterCount + 1 > textArray[arrayCount].length) {
//         }

//         if (reverse && letterCount === 0) {
//             currentPhrase = []
//             reverse = false
//             timer = 1000
//             arrayCount ++

//             if (arrayCount == textArray.length) {
//                 arrayCount = 0
//             }
//         }

//     }
//     setTimeout(changeText, timer);
// }

// changeText()

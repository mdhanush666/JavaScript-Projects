let btnGenerate = document.querySelector('#btnGenerate');

let upper = "", lower = "", numbers = "", symbols;
let getLen, allInOne = "", result = "";

// PopUp Container.........
const popUp = document.querySelector('.popup-container');

let gPassword = document.getElementById('generatedPassword');

const btnClose = document.querySelector('#btnClosePopup');
const btnCopy = document.querySelector('#btnCopy');

const toolTip = document.querySelector('.tooltiptext');

//.........................

const chkU = document.getElementById("chkUpperCase");
const chkL = document.getElementById("chkLowerCase");
const chkN = document.getElementById("chkNumbers");
const chkS = document.getElementById("chkSymbols");

for (let i = 65; i <= 90; i++) {
  upper += String.fromCharCode(i);
}
for (let i = 97; i <= 122; i++) {
  lower += String.fromCharCode(i);
}
for (let i = 48; i <= 57; i++) {
  numbers += String.fromCharCode(i);
}

symbols = "!@#$%^&*";

btnGenerate.addEventListener('click', () => {

  while (true) {
    getLen = window.prompt('Enter the Length of the Password you want to generate..');

    if (isNaN(getLen)) {
      alert("Please Enter a Valid Number!");
    }
    else if (getLen == 0) {
      alert("Password length must contain at least 1");
    }
    else {
      break;
    }
  }
  if (!chkU.checked && !chkL.checked && !chkN.checked && !chkS.checked) {
    alert('Please select at least one format to generate');
  }
  else {
    if (chkU.checked) {
      allInOne += upper;
    }
    if (chkL.checked) {
      allInOne += lower;
    }
    if (chkN.checked) {
      allInOne += numbers;
    }
    if (chkS.checked) {
      allInOne += symbols;
    }

    for (let i = 0; i < getLen; i++) {
      result += allInOne.charAt(Math.trunc(Math.random() * allInOne.length));
    }

    popUp.style.visibility = "visible";
    gPassword.value = result;

  }
  result = "";
  allInOne = "";
})

btnClose.addEventListener('click',()=>{
  popUp.style.visibility = "hidden";
  toolTip.textContent = "Copy";
})

btnCopy.addEventListener('mouseenter',()=>{
  toolTip.style.visibility = "visible";
})
btnCopy.addEventListener('mouseleave',()=>{
  toolTip.style.visibility = "hidden";
})

btnCopy.addEventListener('click',()=>{
  gPassword.select();
  gPassword.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(gPassword.value);
  toolTip.textContent = "Copied";
})



const btnIncrease = document.getElementById('btnIncrease');
const btnReset = document.getElementById('btnReset');
const btnDecrease = document.getElementById('btnDecrease');

const btnExit = document.getElementById('btnClose');

const exitMsg = document.querySelector('.exitMsg');

const btnExitYes = document.getElementById('btnExitYes');
const btnExitNo = document.getElementById('btnExitNo');

let txt = document.getElementById('txt');

let count = 0;

btnIncrease.addEventListener('click',()=>{
  txt.textContent = ++count;
});

btnReset.addEventListener('click',()=>{
  count = 0;
  txt.textContent = count;
});

btnDecrease.addEventListener('click',()=>{
  txt.textContent = --count;
});

btnExit.addEventListener('click',()=>{
  exitMsg.style.visibility = 'visible';
});

btnExitNo.addEventListener('click',()=>{
  exitMsg.style.visibility = 'hidden';
});
btnExitYes.addEventListener('click',()=>{
  window.close();
});
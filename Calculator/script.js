const txtIn = document.getElementById('txtIn');

const txtPre = document.getElementById('txtPre');

const btnHis = document.getElementById('btnHis');

const sqrtSym = document.getElementById('symSqrt');

let n1,n2;
let plus = false, minus = false, multiply = false, divide = false, modules = false;

let his = [];

function btn(input){
  switch(input){

    case '+':
      n1 = Number(txtIn.value);
      txtPre.textContent = n1 + ' + ';
      txtIn.value = null;

      plus      = true;
      minus     = false;
      multiply  = false;
      divide    = false;
      modules   = false;
      break;

    case '-':
      n1 = Number(txtIn.value);
      txtPre.textContent = n1 + ' - ';
      txtIn.value = null;

      plus      = false;
      minus     = true;
      multiply  = false;
      divide    = false;
      modules   = false;
      break;

    case '*':      
      n1 = Number(txtIn.value); 
      txtPre.textContent = n1 + ' x ';     
      txtIn.value = null;

      plus      = false;
      minus     = false;
      multiply  = true;
      divide    = false;
      modules   = false;
      break;

    case '/':
      n1 = Number(txtIn.value);
      txtPre.textContent = n1 + ' / ';
      txtIn.value = null;

      plus      = false;
      minus     = false;
      multiply  = false;
      divide    = true;
      modules   = false;
      break;

    case '%':
      n1 = Number(txtIn.value);
      txtPre.textContent = n1 + ' % ';
      txtIn.value = null;

      plus      = false;
      minus     = false;
      multiply  = false;
      divide    = false;
      modules   = true;
      break;

    case 'sqrt':
      n1 = Number(txtIn.value);
      txtPre.textContent = sqrtSym.textContent + '(' + n1 + ')';
      txtIn.value = Math.pow(n1,.5);

      break;

    case 'x2':
      n1 = Number(txtIn.value);
      txtPre.textContent = 'sqr(' + n1 + ')';
      txtIn.value = n1 * n1;

      break;

    case 'd1':
      n1 = Number(txtIn.value);
      if(n1 === 0){
        txtPre.textContent = '1 / (' + n1 + ')';
        txtIn.value = "Cannot divide by 0";
      }
      else{
        txtIn.value = (1/n1);
      }
      
      break;

    case 'c':
      n1 = null;
      n2 = null;
      txtPre.textContent = null;
      txtIn.value = null;
      break;

    case 'ce':
      n1 = null;
      n2 = null;
      txtPre.textContent = null;
      break;

    case 'del':
      let getVal = String(txtIn.value);
      txtIn.value = Number(getVal.slice(0,-1));
      break;

    case 'neg':
      if(txtIn.value != ''){
        n1 = -txtIn.value;
        txtIn.value = n1;
        txtPre.textContent = n1;
      }
      break;
    
    case '7':
      txtIn.value += 7;
      break;
    
    case '8':
      txtIn.value += 8;
      break;
    
    case '9':
      txtIn.value += 9;
      break;
    
    case '4':
      txtIn.value += 4;
      break;
    
    case '5':
      txtIn.value += 5;
      break;
    
    case '6':
      txtIn.value += 6;
      break;
    
    case '1':
      txtIn.value += 1;
      break;
    
    case '2':
      txtIn.value += 2;
      break;
    
    case '3':
      txtIn.value += 3;
      break;
    
    case '0':
      txtIn.value += 0;
      break;
    
    case '.':
      txtIn.value += '.';
      break;

    case '=':
      n2 = Number(txtIn.value);
      let result = 0;

      if(plus){
        result = n1 + n2;
        txtIn.value = result;
        txtPre.textContent += n2 + ' = ' + result;
      }
      else if(minus){
        result = n1 - n2;
        txtIn.value = result;
        txtPre.textContent += n2 + ' = ' + result;
      }
      else if(multiply){
        result = n1 * n2;
        txtIn.value = result;
        txtPre.textContent += n2 + ' = ' + result;
      }
      else if(divide){
        result = n1 / n2;
        txtIn.value = result;
        txtPre.textContent += n2 + ' = ' + result;
      }
      else if(modules){
        result = n1 % n2;
        txtIn.value = result;
        txtPre.textContent += n2 + ' = ' + result;
      }
      
      his.push(txtPre.textContent);

      break;

  }
}

const hisContainer = document.querySelector('.his-container');

let HisTxtArea = document.getElementById('hisTxtArea');

const clearHis = document.getElementById('clearHis');

const btnClose = document.getElementById('btnClose');

btnHis.addEventListener('click',()=>{
  HisTxtArea.textContent = null;
  his.forEach(element => {
    HisTxtArea.textContent += element + "\n\n";
  });

  hisContainer.style.visibility = 'visible';

});

btnClose.addEventListener('click',()=>{
  hisContainer.style.visibility = 'hidden';
});

clearHis.addEventListener('click',()=>{
  his = [];
  HisTxtArea.textContent = null;
});

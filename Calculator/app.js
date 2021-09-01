const buttons = document.querySelectorAll('.button');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const results = document.querySelector('.results');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete'); 

let cuenta = '';

const add = array=>{
  return array.reduce((acumulator,current)=>parseFloat(acumulator) + parseFloat(current));
};
const rest = array=>{
  return array.reduce((acumulator,current)=>parseFloat(acumulator) - parseFloat(current));
};
const mult = array=>{
  return array.reduce((acumulator,current)=>parseFloat(acumulator) * parseFloat(current));
};
const div = array=>{
  return array.reduce((acumulator,current)=>parseFloat(acumulator) / parseFloat(current));
};

const longNum = (number)=>{
  if (number.toString().length > 20) {
    alert('number is too big!');
    while(number.toString().length > 20){
      number = number.toString().substring(0, number.length - 1);
    };
    cuenta = number;
    results.textContent = cuenta;
  }
}


operators.forEach(button=>{
  button.addEventListener('click',()=>{
    first = parseFloat(cuenta);

    cuenta += button.id;
    longNum(cuenta);
    results.textContent = cuenta;
  })
})

buttons.forEach(button => {
  button.addEventListener('click',()=>{
    cuenta += button.id;
    longNum(cuenta);
    results.textContent = cuenta;
  });
});

clear.addEventListener('click',()=>{
  cuenta = '';
  results.textContent = cuenta;
});

del.addEventListener('click',()=>{
  cuenta = cuenta.toString();
  cuenta = cuenta.substring(0, cuenta.length - 1);
  results.textContent = cuenta;
})


equals.addEventListener('click',()=>{

  let ecuacion = [cuenta][0];
  //console.log(ecuacion);
  
  if (ecuacion.includes('+')) {

    let primerFiltro = ecuacion.split('+');

    for(let i=0; i<primerFiltro.length; i++){

    	if(primerFiltro[i].includes('-')){

        primerFiltro[i] = primerFiltro[i].split('-');
        //console.log(primerFiltro[i]);
        let secFilt = multDivOp(primerFiltro[i]);
        primerFiltro[i] = rest(secFilt);
      }
    }
    //console.log(primerFiltro);
    let secFilt = multDivOp(primerFiltro);
    //console.log(secFilt);
    cuenta = add(secFilt);

    
  }else if(ecuacion.includes('-')){
    let primerFiltro = ecuacion.split('-');
    let secFilt = multDivOp(primerFiltro);
    cuenta = rest(secFilt);
  }else{
    cuenta = multDivOp([cuenta]);
  }
  longNum(cuenta);
  results.textContent = cuenta;

});

const multDivOp = (array)=>{
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i].toString();

    if (el.includes('X')){

      let segundoTerminoMult = el.split('X');
      //console.log(segundoTerminoMult);
      for(let i=0; i<segundoTerminoMult.length; i++){

        if(segundoTerminoMult[i].includes('%')){
  
          segundoTerminoMult[i] = segundoTerminoMult[i].split('%');
          segundoTerminoMult[i] = div(segundoTerminoMult[i]);
  
        }
      }
      result.push(mult(segundoTerminoMult));
      
    }else if(el.includes('%')){

      let segundoTerminoDiv = el.split('%');
      //console.log(segundoTerminoDiv);
      result.push(div(segundoTerminoDiv));

    }else{
      result.push(el);
    }
    
  };
  return result;
};

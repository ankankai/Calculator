let equation = localStorage.getItem('equation') || '';
document.querySelector(".result").innerHTML=`${equation}`;

function createEquation(str){
    equation+=str;
    document.querySelector(".result").innerHTML=`${equation}`;
    localStorage.setItem('equation', equation);
}

function calculateEquation(){
    equation = eval(equation);
    document.querySelector(".result").innerHTML=`${equation}`;
    console.log(equation);
    localStorage.setItem('equation', equation);
}

function clearResultMemory(){
    equation="";
    document.querySelector(".result").innerHTML="0";
    localStorage.setItem('equation', equation);
}

document.body.addEventListener("keydown",(event)=>{
    if(event.key === "1"){
        createEquation('1');
    }
    else if(event.key === "2"){
        createEquation('2');
    }
    else if(event.key === "3"){
        createEquation('3');
    }
    else if(event.key === "4"){
        createEquation('4');
    }
    else if(event.key === "5"){
        createEquation('5');
    }
    else if(event.key === "6"){
        createEquation('6');
    }
    else if(event.key === "7"){
        createEquation('7');
    }
    else if(event.key === "8"){
        createEquation('8');
    }
    else if(event.key === "9"){
        createEquation('9');
    }
    else if(event.key === "0"){
        createEquation('0');
    }
    else if(event.key === "+"){
        createEquation('+');
    }
    else if(event.key === "-"){
        createEquation('-');
    }
    else if(event.key === "*"){
        createEquation('*');
    }
    else if(event.key === "/"){
        createEquation('/');
    }
    else if(event.key === "."){
        createEquation('.');
    }
    else if(event.key === "Enter"){
        calculateEquation();
    }
    else if(event.key === "Backspace"){
        clearResultMemory();
    }
})
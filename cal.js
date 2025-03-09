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
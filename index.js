
let display =document.getElementById('display')
let buttons = Array.from (document.querySelectorAll('button'));
let btn=document.getElementById('btn');
let func1 = document.querySelectorAll('.func1');
let func2 =document.querySelectorAll('.func2');
// let body=document.getElementById('body');
let Colormod=false;
let calculator=document.getElementsByClassName('calculator')[0];

console.log("---------------------->",buttons);


function change(){
    console.log(func1[0]);
     Colormod=!Colormod;
    //  Colormod=!false;
    
    if(Colormod){
        btn.style.backgroundColor="white";
        btn.style.color="black";
calculator.style.backgroundColor="black";
display.style.backgroundColor="white";
display.style.boxShadow="none";
for(let i = 0; i < func1.length; i++){
            func1[i].style.background = "linear-gradient( rgb(143, 143, 227),rgb(1, 1, 11))";
            }
        for(let a = 0; a < func2.length; a++){
                func2[a].style.background = "linear-gradient( rgb(63, 63, 64),rgb(110, 110, 124))";
                }  
                display.style.boxShadow= "none";
               
             
    }
    else{
        display.style.boxShadow= "10px 10px 20px #888888";
        btn.style.backgroundColor="black";
        btn.style.color="white";
        calculator.style.backgroundColor="white";
      display.style.backgroundColor="white";
     
      display.style.boxShadow= "10px 10px 20px #888888";
for(let i = 0; i < func1.length; i++){
    func1[i].style.background = "red";  
}
for(let a = 0; a < func2.length; a++){
    func2[a].style.background = "linear-gradient( rgb(125, 125, 242),blue)";                
}
}

}


buttons.map( button =>{
    button.addEventListener('click', (e) => {
    
    
        switch(e.target.innerText){
        case 'C':
            display.innerText =''; 
           break;
        case 'Del':
            if (display.innerText){
                display.innerText =display.innerText.slice(0,-1);
            }
            break;
        case 'x':
            display.innerText+='*';
            break;
            case'=':
            display.innerText=eval(display.innerText);
            break;
       case 'Dark mode':
        btn.innerHTML="Light mode";
        break;
        case 'Light mode':
            btn.innerHTML="Dark mode";
            break;
            default:
           display.innerText += e.target.innerText;
    }
    })
})

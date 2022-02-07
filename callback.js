function welcomeMessage(name, greeHandler){
         greeHandler(name);
}
// const name = ['tom hanks','tome here','tom and jerry']
// const myobj = {name:'tom and jerry',age: 10};
function greetMOrning(name){
         console.log('good morning', name)
}
function greetAfternoon(name){
         console.log('good Afternoon', name)
}
function greetEvening(name){
         console.log('good Evening', name)
}
welcomeMessage('tom and jerry',greetMOrning);
welcomeMessage('kind in the world',greetAfternoon);
welcomeMessage('BlackDot356',greetEvening);



function handleClick(){
         console.log('click the button')
}
document.getElementById('my-button').addEventListener('click',function(){
         console.log('click the button ringt now')
});
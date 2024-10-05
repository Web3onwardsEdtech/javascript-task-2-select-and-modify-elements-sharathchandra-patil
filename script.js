const text = document.getElementById('text');
const button1=document.getElementById('button1');
const button2=document.getElementById('button2');
button1.addEventListener('click',function(){
    text.innerText='button 1 is clicked';
});
button2.addEventListener('click',function(){
    text.innerText='button 2 is clicked';
});
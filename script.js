const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const head=document.getElementById('heading')

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
       body.style.background='white';
        body.style.transition = '2s';
        head.style.color='#122044';
    }
    else{
        body.style.background = 'black';
        body.style.transition = '2s';
        head.style.color='white';
    }
});
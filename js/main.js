const btn = document.querySelector('button');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav a');





links.forEach(function(a){
    a.addEventListener('click', function(e){
        nav.classList.remove('moveNav');
    })
})



btn.addEventListener('click', function(e){
    nav.classList.toggle('moveNav');
});
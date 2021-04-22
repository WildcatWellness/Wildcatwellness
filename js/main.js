const btn = document.querySelector('button');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav a');
const imgs = document.querySelectorAll('.home a');




imgs.forEach(function(l, n, i){
    console.log(l);
    console.log(i);
    l.addEventListener('mouseover', function(e){
        
    });
    l.addEventListener('mouseout', function(e){
        console.log('Hover out ');
    });

});





links.forEach(function(a){
    a.addEventListener('click', function(e){
        nav.classList.remove('moveNav');
    })
})



btn.addEventListener('click', function(e){
    nav.classList.toggle('moveNav');
});
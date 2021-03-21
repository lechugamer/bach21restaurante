var btn_menu =document.getElementById('btn_menu');
var nav =document.getElementById('nav');

btn_menu.addEventListener('click', function(){
    nav.classList.toggle('muestrate')
})

var btn_submenu =document.getElementById('btn_submenu');
var submenu =document.getElementById('submenu');

btn_submenu.addEventListener('click', function(){
    submenu.classList.toggle('muestrate_sub')
})

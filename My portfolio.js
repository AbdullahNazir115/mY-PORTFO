<script>
let body=document.querySelector('body')
let namer=document.querySelector('.namer')
let namer2=document.querySelector('.namer-2')
let copyright=document.querySelector('.copyright')
let overlay=document.querySelector('.overlay')
let button=document.querySelector('.Dark-button')
let ic=document.querySelector('.image-changer')
let btn=document.querySelector('.btn')
let pc=document.querySelector('.PROJECTS')


button.addEventListener('click',function(){

// namer.style.color='#6f42c1'
//     namer2.style.color='#6f42c1'
//     copyright.style.color='black'
//     body.style.background='white'

   let isDarkMode = body.style.background === 'white';

// Toggle theme and colors with smooth transitions
body.style.background = isDarkMode ? 'black' : 'white'
ic.src = isDarkMode ? 'sun (2).png' :'crescent-moon.png'
btn.style.background = isDarkMode ? 'black' : 'white'
btn.style.color = isDarkMode ? 'white' : 'black'

namer.style.color = isDarkMode ? 'white' : 'black';
pc.style.color = isDarkMode ? 'white' : 'black';
namer2.style.color = isDarkMode ? 'white' : 'black';
copyright.style.color = isDarkMode ? 'white' : 'black';
body.style.transition=isDarkMode ? '2s' : '2s';

// body.style.zIndex=isDarkMode ? '100000' : '10000';
// overlay.style.display=isDarkMode ? 'none' : 'block';


})


</script>
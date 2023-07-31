burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.right-nav');
anchor=document.querySelector('.anchor');

anchor.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

 

const contact=document.getElementById('contactbtn');
const inputname=document.getElementById('name');
const name=inputname.value;
contact.addEventListener('click',()=>{
    // var na=name.value;
    alert("Dear "+inputname.value+" we have received your request you'll be contacted soon");
})

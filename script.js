

let sun=document.querySelector('.sun');

let hero=document.querySelector('.hero');
let aboutdark=document.querySelector('.about');
let skills=document.querySelector('.skills')
let homeimg=document.querySelector('.homeimg');
let moon=document.querySelector(".moon");

let theme=document.querySelector('.theme');

let changing=document.querySelector('.changing');

let certificate=document.querySelector('.certificate');

let cerhead=document.querySelector('.headingcer');



let count=1;
theme.addEventListener("click",()=>{


if(count===1)
{
        moon.classList.add('moonactive');
        sun.classList.remove('sunactive');

        count=0;
}

else
{
    moon.classList.remove('moonactive');
    sun.classList.add('sunactive');
    count=1;
}

   



changing.classList.toggle('cdark')


hero.classList.toggle('hero-dark');
aboutdark.classList.toggle('aboutdark')
skills.classList.toggle('skills-dark');
homeimg.classList.toggle('homeimgdark');

certificate.classList.toggle('cer-dark');

cerhead.classList.toggle('head-p-dark');









})
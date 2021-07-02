const body = document.querySelector('body');
const title = document.querySelector('.title');
const titleContent = document.querySelector('.title-content');
const firstImg = document.querySelector('.first-img');
const header = document.querySelector('header');
const display = document.querySelectorAll('.display');

titleContent.addEventListener('click', () => {
    title.style.cssText = 'height: 300px; background-color: none;';
    firstImg.style.cssText = 'width:0%; height: 0%; margin: 0%; border: none; box-shadow: none;';
    display.forEach(div => {
        div.style.cssText = 'display: flex;';
    });
    titleContent.style.cssText = 'cursor: text;';
})

//Select Languages

const world = document.querySelector('#world');
const langPanel = document.querySelector('.select-language');

world.addEventListener('click',(e)=>{
    langPanel.style.cssText = 'display: flex;'
    e.stopPropagation();
});

//Menu

const menu = document.querySelector('#menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click',(e)=>{
    nav.style.cssText = 'display: grid;';
    e.stopPropagation();
});


body.addEventListener('click',()=>{
    langPanel.style.cssText = 'display: none;';
    nav.style.cssText = 'display = none;';
});

//About display

const arrowBttn = document.querySelector('#flecha');
const about = document.querySelector('.about');

arrowBttn.addEventListener('click',()=>{
    arrowBttn.classList.toggle('up');
    about.classList.toggle('open');
});


//Modal certificates
const certificates = document.querySelectorAll('.certificados');
const modal = document.querySelector('#modal');
const close = document.querySelector('.close');

certificates.forEach(certificate => {
    certificate.addEventListener('click', () => {
        let img = document.getElementById(`img-${certificate.id}`);
        console.log(img);
        let modalImg = document.querySelector('.modal-img');
        modal.style.display = 'flex';
        modalImg.src = img.src;
    });
});

close.addEventListener('click',()=> modal.style.display = 'none');


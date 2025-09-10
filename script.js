const motionButton = document.querySelector('#motionButton');
const overrideLift = document.querySelector('#overrideLift');
const overrideFall = document.querySelector('#overrideFall');

let warning = false;

motionButton.addEventListener('click', ()=>{
    console.log('Motion button clicked');
});

overrideLift.addEventListener('click', ()=>{
    console.log('Override lift clicked');
});

overrideFall.addEventListener('click', ()=>{
    console.log('Override fall clicked');
});
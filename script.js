const motionButton = document.querySelector('#motionButton');
const overrideLift = document.querySelector('#overrideLift');
const overrideFall = document.querySelector('#overrideFall');
const warningLights = document.querySelectorAll('.warning');
const bridgeContainer = document.querySelector('.bridge');
const bridge = document.querySelector('.bMiddle');

let warning = false;

async function warningSequence(){
    console.log('Start warning sequence...');
    console.log(warningLights[0]);
    warningLights[0].setAttribute('style', 'background-color: orange;');
    warningLights[1].setAttribute('style', 'background-color: orange;');

    await new Promise(resolve => setTimeout(resolve, 2000));
    //Two seconds for now, should be 20 later
    
    warningLights[0].setAttribute('style', 'background-color: red;');
    warningLights[1].setAttribute('style', 'background-color: red;');
    
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('End warning sequence...');
}

async function liftSequence(){
    await warningSequence();

    //Lift
    bridge.classList.add('raised');   

    //Wait
    await new Promise(resolve => setTimeout(resolve, 2000)); 

    //Fall
    bridge.classList.remove('raised');

    //Change lights back to green
    await setTimeout(()=>{
        warningLights[0].setAttribute('style', 'background-color: lime;');
        warningLights[1].setAttribute('style', 'background-color: lime;');
    }, 2000);
    
    //Set button back to grey- not important to bridge :P
    motionButton.setAttribute('style', '    background-color: transparent; font-family:Quickand, sans-serif; font-size: 20px; font-weight: bold; color: #999999; overflow-x: flow; width: 300px; height: 50px; border-radius: 60px; border: 3px solid #909090;');
    motionButton.textContent = "Simulate Motion Detector";
}

motionButton.addEventListener('click', ()=>{
    motionButton.setAttribute('style', '    border: 4px solid rgba(23, 248, 117, 1); font-weight: bold; font-size: 21px; color: rgba(23, 248, 117, 1); width: 310px; height: 60px; border-radius: 55px;')
    motionButton.textContent = "Simulating...";
    liftSequence();
});

overrideLift.addEventListener('click', ()=>{
    console.log('Override lift clicked');
});

overrideFall.addEventListener('click', ()=>{
    console.log('Override fall clicked');
});
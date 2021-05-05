

function playSound(e){
    if(!e.keyCode){
        return;
    }
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if(!audio){return;}


    key.classList.add("playing");
    audio.currentTime=0;
    audio.play();
   
}

function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll(".key");
keys.forEach((key)=>{
key.addEventListener('transitionend', removeTransition);
})


function syncTheDrum(event) {
  
    // image (part of the drum's image)
    var drum = document.querySelector(`g[data-key="${event.keyCode}"]`);
    if (!drum) return;

    drum.classList.add("animation");

    setTimeout(()=>{
        console.log("remove animation")
        drum.classList.remove("animation");

    }, 500);

  }

  

window.addEventListener('keydown', syncTheDrum);
const drums = document.querySelectorAll("g");

// drums.addEventListener('animationend', removeAnimation);


// drums.forEach((drum)=>{
//     console.log("here" + drum);
//     drum.addEventListener('annimationend', removeAnimation);

// })

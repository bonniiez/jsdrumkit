

function playSound(e){
    if(!e.keyCode){
        return;
    }
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
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
    console.log("drum"+drum);
    if (!drum) return;

    drum.classList.add("animation");

  }

  function removeAnimation(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

window.addEventListener('keydown', syncTheDrum);
const drums = document.querySelectorAll(".drum");
drums.forEach((drum)=>{
    drum.addEventListener('annimationend', removeAnimation);

})

window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.drum[data-key="${e.keyCode}"]`)
    if (!audio){
        return; //if there is no audio, stop the function form running all together
    }  
    audio.currentTime = 0; //rewind to start, allowing to push key continually
    audio.play();

    key.classList.add('playing'); //add a class already styled in css
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return;
    }
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.drum');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

const musicButton = document.getElementById('musicButton');
const music = new Audio('./audio/Eric-Van-der-Westen-A-Left-Hook.mp3');
let isMusicPlaying = false;

musicButton.addEventListener('click', function () {
  if (isMusicPlaying === true) {
    isMusicPlaying = false;
    music.pause();
  } else {
    isMusicPlaying = true;
    music.volume = 0.5;
    music.play();
  }
});

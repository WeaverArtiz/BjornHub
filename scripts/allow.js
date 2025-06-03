const startBtn = document.getElementById('audioBtn');
const audio = document.getElementById('BjornSong');
const box = document.getElementById('AAllowBox');
const leaveBtn = document.getElementById('leaveBtn');
const overlay = document.getElementById('overlay');

function fadeOut(el) {
  el.classList.remove('visible');
  el.classList.add('fading-out');
  setTimeout(() => {
    el.classList.add('hidden');
    el.classList.remove('fading-out');
  }, 500); 
}

startBtn.addEventListener('click', () => {
  audio.play();
  fadeOut(startBtn);
  fadeOut(box);
  fadeOut(overlay);
});

leaveBtn.addEventListener('click', () => {
  fadeOut(box);
  fadeOut(overlay);
  setTimeout(() => {
    history.back();
  }, 500); 
}); 
console.log("aa");

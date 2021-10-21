

const player = new Player();


// Event Listeners
//Play/Pause Button
player.playBtn.addEventListener('click', () => player.togglePlay());
player.video.addEventListener('click', () => player.togglePlay());
//Volume Control
player.volumeIcon.addEventListener('click', () => player.toggleMute());
player.volumeRange.addEventListener('click', (event) => player.changeVolume(event));
//Full Screen
player.fullScreenBtn.addEventListener('click', () => player.toggleFullscreen(openFullscreen, closeFullscreen));
//Speed video
player.speed.addEventListener('change', () => player.changeSpeed());
//Current time and duration
player.video.addEventListener('timeupdate', () => player.updateProgress());
player.video.addEventListener('canplay', () => player.updateProgress());
// Progress Bar
player.progressRange.addEventListener('click', (event) => player.setProgress(event));


/* View in fullscreen */
function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    /* Firefox */
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    /* IE/Edge */
    element.msRequestFullscreen();
  }
  player.video.classList.add('video-fullscreen');
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
  player.video.classList.remove('video-fullscreen');
}
class Player {
  constructor(){
    
    this.player = document.querySelector('.player');
    this.video = document.querySelector('.video');
    this.progressRange = document.querySelector('.progress-range');
    this.progressBar = document.querySelector('.progress-bar');
    this.playBtn = document.getElementById('play-btn');
    this.volumeIcon = document.getElementById('volume-icon');
    this.volumeRange = document.querySelector('.volume-range');
    this.volumeBar = document.querySelector('.volume-bar');
    this.speed = document.querySelector('.player-speed');
    this.currentTime = document.querySelector('.time-elapsed');
    this.duration = document.querySelector('.time-duration');
    this.fullScreenBtn = document.querySelector('.fullscreen');
    this.lastVolume = 1;
    this.fullScreen = false;
  }

  togglePlay(){
    if(this.video.paused){
      this.video.play();
      this.playBtn.classList.replace('fa-play', 'fa-pause');
      this.playBtn.setAttribute('title', 'Pause');
    }else{
      this.video.pause();
      this.playBtn.classList.replace('fa-pause', 'fa-play');
      this.playBtn.setAttribute('title', 'Play');
    }
  }

  toggleMute(){
    this.volumeIcon.className = '';
    if(this.video.volume){
      this.lastVolume = this.video.volume;
      this.video.volume = 0;
      this.volumeIcon.classList.add('fas','fa-volume-mute');
      this.volumeIcon.setAttribute('title', 'Unmute');
      this.volumeBar.style.width = 0;
    }else{
      this.video.volume = this.lastVolume;
      this.volumeIcon.classList.add('fas','fa-volume-up');
      this.volumeIcon.setAttribute('title', 'Mute');
      this.volumeBar.style.width = `${this.lastVolume * 100}%`;
    }
  }

  changeVolume(event){
    let volume = event.offsetX / this.volumeRange.offsetWidth;
    if(volume < 0.1){
      volume = 0;
    }
    if(volume > 0.9 ){
      volume = 1;
    }
    this.volumeBar.style.width = `${volume * 100}%`;
    this.video.volume = volume;
    //Change icon depending on volume
    this.volumeIcon.className = '';
    if(volume > 0.7){
      this.volumeIcon.classList.add('fas', 'fa-volume-up');
    }
    else if(volume < 0.7 && volume > 0){
      this.volumeIcon.classList.add('fas', 'fa-volume-down');
    }
    else if(volume === 0){
      this.volumeIcon.classList.add('fas', 'fa-volume-off');
    }
    this.lastVolume = volume;
  }

  toggleFullscreen(openFS, closeFS){
    !this.fullScreen ? openFS(this.player) : closeFS();
    this.fullScreen = !this.fullScreen; 
  }

  changeSpeed(){
    this.video.playbackRate = this.speed.value;
  }

  setProgress(event){
    const newTime = event.offsetX / this.progressRange.offsetWidth;
    this.progressBar.style.width = `${newTime * 100}%`;
    this.video.currentTime = newTime * this.video.duration;
  }

  displayTime(time){
    const minutes = Math.floor(time/60);
    let seconds = Math.floor(time % 60);
    seconds = seconds > 9 ? seconds : `0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  updateProgress(){
    this.progressBar.style.width = `${(this.video.currentTime / this.video.duration) * 100}%`;
    this.currentTime.textContent = `${this.displayTime(this.video.currentTime)}/`;
    this.duration.textContent = `${this.displayTime(this.video.duration)}`;
  }
}

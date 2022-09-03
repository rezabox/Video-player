const video_player = document.querySelector('.video-player');
const video = document.querySelector('.video');
const play_btn = document.querySelector('.play-btn');
const rang = document.querySelector('.volume');
const time_duration = document.querySelector('.duration');
const time_current = document.querySelector('.current');
const video_progess = document.querySelector('.video-progress');
const videoBar = document.querySelector('.video-progress-film');
play_btn.addEventListener('click',function(e){
      if(video.paused){
           video.play();
           e.target.textContent = "⏸"
      }else{
           video.pause();
           e.target.textContent = "▶"
      }
})
rang.addEventListener('mousemove',(e)=>{
     video.volume = e.target.value;
})
const currentTime = ()=>{
     let currentMintes = Math.floor(video.currentTime / 60);
     let currentSecond = Math.floor(video.currentTime - currentMintes * 60);
     let durationMintes = Math.floor(video.duration / 60);
     let durationSecond = Math.floor(video.duration - durationMintes * 60);
     time_current.innerHTML = `${currentMintes}:${currentSecond < 10 ? "0"+ currentSecond : currentSecond}`; 
     time_duration.innerHTML=`${durationMintes}:${durationSecond}`;
}
video.addEventListener('timeupdate', currentTime);

video.addEventListener('timeupdate',()=>{
     const progress = (video.currentTime / video.duration) * 100;
     videoBar.style.width = `${progress}%`;
})
video_progess.addEventListener('click',function(e){
     const progsessbar = (e.offsetX / video.offsetWidth) * video.duration ;
     video.currentTime = `${progsessbar}`
})

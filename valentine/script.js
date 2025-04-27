// script.js
document.addEventListener('DOMContentLoaded', function() {
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    
    videoWrappers.forEach(wrapper => {
      const video = wrapper.querySelector('video');
      
      wrapper.addEventListener('mouseenter', () => {
        video.play();
        video.muted = false; // Unmute when hovered
      });
      
      wrapper.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
        video.muted = true; // Mute when not hovered
      });
      
      // Mute all videos initially
      video.muted = true;
    });
  });
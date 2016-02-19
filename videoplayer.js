function initializeVideoPlayerControls(){
    
    var video = document.getElementById("videoplayer");
    
    function playVideo(evt) {
        
        var button = evt.target;
        if (video.paused) {
            video.play();
            button.textContent = "Pause";
        } 
        else {
            video.pause();
            button.textContent = "Play";      
              }
    }
    
    function seek(numberOfSecond) {
        try{
            if (numberOfSecond == 0) {
                video.currentTime = numberOfSecond;
            }
            else {
                video.currentTime  += numberOfSecond;
            }
        } catch (err) {
            displayError("Something went wrong...");
        }
    }
    
    function displayError(message){
        
    }
    
    document.getElementById("playButton").addEventListener("click", playVideo, false);
    
    document.getElementById("backButton").addEventListener("click", function () {
        seek(-5);
    }, false);
    
    document.getElementById("slowerButton").addEventListener("click", function () {
        video.playbackRate -= .25;
    }, false);
    document.getElementById("fasterButton").addEventListener("click", function () {
        video.playbackRate += .25;
    }, false);
    document.getElementById("muteButton").addEventListener("click", function (s) {
        video.playbackRate -= .25;
        if (video.muted) {
            video.muted = false;
        }
        else{
            video.muted = true;
        }
    }, false);
}
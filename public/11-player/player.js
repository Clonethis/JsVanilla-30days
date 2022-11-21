const $playButton = document.getElementsByClassName("player__button")[0];
const $speed = document.getElementsByClassName("player__slider")[1];
const $volume = document.getElementsByClassName("player__slider")[0];
const $progress = document.getElementsByClassName("progress")[0];
const $progressBar = document.getElementsByClassName("progress__filled")[0];
const $video = document.querySelector(".player__video");
const $player = document.querySelector(".player");

$video.autoplay = true;

let array = [$playButton, $speed, $volume, $progress, $video];

let videoPlaying = false;
$player.addEventListener("click", (e) => console.log(e));
// array.forEach((item) => {
//   item.addEventListener("click", resolver);
// });

let isFullscreen = false;

// progress Bar management
$progress.addEventListener("click", (e) => progressBar(e));
$progressBar.addEventListener("click", (e) => progressBar(e));
function progressBar(e) {
  const maxWidth = e.originalTarget.clientWidth;
  const remainder = e.layerX / maxWidth;
  const wholeVideo = $video.duration;
  const result = wholeVideo * remainder;
  playFromTime(result);
}
function playFromTime(time) {
  $video.currentTime = time;
  videoSolver();
  // start($video);
}
$playButton.addEventListener("click", playButtonSolver);
function playButtonSolver() {
  if (!videoPlaying) {
    start($video);
  } else {
    pause($video);
  }
}

// changing video playing speed
$speed.addEventListener("click", (e) => speedSolver(e));
function speedSolver(e) {
  $video.playbackRate = e.target.value;
}

// changing volume of video
$volume.addEventListener("click", (e) => volumeSolver(e));
function volumeSolver(e) {
  $video.volume = e.target.value;
}

// toggling video state
function pause(video) {
  video.pause();
  console.log($playButton);
  $playButton.className = "player__button stopped";
  videoPlaying = !videoPlaying;
}
function start(video) {
  video.play();
  videoPlaying = !videoPlaying;
  $playButton.classList = "player__button playing";
}

// Shows video progress realtime (100ms delay)
function videoSolver() {
  const wholeVideo = $video.duration;
  const currentTime = $video.currentTime;
  const result = (currentTime / wholeVideo) * $progress.clientWidth;
  $progressBar.style.width = result;
}

// obsolete //
function resolver(e) {
  if (this.classList[0] === "player__button") {
    if (this.classList[1] === "stopped") {
      $video.play();

      // TODO1: changeToPause this class
      // TODO2: change class list to 'playing'
    } else {
      $video.pause();
      // TODO3: change class list to 'stopped'
      // TODO4: change icon of element
    }
  }
}

// on space press toggle video, 'key shortcuts'
document.addEventListener("keypress", (key) => {
  // toggle playing video
  if (key.key === " ") {
    // let interval;
    if (!videoPlaying) {
      pause($video);
      // clearInterval(interval);
    } else {
      // interval = setInterval(() => videoSolver(), 100);
      start($video);
    }
  }
  // get video to fullscreen
  if (key.key === "f") {
    if (isFullscreen) {
      closeFullscreen($video);
      isFullscreen = !isFullscreen;
    } else {
      openFullscreen($video);
      isFullscreen = !isFullscreen;
    }
  }
});

// openning the fullscreen
// TODO repair bug: in fullscreen there is no navigation: tip : https://www.html5canvastutorials.com/blog/2013/03/custom-html5-video-player/
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

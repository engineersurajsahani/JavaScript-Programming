<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video Player</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      text-align: center;
      margin: 50px;
    }

    video {
      width: 100%;
      max-width: 600px;
      margin-top: 20px;
    }

    #controls {
      margin-top: 20px;
    }

    button {
      font-size: 16px;
      margin: 5px;
      cursor: pointer;
    }

    input[type="range"] {
      width: 80%;
    }
  </style>
</head>
<body>
  <h1>Simple Video Player</h1>
  <video id="video" controls>
    <source src="your-video-file.mp4" type="video/mp4">
    Your browser does not support the video element.
  </video>

  <div id="controls">
    <button id="playPauseBtn">Play</button>
    <button id="stopBtn">Stop</button>
    <input type="range" id="volumeSlider" value="100" max="100">
    <span id="volumeValue">100%</span>
  </div>

  <script>
    const video = document.getElementById('video');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeValue = document.getElementById('volumeValue');

    playPauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
      } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
      }
    });

    stopBtn.addEventListener('click', () => {
      video.pause();
      video.currentTime = 0;
      playPauseBtn.textContent = 'Play';
    });

    volumeSlider.addEventListener('input', () => {
      const volume = volumeSlider.value;
      video.volume = volume / 100;
      volumeValue.textContent = `${volume}%`;
    });
  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Audio Player</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      text-align: center;
      margin: 50px;
    }

    audio {
      width: 100%;
      max-width: 400px;
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
  </style>
</head>
<body>
  <h1>Simple Audio Player</h1>
  <audio id="audio" controls>
    <source src="your-audio-file.mp3" type="audio/mp3">
    Your browser does not support the audio element.
  </audio>

  <div id="controls">
    <button id="playPauseBtn">Play</button>
    <button id="stopBtn">Stop</button>
    <input type="range" id="volumeSlider" value="100" max="100">
    <span id="volumeValue">100%</span>
  </div>

  <script>
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeValue = document.getElementById('volumeValue');

    playPauseBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
      } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
      }
    });

    stopBtn.addEventListener('click', () => {
      audio.pause();
      audio.currentTime = 0;
      playPauseBtn.textContent = 'Play';
    });

    volumeSlider.addEventListener('input', () => {
      const volume = volumeSlider.value;
      audio.volume = volume / 100;
      volumeValue.textContent = `${volume}%`;
    });
  </script>
</body>
</html>

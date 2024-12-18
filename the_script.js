SOURCES = [
  "https://dobryfranek.github.io/the_video.mp4",
]

function downloadFile(source) {
    const anchor = document.createElement('a');
    anchor.href = source;
    anchor.download = "cat.mp4";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

downloadFile(SOURCES[0])

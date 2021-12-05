function changeBackground() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }

  function playAudio(url) {
    new Audio(url).play();
  }
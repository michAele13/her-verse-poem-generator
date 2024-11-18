function generatePoem(event) {
    event.preventDefault();

    new Typewriter('#poem', {
        strings: "Pretty women wonder where my secret lies.",
        autoStart: true,
        delay: 1,
      });
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

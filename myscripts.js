
function createKittyIcon() {
  const icon = document.createElement("img");
  icon.src = "pngwing.com.png"; // Hello Kitty icon
  icon.classList.add("kitty-icon");
  icon.style.left = Math.random() * window.innerWidth + "px";
  icon.style.top = Math.random() * window.innerHeight + "px";
  document.body.appendChild(icon);

  setTimeout(() => {
    icon.remove();
  }, 3000);
}

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.style.left = Math.random() * window.innerWidth + "px";
  flower.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 6000);
}

const answers = [
  "Every moment with you is my favorite memory. ❤️",
  "I care about your well-being. How about we talk about it?",
  "Anywhere with you is my dream date!",
  "Sending you a big virtual hug right now! 🤗",
];

function showAnswer(index) {
  const answerElement = document.getElementById("answer");
  answerElement.textContent = answers[index];
  answerElement.style.display = "block";
}

setInterval(createKittyIcon, 1000);
setInterval(createFlower, 500);
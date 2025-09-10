function getColorEmoji(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "Red") {
      alert("❤️");
    }
    if (event.target.value === "Blue") {
      alert("💙");
    }
    if (event.target.value === "Yellow") {
      alert("💛");
    }
  }
}

let chooseColor = document.querySelector("#colors");
chooseColor.addEventListener("change", getColorEmoji);

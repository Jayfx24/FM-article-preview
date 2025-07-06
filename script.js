const shareBtn = document.querySelector(".share-btn");
const socialDiv = document.querySelector(".socials");

shareBtn.addEventListener("click", () => {
  socialDiv.classList.toggle("hide");
});

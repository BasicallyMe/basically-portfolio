import "./styles.scss";
import randomWords from "random-words";

window.onload = (e) => {
    generateRandomWord()
}

const randomWord = document.getElementById("random-word");

randomWord.addEventListener('click', () => {
    generateRandomWord()
})
const generateRandomWord = () => {
  randomWord.innerHTML = `basically-${randomWords()}`;
};

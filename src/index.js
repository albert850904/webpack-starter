// import { v4 as uuidV4 } from "uuid";
import generateJoke from "./generateJoke";
import "./styles/main.scss";
import mountainer from "./assets/Mountain.svg";

const mountainImg = document.getElementById("mountainImg");
mountainImg.src = mountainer;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();

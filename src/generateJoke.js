import axios from "axios";

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await axios.get("https://icanhazdadjoke.com", config);
  document.getElementById("joke").innerHTML = res.data.joke;
  // return "This is a bad joke";
}

export default generateJoke;

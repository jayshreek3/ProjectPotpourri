const jokeEle = document.getElementById("jokes");
const jokeBtn = document.getElementById("jokesBtn");

jokeBtn.addEventListener("click", getJoke);

getJoke();

async function getJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEle.innerHTML = data.joke;
}

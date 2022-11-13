import axios from 'axios';


export async function getJoke() {
  const res = await axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist&type=single');
  return res.data;
}


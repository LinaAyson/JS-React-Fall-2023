// To continue on with the pokemon theme, we've found a
// pokemon API for you to practice on --> https://pokeapi.co/.
// If you go to this page --> https://pokeapi.co/api/v2/,
// you can see all of the endpoints available.
// We will start with the endpoint named pokemon.

// The goal is to change the content of our mystery table in
// HTML to contain info about one specific pokemon. To get you
// started, we've created some variables for you to use later on:

const image = document.getElementById("image");
const name = document.getElementById("name");
const element = document.getElementById("element");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
// const strength = document.getElementById("strength");

// 1) Start with updating the fetchPokemons function so that
//    it's fetching the pokemons from the pokemon endpoint and
//    logs the results in the console.
//    HINT --> Don't forget to invoke the function

const URL = "https://pokeapi.co/api/v2/pokemon/?limit=15";

const fetchPokemons = async () => {
  /*Fetch all pokemons here*/
  fetch(URL)
    .then(response => response.json())
    // .then(data => console.log(data.results))
    .then(data => {
      const pokemonNames = data.results.map(pokemon => pokemon.name);
      console.log("NUMBER 1 " + pokemonNames);
    })
    .catch(error => {
      //Handle error
      console.error("NUMBER 1 " + "Error fetching pokemon data:", error)
    })
};

fetchPokemons();

// 2) a) As you can see, we get some metadata as well as
//    the results of the fetch. Change the console.log so
//    that you only log the array of pokemon objects.
//.then(data => console.log(data.results))

//    b) Log only the name of the first pokemon in the
//    pokemon objects array
// .then(data => console.log(data.results[0]))

//    c) Log the names of all pokemons in the array
// .then(data => {
//   const pokemonNames = data.results.map(pokemon => pokemon.name);
//   console.log(pokemonNames);
// })



// 3) You might know that there are more than 20 pokemons
//    in the pokedex (1050 to be exact). Add a query parameter
//    called "limit" to the URL, and set it to a number of your
//    choice, like this: https://pokeapi.co/api/v2/pokemon/?limit=151
//    and pick a pokemon that you would like to continue
//    working with. Copy the pokemon's URL.
// "https://pokeapi.co/api/v2/pokemon/4/"


// 4) Now that we've picked a pokemon, we will do a new fetch
//    to the URL we copied. Since that's another endpoint,
//    we will create a new fetch inside the fetchBulbasaurData
//    function (change the function's name to fit your pokemon).
//    Log the data in the console and see what you find.

const urlcharamander = "https://pokeapi.co/api/v2/pokemon/4/";
const sum = (total, x) => {
  return total + x;
}

const fetchCharamanderData = async () => {
  fetch(urlcharamander)
    .then(response => response.json())
    .then((data) => {
      image.src = data.sprites.front_default;
      name.textContent = data.name;
      weight.textContent = data.weight;
      height.textContent = data.height;
      element.textContent = data.stats.map((stat) => stat.base_stat).reduce(sum, 0)
      types.textContent = data.types.map((t) => t.type.name).toString();
      console.log(data.name)
    })
    .catch(error => {
      //Handle error
      console.error("NUMBER 4 " + "Error fetching pokemon data:", error)
    })

};

fetchCharamanderData();



// 5) After familiarizing with the data, we will use the data
//    to change our table. We will give you the image as a start.
//    If you named the data something else than json, you change the
//    word json below so it corresponds with your code. Here goes:
//    image.src = json.sprites.front_default;
//    Copy that line into the fetchBulbasaurData and hopefully
//    the image in the HTML updates.



// 6) Update the innerHTML of the other rows as well after
//    you've found the correct path in the json.
//    HINT --> Log stuff in the console to try things out
//    HINT --> If it's an array - map over the array

// ***BONUS***
// Check out the API's documentation and try to fetch from another
// endpoint! There are many - as you can see in the first link

const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=15";

function handleButtonClick() {
  // Make a GET request to the API to fetch the list of Pokémon
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Choose a random Pokémon from the list (you can change the selection logic)
      const randomPokemon = data.results[Math.floor(Math.random() * data.results.length)];

      // Fetch data for the selected Pokémon
      return fetch(randomPokemon.url);
    })
    .then(response => response.json())
    .then(data => {
      // Now you can access the data for the selected Pokémon
      image.src = data.sprites.front_default;
      name.textContent = data.name;
      weight.textContent = data.weight;
      height.textContent = data.height;
      element.textContent = data.stats.map(stat => stat.base_stat).reduce((a, b) => a + b, 0);
      types.textContent = data.types.map(t => t.type.name).toString();
      console.log(data.name);
    })
    .catch(error => {
      // Handle errors
      console.error("Error fetching pokemon data:", error);
    });
}



// Replace 'myButton' with the actual ID of your button
const button = document.getElementById('myButton'); // Replace 'yourButtonId' with your button's actual ID
button.addEventListener('click', handleButtonClick);
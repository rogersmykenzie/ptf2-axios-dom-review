function updateFavorites(character) {
  const favoritesDiv = document.querySelector(".favorites");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  h1.innerText = `Name: ${character.name}`;
  h2.innerText = `Birth Year: ${character.birth_year}`;

  div.className = "character-container character-container-favorite";

  div.appendChild(h1);
  div.appendChild(h2);
  // add an onclick for this div that would remove from favorites when you clicked
  favoritesDiv.appendChild(div);
}

axios.get("https://swapi.dev/api/people/?page=2").then((response) => {
  const names = response.data.results.map((characterObj) => {
    return {
      name: characterObj.name,
      birth_year: characterObj.birth_year,
    };
  });

  const main = document.querySelector("main");

  for (let i = 0; i < names.length; i++) {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    h1.innerText = `Name: ${names[i].name}`;
    h2.innerText = `Birth Year: ${names[i].birth_year}`;

    div.className = "character-container";

    div.appendChild(h1);
    div.appendChild(h2);
    main.appendChild(div);

    div.addEventListener("click", () => {
      // splice the chraracter from names array and rerender
      updateFavorites(names[i]);
    });
  }
});

import AnimateNumbers from './numbers-animate.js';

export default function initAnimalsApi(url, target) {
  const gridNumbers = document.querySelector(target);
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal-number');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;

    return div;
  }

  // Fill each animal in it's div
  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    gridNumbers.appendChild(divAnimal);
  }

  function animateAnimalsNumbers() {
    const animateNumbers = new AnimateNumbers(
      '[data-number]',
      '.numbers',
      'animate'
    );
    animateNumbers.init();
  }

  async function fetchAnimals() {
    try {
      // Fetch, awaits for the response and turns it into JSON
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();

      animalsJSON.forEach((animal) => fillAnimals(animal));
      animateAnimalsNumbers();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return fetchAnimals();
}

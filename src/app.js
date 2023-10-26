import "bootstrap";
import "./style.css";

window.onload = () => {
  const drawButton = document.getElementById("draw");
  const sortButton = document.getElementById("sort");
  const inputNumber = document.getElementById("inputNumber");
  const cardContainer = document.getElementById("cardContainer");
  const sortcontainer = document.getElementById("sortSteps");
  const restartButton = document.getElementById("restartButton");

  const generarRandomNumero = () => {
    const numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    return numbers[Math.floor(Math.random() * numbers.length)];
  };

  const generarRandomPinta = () => {
    const pintas = ["heart", "club", "diamond", "spade"];
    return pintas[Math.floor(Math.random() * pintas.length)];
  };
  // crear la carta
  let cardData = [];
  const generarCarta = () => {
    cardData = [];
    const numberOfCards = parseInt(inputNumber.value);

    for (let i = 0; i < numberOfCards; i++) {
      const pinta = generarRandomPinta();
      const number = generarRandomNumero();
      cardData.push({ pinta, number });

      const card = document.createElement("div");
      card.classList.add("card", pinta);

      const numero = document.createElement("div");
      numero.classList.add("numero");
      numero.innerText = number;
      card.appendChild(numero);

      // card.appendChild(numero);
      cardContainer.appendChild(card);
    }
  };

  const dibujarCarta = step => {
    const { number, pinta } = step;
    const card = document.createElement("div");
    console.log(step);
    card.classList.add("card", pinta);

    const numero = document.createElement("div");
    numero.classList.add("numero");
    numero.innerText = number;
    card.appendChild(numero);
    return card;
  };

  // Algoritmo selection
  const selectionSort = () => {
    let min = 0;
    let steps = [];
    while (min < cardData.length - 1) {
      for (let i = min + 1; i < cardData.length; i++) {
        if (cardData[min].number > cardData[i].number) {
          const aux = cardData[min];
          cardData[min] = cardData[i];
          cardData[i] = aux;
        }
        steps.push([...cardData]);
      }
      min++;
    }

    cardData = steps[steps.length - 1];
    // Borra el contenido previo de sortcontainer
    sortcontainer.innerHTML = "";

    steps.forEach((step, index) => {
      const stepDiv = document.createElement("div");
      stepDiv.classList.add("step");

      // Agrega el número de paso
      const stepNumber = document.createElement("span");
      stepNumber.classList.add("step-number");
      stepNumber.textContent = `Step ${index + 1}: `;
      stepDiv.appendChild(stepNumber);

      // Agrega las cartas
      step.forEach(cardInfo => {
        const carta = dibujarCarta(cardInfo);
        stepDiv.appendChild(carta);
      });

      sortcontainer.appendChild(stepDiv);
    });
  };
  // restaurar
  const restart = () => {
    inputNumber.value = "";
    cardData = [];
    cardContainer.innerHTML = "";
    sortcontainer.innerHTML = "";
  };

  drawButton.addEventListener("click", generarCarta);
  sortButton.addEventListener("click", selectionSort);
  restartButton.addEventListener("click", restart);
};

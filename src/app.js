/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  const drawButton = document.getElementById("draw");
  const inputNumber = document.getElementById("inputNumber");
  const cardContainer = document.getElementById("cardContainer");

  //  número aleatorio
  let generarRandomNumero = () => {
    let numbers = [
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
    let iNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[iNumbers];
  };

  // pinta aleatoria
  let generarRandomPinta = () => {
    let pintas = ["heart", "club", "diamond", "spade"];
    let iPintas = Math.floor(Math.random() * pintas.length);
    return pintas[iPintas];
  };

  // Genera una carta aleatoria
  const generarCarta = () => {
    cardContainer.innerHTML = ""; // Limpia las cartas existentes
    const numberOfCards = parseInt(inputNumber.value);

    for (let i = 0; i < numberOfCards; i++) {
      const card = document.createElement("div");
      card.classList.add("card", generarRandomPinta());
      card.innerHTML = generarRandomNumero();
      cardContainer.appendChild(card);
    }
  };

  //boton
  drawButton.addEventListener("click", generarCarta);
};

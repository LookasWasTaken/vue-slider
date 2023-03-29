/*
Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

// array

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morales",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },

  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },

  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },

  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },

  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// Designo DIV diversi come contenitori dei miei tre attribuiti degli oggetti all'interno dell'array di oggetti

const carousel = document.querySelector(".images");
const carouselName = document.querySelector(".name");
const carouselText = document.querySelector(".descriptions");
const thumbnail = document.querySelector(".thumbnail");

// ciclo for Each all'interno dell'array images
// quindi: PER OGNI elemento dell'array IMAGES passo il parametro/props GAME
// modifico quindi l'innerHTML dei DIV contenitori

images.forEach((game, index) => {
  carouselName.innerHTML += `<h3 class="game_title">${game.title}</h3>`;
  carousel.innerHTML += `<img class="cover" src="./assets/${game.image}">`;
  carouselText.innerHTML += `<h4 class="game_description">${game.text}</h4>`;
  thumbnail.innerHTML += `<img class="thumbnail_img" onClick="thumbClick(${index})" index="${index}" src="./assets/${game.image}">`;
});

// Variabile a 0 per modificare l'elemento visualizzato

let activeGame = 0;

// Seleziono il pulsante next e previous

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// Seleziono i pulsanti backward/forward e play/stop

const play = document.querySelector(".play");
const stop = document.querySelector(".stop");
const backward = document.querySelector(".backward");
const forward = document.querySelector(".forward");

// Attivazione della classe "ACTIVE" per la rimozione del Display None (e target per la thumbnail)

const cover = document.querySelectorAll(".cover");
cover[activeGame].classList.add("active");

const title = document.querySelectorAll(".game_title");
title[activeGame].classList.add("active");

const text = document.querySelectorAll(".game_description");
text[activeGame].classList.add("active");

const thumb = document.querySelectorAll(".thumbnail_img");
thumb[activeGame].classList.add("target");

// Event Listener per il pulsante NEXT

next.addEventListener("click", function () {
  console.log("Clicked on the Next Button");

  // Rimozione delle classi di selezione

  cover[activeGame].classList.remove("active");
  title[activeGame].classList.remove("active");
  text[activeGame].classList.remove("active");
  thumb[activeGame].classList.remove("target");
  activeGame++;

  // Verifico se activeGame è più grande dell'ultimo valore dell'indice di cover, se è così lo resetto a 0

  if (activeGame >= cover.length) {
    activeGame = 0;
  }

  // Genero delle variabili per le successive cover,title,text,thumb

  const nextCover = cover[activeGame];
  const nextTitle = title[activeGame];
  const nextText = text[activeGame];
  const nextThumb = thumb[activeGame];

  // Aggiunzione delle classi di selezione alle successive cover,title,text,thumb

  nextCover.classList.add("active");
  nextTitle.classList.add("active");
  nextText.classList.add("active");
  nextThumb.classList.add("target");
});

// Event Listener per il pulsante PREV

prev.addEventListener("click", function () {
  console.log("Clicked on the Previous Button");

  // Rimozione delle classi di selezione

  cover[activeGame].classList.remove("active");
  title[activeGame].classList.remove("active");
  text[activeGame].classList.remove("active");
  thumb[activeGame].classList.remove("target");
  activeGame--;

  // Verifico se activeGame è negativo, riportalo all'ultimo indice dell'array

  if (activeGame < 0) {
    activeGame = cover.length - 1;
  }

  // Genero delle variabili per le successive cover,title,text,thumb

  const nextCover = cover[activeGame];
  const nextTitle = title[activeGame];
  const nextText = text[activeGame];
  const nextThumb = thumb[activeGame];

  // Aggiunzione delle classi di selezione alle successive cover,title,text,thumb

  nextCover.classList.add("active");
  nextTitle.classList.add("active");
  nextText.classList.add("active");
  nextThumb.classList.add("target");
});

// Funzione inserita nell'onClick delle thumbnail_img

function thumbClick(index) {
  // Rimozione delle classi di selezione dalla thumbnail attualmente selezionata

  thumb[activeGame].classList.remove("target");

  // Congruenza della variabile activeGame in base all'indice selezionato

  activeGame = index;

  // Aggiunta della classe di selezione alla nuova thumbnail selezionata

  thumb[activeGame].classList.add("target");

  // Aggiornamento dell'immagine, del titolo e della descrizione in base all'indice selezionato

  cover[activeGame].classList.add("active");
  title[activeGame].classList.add("active");
  text[activeGame].classList.add("active");

  // Rimozione della classe di selezione dall'immagine, dal titolo e dalla descrizione precedente
  // Il valore "item" sta per cover/title/text, "index" sta per l'indice

  cover.forEach((item, index) => {
    if (index !== activeGame) {
      item.classList.remove("active");
    }
  });

  title.forEach((item, index) => {
    if (index !== activeGame) {
      item.classList.remove("active");
    }
  });

  text.forEach((item, index) => {
    if (index !== activeGame) {
      item.classList.remove("active");
    }
  });
}

// Variabile per selezionare il tempo di autoplay

let autoplayInterval = 3000;

// Variabile per il reset del timer dell'autoplay

let autoplayTimer;

// Funzione per muovermi alla slide successiva

function nextSlide() {
  cover[activeGame].classList.remove("active");
  title[activeGame].classList.remove("active");
  text[activeGame].classList.remove("active");
  thumb[activeGame].classList.remove("target");
  activeGame++;

  // Verifico se activeGame è più grande dell'ultimo valore dell'indice di cover, se è così lo resetto a 0

  if (activeGame >= cover.length) {
    activeGame = 0;
  }

  // Genero delle variabili per le successive cover,title,text,thumb

  const nextCover = cover[activeGame];
  const nextTitle = title[activeGame];
  const nextText = text[activeGame];
  const nextThumb = thumb[activeGame];

  // Aggiunzione delle classi di selezione alle successive cover,title,text,thumb

  nextCover.classList.add("active");
  nextTitle.classList.add("active");
  nextText.classList.add("active");
  nextThumb.classList.add("target");
}

// Funzione per muovermi alla slide precedente

function previousSlide() {
  cover[activeGame].classList.remove("active");
  title[activeGame].classList.remove("active");
  text[activeGame].classList.remove("active");
  thumb[activeGame].classList.remove("target");
  activeGame--;

  // Verifico se activeGame è negativo, riportalo all'ultimo indice dell'array

  if (activeGame < 0) {
    activeGame = cover.length - 1;
  }

  // Genero delle variabili per le successive cover,title,text,thumb

  const nextCover = cover[activeGame];
  const nextTitle = title[activeGame];
  const nextText = text[activeGame];
  const nextThumb = thumb[activeGame];

  // Aggiunzione delle classi di selezione alle successive cover,title,text,thumb

  nextCover.classList.add("active");
  nextTitle.classList.add("active");
  nextText.classList.add("active");
  nextThumb.classList.add("target");
}

// Funzione per l'avvio dell'autoPlay

function startAutoplay() {
  autoplayTimer = setInterval(nextSlide, autoplayInterval);
}

// Funzione per l'avvio dell'autoPlay

function reverseStartAutoplay() {
  autoplayTimer = setInterval(previousSlide, autoplayInterval);
}

// Funzione per lo stop dell'autoPlay

function stopAutoplay() {
  clearInterval(autoplayTimer);
}

// Event Listener per il pulsante PLAY

play.addEventListener("click", function () {
  console.log("Clicked on the Play Button");
  startAutoplay();
});

// Event Listener per il pulsante STOP

stop.addEventListener("click", function () {
  console.log("Clicked on the Stop Button");
  stopAutoplay();
});

// Event Listener per il pulsante BACKWARD

backward.addEventListener("click", function () {
  console.log("Clicked on the Backward Button");
  stopAutoplay();
  previousSlide();
  reverseStartAutoplay();
});

// Event Listener per il pulsante FORWARD

forward.addEventListener("click", function () {
  console.log("Clicked on the Forward Button");
  stopAutoplay();
  startAutoplay();
});

// Funzione di autoPlay attiva al caricamento della pagina
startAutoplay();

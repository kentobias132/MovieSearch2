const searchBtn = document.querySelector("form");
searchBtn.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchInput = document.querySelector(".search-input");
  console.log(searchInput.value);
  getMovies(searchInput.value);
});

//Fetch movie data
const main_container = document.querySelector(".main-container");
let returnMovies;

function getMovies(input) {
  if (input.trim() === "") {
    main_container.innerHTML = `  <div class="erro-message">You haven't filled out the search. Please try again.</div>`;
  } else {
    loading();
    return fetch(`https://api.consumet.org/movies/flixhq/${input}?page={1}`)
      .then((response) => response.json())
      .then((data) => {
        returnMovies = data;
        console.log(data);
        stoploading();
        showCard();
      })
      .catch((error) => console.log(error));
  }
}

// const form_control = document.querySelector(".form-control");

//Card
const movie_container = document.querySelector(".movie-container");
function showCard() {
  let myMovies = returnMovies.results;
  console.log(myMovies);
  for (let i = 0; i < myMovies.length; i++) {
    movie_container.innerHTML += `
    <div class="card m-4" style="width: 18rem;">
      <img src="${myMovies[i].image}" class="card-img-top img" style=""; " alt="...">
    <div class="card-body">
      <h5 class="card-title">${myMovies[i].title}</h5>
      <p class="card-text">${myMovies[i].releaseDate}</p>
      <a href="play-movie.html?src=${myMovies[i].url}" onclick="showVideo()" target="_blank"class="btn btn-primary">Play movie
      </a>
    </div>
  </div>`;
  }
}

function playVideo() {
  const video = document.getElementById("myVideo");
  video.play();
}
function loading() {
  const movie = document.querySelector(".spinner");
  movie.style.display = "flex";
}
function stoploading() {
  const movie = document.querySelector(".spinner");
  movie.style.display = "none";
}
//dssw
const videoShow = document.querySelector(".videoShow");
function showVideo() {
  videoShow.innerHTML += `
    <video id="myVideo" onclick="playVideo()"  >
    <source src="${myMovies[i].url}"></source>
    </video>
    <h2>munie</h2>
   `;
}

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("src");
console.log(myParam);
showVideo();

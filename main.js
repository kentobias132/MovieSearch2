// Api key
const tmdbKey = "283158bd06dd1684146f37464c01d6d7";
// base url
const tmdbBaseUrl = "https://api.themoviedb.org/3";
// search button
const searchBtn = document.getElementById("searchBtn");

const getMovieBySearchArray = async () => {
  // getting input value
  const input = document.getElementById("movieIput").value;
  console.log(input);
  // search movie keyword endpoint
  const movieKeywordEndpoint = "/search/movie";
  const requestParams = `?api_key=283158bd06dd1684146f37464c01d6d7&query=${input}`;
  const urlToFetch = `${tmdbBaseUrl}${movieKeywordEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const movie = jsonResponse.results;
      console.log(movie);
      return movie;
    }
  } catch (error) {
    console.log(error);
  }
};

// function loading() {
//   const movie = document.querySelector(".spinner");
//   movie.style.display = "flex";
// }

// function stoploading() {
//   const movie = document.querySelector(".spinner");
//   movie.style.display = "none";
// }

const resMovie = async () => {
  // clearCurrentMovie();
  // loading();

  const relatedMovie = await getMovieBySearchArray();
  // stoploading();
  displayMovie(relatedMovie);
};


searchBtn.onclick = resMovie;
// searchBtn.onclick = getMovieBySearchArray;

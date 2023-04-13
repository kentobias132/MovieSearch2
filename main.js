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
  const requestParams = `?api_key=${tmdbKey}&query=${input}`;
  const urlToFetch = `${tmdbBaseUrl}${movieKeywordEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const movie = jsonResponse.results;
      return movie;
    }
  } catch (error) {
    console.log(error);
  }
};

const resMovie = async () => {
  const relatedMovie = await getMovieBySearchArray();
  const movie = await displayMovie(relatedMovie);
  return movie;
};

searchBtn.onclick = resMovie;

// enter button event
document.getElementById("movieIput").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    resMovie();
  }
});

const createMovieCard = () => {
  const movieCard = document.createElement("div");
  movieCard.setAttribute("class", "movie-card");
  return movieCard;
};

const movieDetailsContainer = () =>{
  const movieDetails = document.createElement("div");
  movieDetails.setAttribute("class", "movie-details");
  return movieDetails;
}



const createMoviePoster = (posterPath) => {
  const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

  const posterImg = document.createElement("img");
  posterImg.setAttribute("src", moviePosterUrl);
  posterImg.setAttribute("id", "moviePoster");

  return posterImg;
};

const createMovieTitle = (title) => {
  const titleHeader = document.createElement("h2");
  titleHeader.setAttribute("id", "movieTitle");
  titleHeader.innerHTML = title;

  return titleHeader;
};

const createReleaseDate = (date) => {
  const releaseDate = document.createElement("p");
  releaseDate.setAttribute("class", "movie-release");
  releaseDate.innerHTML = "Released: " + date;

  return releaseDate;
};

const createRatings = (rate) => {
  const aveRating = document.createElement("p");
  aveRating.setAttribute("class", "movie-rating");
  aveRating.innerHTML = "Rating: " + rate;

  return aveRating;
};

const displayMovie = (movies) => {
  console.log(movies);
  const movieContainer = document.getElementById("mainContainer");

  const trailerBtn = () =>{
    const trailerBtn = document.createElement("button");
    trailerBtn.setAttribute("class", "movie-button");
    trailerBtn.innerHTML = "Watch Trailer";
    return trailerBtn;
  }

  movies.forEach((movie) => {
    const movieCard = createMovieCard();
    const detailsCont = movieDetailsContainer()
    const img = createMoviePoster(movie.poster_path);
    const title = createMovieTitle(movie.title);
    const release = createReleaseDate(movie.release_date);
    const rate = createRatings(movie.vote_average);

    // if(!img) return

    movieCard.appendChild(img);
    detailsCont.appendChild(title);
    detailsCont.appendChild(release);
    detailsCont.appendChild(rate);
    detailsCont.appendChild(trailerBtn());
    movieCard.appendChild(detailsCont);

    movieContainer.appendChild(movieCard);

   
  });
};

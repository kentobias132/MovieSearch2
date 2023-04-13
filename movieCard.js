const createMovieCard = () => {
  const movieCard = document.createElement("div");
  movieCard.setAttribute("class", "movie-card");
  return movieCard;
};

const movieDetailsContainer = () => {
  const movieDetails = document.createElement("div");
  movieDetails.setAttribute("class", "movie-details");
  return movieDetails;
};

const createMoviePoster = (posterPath) => {
  const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

  const posterImg = document.createElement("img");
  posterImg.setAttribute("src", moviePosterUrl);
  posterImg.setAttribute("id", "moviePoster");

  return posterImg;
};
// const createMoviePoster = (posterPath) => {
//   const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

//   const posterImg = document.createElement("div");
//   posterImg.setAttribute("class", "movie-poster");
//   // posterImg.setAttribute("src", moviePosterUrl);
//   posterImg.style.backgroundImage = `url(${moviePosterUrl})`;

//   return posterImg;
// };

const createMovieTitle = (title) => {
  const titleHeader = document.createElement("h2");
  titleHeader.setAttribute("class", "movie-title");
  titleHeader.innerHTML = title;

  return titleHeader;
};

const createReleaseDate = (date) => {
  const releaseDate = document.createElement("p");
  releaseDate.setAttribute("class", "movie-release");
  releaseDate.innerHTML = "Released: " + date;

  return releaseDate;
};

// const createRatings = (rate) => {
//   const aveRating = document.createElement("p");
//   aveRating.setAttribute("class", "movie-rating");
//   aveRating.innerHTML = "Rating: " + rate;

//   return aveRating;
// };

const createOverviewHead = () => {
  const overviewHead = document.createElement("p");
  overviewHead.setAttribute("class", "overview-head");
  overviewHead.innerHTML = "Overview";

  return overviewHead;
};

const createOverview = (overview) => {
  const overviews = document.createElement("p");
  overviews.setAttribute("class", "overview");
  overviews.innerHTML = overview;

  return overviews;
};

const displayMovie = async (movies) => {
  console.log(movies);
  const movieContainer = document.getElementById("mainContainer");

  const trailerBtn = () => {
    const trailerBtn = document.createElement("button");
    trailerBtn.setAttribute("class", "movie-button");
    trailerBtn.innerHTML = "Watch Trailer";
    return trailerBtn;
  };

  movies.forEach((movie) => {
    const movieCard = createMovieCard();
    const detailsCont = movieDetailsContainer();
    const img = createMoviePoster(movie.poster_path);
    const title = createMovieTitle(movie.title);
    const overHead = createOverviewHead();
    const release = createReleaseDate(movie.release_date);
    const overview = createOverview(movie.overview);

    movieCard.appendChild(img);
    detailsCont.appendChild(title);
    detailsCont.appendChild(release);
    detailsCont.appendChild(overHead);
    detailsCont.appendChild(overview);
    detailsCont.appendChild(trailerBtn());
    movieCard.appendChild(detailsCont);

    movieContainer.appendChild(movieCard);
  });
};

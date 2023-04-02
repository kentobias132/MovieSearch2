const createMovieCard = () => {
  const movieCard = document.createElement("div");
  movieCard.setAttribute("class", "video-card");
  return movieCard;
};

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

const createMovieOverview = (overview) => {
  const overviewParagraph = document.createElement("p");
  overviewParagraph.setAttribute("id", "movieOverview");
  overviewParagraph.innerHTML = overview;

  return overviewParagraph;
};

const displayMovie = (movies) => {
  console.log(movies);
  const movieContainer = document.getElementById("mainContainer");

  movies.forEach((movie) => {
    const movieCard = createMovieCard();
    const img = createMoviePoster(movie.poster_path);
    const title = createMovieTitle(movie.title);
    const parag = createMovieOverview(movie.overview);

    movieCard.appendChild(img);
    movieCard.appendChild(title);
    movieCard.appendChild(parag);

    movieContainer.appendChild(movieCard);
  });
};

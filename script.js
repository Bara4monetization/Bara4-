const movies = [
  {
    title: "Inception",
    genre: "Sci-Fi, Thriller",
    description: "A skilled thief is given a chance to erase his criminal record by implanting an idea into a target's subconscious.",
    review: "9/10 - A mind-bending masterpiece with incredible visuals and storytelling.",
    thumbnail: "https://i.imgur.com/Yo0dK3X.jpg",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi, Adventure",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    review: "9.5/10 - Beautiful, emotional, and epic space odyssey.",
    thumbnail: "https://i.imgur.com/U6ZixOy.jpg",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    title: "The Dark Knight",
    genre: "Action, Crime",
    description: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
    review: "10/10 - Iconic performances and gripping action make it a classic.",
    thumbnail: "https://i.imgur.com/3jLPB46.jpg",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  }
];

function createMovieCard(movie) {
  return `
    <div class="movie-card">
      <img src="${movie.thumbnail}" alt="${movie.title} poster" />
      <div class="movie-details">
        <h2>${movie.title}</h2>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Description:</strong> ${movie.description}</p>
        <p><strong>Review:</strong> ${movie.review}</p>
        <p><a href="${movie.trailer}" target="_blank">Watch Trailer 🎥</a></p>
      </div>
    </div>
  `;
}

const movieList = document.getElementById("movie-list");
movieList.innerHTML = movies.map(createMovieCard).join("");

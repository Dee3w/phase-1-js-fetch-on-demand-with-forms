/*const init = () => {
  
}

document.addEventListener('DOMContentLoaded', init);*/

  // Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get the search form element
    const searchForm = document.getElementById('searchForm');
  
    // Add event listener to the form's submit event
    searchForm.addEventListener('submit', event => {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the input value entered by the user
      const searchInput = document.getElementById('searchByID');
      const movieId = searchInput.value;
  
      // Fetch movie data based on the ID
      fetchMovieDetails(movieId)
        .then(movie => {
          // Update the movie details section with the fetched data
          updateMovieDetails(movie.title, movie.summary);
        })
        .catch(error => {
          // Display an error message if the movie is not found
          updateMovieDetails('Movie not found', '');
        });
    });
  
    // Function to fetch movie details based on the ID
    function fetchMovieDetails(movieId) {
      const baseURL = 'http://localhost:3000/movies';
      const url = `${baseURL}/${movieId}`;
  
      return fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Movie not found');
          }
          return response.json();
        })
        .then(movie => {
          return {
            title: movie.title,
            summary: movie.summary
          };
        });
    }
  
    // Function to update the movie details section with the provided data
    function updateMovieDetails(title, summary) {
      const movieTitle = document.querySelector('#movieDetails h4');
      const movieSummary = document.querySelector('#movieDetails p');
  
      movieTitle.textContent = title;
      movieSummary.textContent = summary;
    }
  });
  
  
  
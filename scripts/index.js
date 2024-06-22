// Get elements
const searchBar = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

// Event listener for search button click
searchButton.addEventListener('click', function() {
    const searchQuery = searchBar.value.trim(); // Remove leading and trailing whitespaces

    if (searchQuery !== '') {
        // Redirect to search results page with the search query in the URL
        window.location.href = `search-results.html?q=${encodeURIComponent(searchQuery)}`;
    } else {
        alert('Please enter a search query');
    }
});
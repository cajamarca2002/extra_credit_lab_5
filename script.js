// Select the link and the pop-up div
const link = document.getElementById('wikipedia-link');
const popup = document.getElementById('popup');

// Function to show the pop-up when the mouse hovers over the link
link.addEventListener('mouseover', () => {
    // URL of the Wikipedia API to get the summary of "Canada"
    const url = 'https://en.wikipedia.org/api/rest_v1/page/summary/Canada';

    // Make the request to the Wikipedia API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            return response.json(); // Convert the response to JSON
        })
        .then(data => {
            // Place the Wikipedia title and summary inside the pop-up
            popup.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.extract}</p>
        <img src="${data.thumbnail ? data.thumbnail.source : ''}" alt="${data.title}">
      `;
            popup.style.display = 'block'; // Show the pop-up
        })
        .catch(error => {
            console.error('Error:', error); // Handle any errors
        });
});

// Function to hide the pop-up when the mouse leaves the link
link.addEventListener('mouseout', () => {
    popup.style.display = 'none'; // Hide the pop-up
});

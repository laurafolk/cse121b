document.addEventListener('DOMContentLoaded', () => {
    const getQuoteBtn = document.getElementById('getQuoteBtn');
    const quoteElement = document.getElementById('quote');
  
    const apiUrl = 'https://type.fit/api/quotes';
  
    // Function to fetch and display a quote
    const getQuote = () => {
      // Fetch quote data
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Randomly select a quote from the array
          const randomIndex = Math.floor(Math.random() * data.length);
          const quote = data[randomIndex].text;
          const author = data[randomIndex].author;
  
          // Display the quote on the webpage
          quoteElement.innerHTML = `<blockquote>${quote}</blockquote><p>- ${author}</p>`;
        })
        .catch(error => {
          console.error('Error fetching quote data:', error);
          quoteElement.textContent = 'Failed to fetch quote';
        });
    };
  
    // Event listener for the "Get Quote" button
    getQuoteBtn.addEventListener('click', getQuote);
  
    // Initial fetch and display of quote on page load
    getQuote();
  });
  
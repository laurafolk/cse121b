document.addEventListener('DOMContentLoaded', () => {
  const getAffirmationBtn = document.getElementById('getAffirmationBtn');
  const affirmationElement = document.getElementById('affirmations');

  const apiUrl = 'https://type.fit/api/quotes';

  // Function to fetch and display an affirmation
  const getAffirmation = () => {
    // Fetch affirmation data
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Check if there is data
        if (data && data.length > 0) {
          // Randomly select an affirmation from the array
          const randomIndex = Math.floor(Math.random() * data.length);
          const affirmation = data[randomIndex].text;

          // Display the affirmation on the webpage
          affirmationElement.textContent = `"${affirmation}"`;
        } else {
          // Handle the case where no data is returned
          affirmationElement.textContent = 'No affirmations available';
        }
      })
      .catch(error => {
        console.error('Error fetching affirmation data:', error);
        affirmationElement.textContent = 'Failed to fetch affirmation';
      });
  };

  // Event listener for the "Get Affirmation" button
  getAffirmationBtn.addEventListener('click', getAffirmation);

  // Initial fetch and display of affirmation on page load
  getAffirmation();
});


//keeping the below for reference
// document.addEventListener('DOMContentLoaded', () => {
//     const getAffirmationBtn = document.getElementById('getAffirmationBtn');
//     const affirmationElement = document.getElementById('affirmations');
  
//     const apiUrl = 'https://type.fit/api/quotes';
  
//     // Function to fetch and display a quote
//     const getAffirmation = () => {
//       // Fetch quote data
//       fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//           //check if there is data
//           if (data && data.length > 0) {
//           // Randomly select a quote from the array
//           const randomIndex = Math.floor(Math.random() * data.length);
//           const affirmation = data[randomIndex].text;  
//           }
//           // Randomly select a quote from the array
//           //const randomIndex = Math.floor(Math.random() * data.length);
//           //const affirmation = data[randomIndex].text;
  
//           // Display the quote on the webpage
//           //quoteElement.innerHTML = `<blockquote>${quote}</blockquote><p>- ${author}</p>`;
//           affirmationElement.textContent = '"${affirmation}"';
//         })
//         .catch(error => {
//           console.error('Error fetching quote data:', error);
//           affirmationElement.textContent = 'Failed to fetch quote';
//         });
//     };
  
//     // Event listener for the "Get Quote" button
//     getAffirmationBtn.addEventListener('click', getAffirmation);
  
//     // Initial fetch and display of quote on page load
//    getAffirmation();
//  });
  
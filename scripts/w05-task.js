/* W05: Programming Tasks */

/* Declare and initialize global variables */

// Declare a const variable named templesElement
const templesElement = document.getElementById('templeData'); // Replace 'templeData' with the actual ID of your HTML div element
// Declare a global empty array variable to store a list of temples
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
      const articleElement = document.createElement('article');
      
      const h3Element = document.createElement('h3');
      h3Element.textContent = temple.templeName;
  
      const imgElement = document.createElement('img');
      imgElement.src = temple.imageUrl;
      imgElement.alt = temple.location;
  
      articleElement.appendChild(h3Element);
      articleElement.appendChild(imgElement);
  
      templesElement.appendChild(articleElement);
    });
  };

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'); // Replace with the actual URL of your temple data
    templeList = await response.json();
    templeList.length = 0; // Clear existing data in templeList
    templeList.push(...templeData); // Spread operator to push elements individually
    displayTemples(templeList);
  };

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ''; // Clear all child elements
  };  

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.getElementById('sortBy').value;
    switch (filter.value) {
      case 'utah':
        displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
        break;
      case 'notutah':
        displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
        break;
      case 'older':
        displayTemples(temples.filter((temple) => new Date(temple.dedication) < new Date(1950, 0, 1)));
        break;
      case 'all':
        displayTemples(temples);
        break;
        default:
         console.log('Invalid filter');
    }
  };

/* Event Listener */
document.getElementById("#sortBy").addEventListener("change", () => { sortBy(templeList) });
// Initial call to getTemples to fetch and display temple data
getTemples();
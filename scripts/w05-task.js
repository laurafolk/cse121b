/* W05: Programming Tasks */

/* Declare and initialize global variables */

// Declare a const variable named templesElement
const templesElement = document.querySelector('#temples'); // Replace 'templeData' with the actual ID of your HTML div element
// Declare a global empty array variable to store a list of temples
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  templesElement.innerHTML = '';

  temples.forEach(temple => {
    const articleElement = document.createElement('article');

    const h3Element = document.createElement('h3');
    const imgElement = document.createElement('img');

    h3Element.textContent = temple.templeName;

    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;

    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);

    templesElement.appendChild(articleElement);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  try {
      const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
      
      templeList = await response.json();

      displayTemples(templeList);

      console.log(templeList);

  } catch (error) {
      console.error('Error fetching temple data:', error);
  }
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = '';
};

const sortBy = () => {
  const filter = document.getElementById('sortBy').value;

  switch (filter) {
    case 'utah':
      displayTemples(templeList.filter(temple => temple.location.includes('Utah')));
      break;
    case 'notutah':
      displayTemples(templeList.filter(temple => !temple.location.includes('Utah')));
      break;
    case 'older':
      const cutoffDate = new Date(1950, 0, 1);
      displayTemples(templeList.filter(temple => new Date(temple.dedicated) < cutoffDate));
      break;
    case 'all':
      displayTemples(templeList);
      break;
    default:
      console.error('Invalid filter value');
  }
};

/* Event Listener */
document.querySelector("#sortBy") .addEventListener("change", sortBy);
//const sortByElement = document.getElementById('sortBy');
//sortByElement.addEventListener('change', sortBy);
getTemples()
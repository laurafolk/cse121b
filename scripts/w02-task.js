/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Laura Folk';
let currentYear =  '2023';
let profilePicture = 'images/profilePicture.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('picture img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
imageElement.setAttribute = ('src' , profilePicture);
imageElement.setAttribute = ('alt' , `Profile image of ${fullName}`);

/* Step 5 - Array */
const favFoods = ["Homemade Pizza", "Burgers", "Dark Chocolate"];
foodElement.innerHTML = favFoods;
const extraFoodItem = "Homemade chocolate peanut butter cups";
favFoods.push(extraFoodItem);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;





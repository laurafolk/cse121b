/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Laura Folk",
    photo: 'images/profilePicture.png',
    favoriteFoods: ['Pizza',
                    'Burgers', 
                    'Smoothies',
                    'Dark Chocolate', 
                    'Chili'],
    hobbies: ['Bike riding',
              'Making things using alcohol ink/resin',
              'Crocheting',
              'Watching movies'],
    placesLived: [],              
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
       place: 'Saint Louis, MO',
       length: '55 years' 
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#name').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});


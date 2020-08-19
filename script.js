const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// unsplash API
const count = 10;
const apiKey = 'JOxC7vksoPKVPFfDfFYYdqVbOvNIsISrm0Tpqtglg2w';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttribute(element,attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

// create element for links & photosArray,add to dom
function displayPhotos(){
    // run function for each object in photosArray
    photosArray.forEach((photo) => {
        // create <a> to link to unsplash
        const item = document.createElement('a');
        setAttribute(item,{
            href: photo.links.html,
            target: '_blank',
        });
        // item.setAttribute('href', photo.links.html);
        // item.setAttribute('target','__blank');
        const img = document.createElement('img');
        setAttribute(img,{
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // img.setAttribute('src', photo.urls.regular);
        // img.setAttribute('alt', photo.alt_description);
        // img.setAttribute('title', photo.alt_description);

        // put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// get photos from unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        // console.log(photosArray);
        displayPhotos();
    }catch(error){

    }
}

// on load
getPhotos();
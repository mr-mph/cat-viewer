const cat_image_el = document.getElementById('image');
const next_button_el = document.getElementById('next');
const previous_button_el = document.getElementById('previous');
const cats = [];

async function nextCatImage() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const image = await response.json();
    const image_url = await image[0].url
    cats.push(cat_image_el.src);
    cat_image_el.src = image_url;
    if (cats.length > 1) {
        previous_button_el.disabled = false;
    }
    return image_url;
}

async function lastCatImage() {
    if (cats.length > 1) {
        cat_image_el.src = cats.pop();
        if (cats.length <= 1) {
            previous_button_el.disabled = true;
        }
    }

}

nextCatImage();


next_button_el.addEventListener('click', nextCatImage);
previous_button_el.addEventListener('click', lastCatImage);

document.addEventListener('keydown', function(e) {
    key = e.key
    if (key === 'ArrowLeft') {
        lastCatImage();
    } else if (key === 'ArrowRight') {
        nextCatImage();
    }

});



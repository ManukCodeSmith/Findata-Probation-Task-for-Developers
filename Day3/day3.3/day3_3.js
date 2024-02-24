const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const photo = document.querySelectorAll('img');

let currentIndex = 0;

function showImage(index) {
    photo.forEach(image => {
        image.style.display = 'none';
    });
    photo[index].style.display = 'block';
}

function nextImage() {
    currentIndex++;
    if (currentIndex >= photo.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = photo.length - 1; 
    }
    showImage(currentIndex);
}

b1.addEventListener('click', prevImage);
b2.addEventListener('click', nextImage);

showImage(currentIndex);

let picturesArray = [
    { src: "./assets/img/fjord.jpg", alt: "Vergletscherte Bucht mit Eisschollen vor schneebedeckten Bergen" },
    { src: "./assets/img/city.jpg", alt: "Nächtliche Straße einer Großstadt mit Neonreklamen im Regen" },
    { src: "./assets/img/clouds.png", alt: "Dunkle Gewitterwolken am Himmel" },
    { src: "./assets/img/bird.jpg", alt: "Blaumeise auf einem kahlen Ast" },
    { src: "./assets/img/hurricane.jpg", alt: "Wirbelsturm aus dem Weltall über der Erdatmosphäre" },
    { src: "./assets/img/lake.jpg", alt: "Bergsee mit Spiegelung schneebedeckter Gipfel" },
    { src: "./assets/img/duck.jpg", alt: "Tafelente breitet ihre Flügel auf dem Wasser aus" },
    { src: "./assets/img/night.jpg", alt: "Person auf einem Felsen am Ufer blickt auf ein nächtliches Meer" },
    { src: "./assets/img/bird_two.jpg", alt: "Kleiner weißer Vogel auf moosbewachsenen Steinen" },
    { src: "./assets/img/snowleopard.jpg", alt: "Junger Schneeleopard auf einem Felsen" },
    { src: "./assets/img/mountains.jpg", alt: "Verschneite Berggipfel unter blauem Himmel" },
    { src: "./assets/img/tree.jpg", alt: "Mit Raureif bedeckter Baum in verschneiter Landschaft" }
];

const dialogRef = document.getElementById('photoOverlay');


function init() {
    renderPhotoCards();
    dialogRef.addEventListener('close', removeNoScroll);
    closeOverlay();
}

function renderPhotoCards() {
    const pictureGalleryRef = document.getElementById('pictureGallery');
    pictureGalleryRef.innerHTML = "";
    for (let index = 0; index < picturesArray.length; index++) {
        let picture = picturesArray[index];
        pictureGalleryRef.innerHTML += getPhotoCardTemplate(picture, index);
    }
}

function openPhotoOverlay(index) {
    dialogRef.showModal();
    addNoScroll();
    renderPhotoOverlay(index);
}

function renderPhotoOverlay(index) {
    dialogRef.innerHTML = "";
    dialogRef.innerHTML += getPhotoOverlayTemplate(index);
}

function showNextPhoto(index) {
    index++;
    if (index == picturesArray.length) {
        index = 0;
    }
    renderPhotoOverlay(index);
}

function showPreviousPhoto(index) {
    index--;
    if (index < 0) {
        index = picturesArray.length - 1;
    }
    renderPhotoOverlay(index);
}

function closePhotoOverlay() {
    dialogRef.close();
}

function addNoScroll() {
    document.body.classList.add('no-scroll');
}

function removeNoScroll() {
    document.body.classList.remove('no-scroll');
}

function closeOverlay() {
    dialogRef.addEventListener('click', (event) => {
        if (event.target === dialogRef) {
            closePhotoOverlay();
        }
    });
}
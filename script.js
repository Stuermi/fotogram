let picturesArray = [
    { src: "./assets/img/fjord.jpg", alt: "Vergletscherte Bucht mit Eisschollen vor schneebedeckten Bergen", title: "Gletscherbucht in Alaska" },
    { src: "./assets/img/city.jpg", alt: "Nächtliche Straße einer Großstadt mit Neonreklamen im Regen", title: "Neonlichter im Regen" },
    { src: "./assets/img/clouds.png", alt: "Dunkle Gewitterwolken am Himmel", title: "Aufziehendes Gewitter" },
    { src: "./assets/img/bird.jpg", alt: "Blaumeise auf einem kahlen Ast", title: "Blaumeise im Geäst"},
    { src: "./assets/img/hurricane.jpg", alt: "Wirbelsturm aus dem Weltall über der Erdatmosphäre", title: "Wirbelsturm von oben" },
    { src: "./assets/img/lake.jpg", alt: "Bergsee mit Spiegelung schneebedeckter Gipfel", title: "Bergsee im Spiegel" },
    { src: "./assets/img/duck.jpg", alt: "Tafelente breitet ihre Flügel auf dem Wasser aus", title: "Tafelente im Aufbruch" },
    { src: "./assets/img/night.jpg", alt: "Person auf einem Felsen am Ufer blickt auf ein nächtliches Meer", title: "Allein am Meer" },
    { src: "./assets/img/bird_two.jpg", alt: "Kleiner weißer Vogel auf moosbewachsenen Steinen", title: "Vogel auf Stein" },
    { src: "./assets/img/snowleopard.jpg", alt: "Junger Schneeleopard auf einem Felsen", title: "Junger Schneeleopard" },
    { src: "./assets/img/mountains.jpg", alt: "Verschneite Berggipfel unter blauem Himmel", title: "Gipfel über den Wolken" },
    { src: "./assets/img/tree.jpg", alt: "Mit Raureif bedeckter Baum in verschneiter Landschaft", title: "Raureif am Morgen" }
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
    let picture = picturesArray[index];
    dialogRef.innerHTML = getPhotoOverlayTemplate(picture, index);
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
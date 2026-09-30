function getPhotoCardTemplate(picture, index) {
    return `
            <li>
                <button class="photo-card" onclick="openPhotoOverlay(${index})">
                    <img ${index >=4 ? 'loading="lazy"' : ''} class="photo-card__img" src="${picture.src}" alt="${picture.alt}">
                </button>
            </li>
            `;
}

function getPhotoOverlayTemplate(picture, index) {
    return `
            <header>
                <h2 class="photo-overlay__title">${picture.title}</h2>
                <button class="photo-overlay__close-btn" onclick="closePhotoOverlay()" aria-label="Schließen">
                    <img src="./assets/icons/close.svg" alt="">
                </button>
            </header>
            <img class="photo-overlay__img" src="${picture.src}" alt="${picture.alt}">
            <footer>
                <button onclick="showPreviousPhoto(${index})" class="photo-overlay__nav-btn" aria-label="Vorheriges Foto">
                    <img src="./assets/icons/prev.svg" alt="">
                </button>
                <p>${index + 1}/${picturesArray.length}</p>
                <button onclick="showNextPhoto(${index})" class="photo-overlay__nav-btn" aria-label="Nächstes Foto">
                    <img src="./assets/icons/next.svg" alt="">
                </button>
            </footer>
    `;
}
//Get all needed elements from the DOM
const hero = document.querySelector(".hero");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const title = document.querySelector(".title span");
const paragraph1 = document.querySelector(".title p");
const subTitle = document.querySelector(".card h2");
const paragraph2 = document.querySelector(".card p");
const thumbnails = document.querySelectorAll(".card img");

// Data for all themes
const themes = ["theme-1", "theme-2", "theme-3"];

const titles = [
    "Awareness", "Elegance", "Class",
];

const paragraph1Text = [
    "Step into a realm where fashion is more than clothing",
    "Welcome to the world where grace meets style",
    "We believe in future where fashion uplifts and inspires",
];

const subtitleText = [
    "Feminine Fashion", "Visionary Vogue","Redefining Beauty",
];

const paragraph2Text = [
    "Our platform celebrates the diverse beauty of female models",
    "Join us on our journey to break boundaries of beauty",
    "Step into a realm where fashion is more than clothing",
];

const thumbnailImage = [
    "thumbnail1", "thumbnail2", "thumbnail3",
];

// Variable to track the current theme ID
let themeId = 0;

// Function that changes the theme
function changeTheme(id) {
    // Remove current theme class from the hero section
    hero.classList.remove(hero.classList[1]);
    // Update theme using an ID we will provide later when the function is called
    hero.classList.add(themes[id]);
    // Update title
    title.innerHTML = titles[id];
    // Update paragraphs
    paragraph1.innerHTML = paragraph1Text[id];
    paragraph2.innerHTML = paragraph2Text[id];
    // Update sub title
    subTitle.innerHTML = subtitleText[id];
    // Update thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.src = `./img/${thumbnailImage[id]}.jpg`;
    });
    // GSAP Animations
    const tl = gsap.timeline();
    tl.from(".title h1", {opacity: 0, y: 100});
    tl.from(".title p", {opacity: 0, y: -100});
    tl.from(".card-desktop", {opacity: 0, x: -100});
}

// Add click event to left arrow
arrowLeft.addEventListener("click", () => {
    // Decrement theme ID
    themeId--;
    // If themeID goes below the first theme
    if(themeId < 0) {
        // Set themeId to the last theme
        themeId = themes.length - 1;
    }
    // Run tht changeTheme function and add the themeId varaible as the theme ID
    changeTheme(themeId);
});

// Add click event to right arrow
arrowRight.addEventListener("click", () => {
    // Decrement theme ID
    themeId++;
    // If themeID goes over the last theme
    if(themeId > themes.length - 1) {
        // Set themeId to the last theme
        themeId = 0;
    }
    // Run tht changeTheme function and add the themeId varaible as the theme ID
    changeTheme(themeId);
});
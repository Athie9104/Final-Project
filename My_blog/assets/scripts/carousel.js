// Get HTML containers to add elements to
let slidesContainer = document.getElementById("carousel-container");
let bulletsContainer = document.getElementById("carousel-bullets");

// Content for slides
let slideContent = [
  {
    title: "1",
    subtitle: "1",
    description:
      "1",
    image: "assets/images/beauty-of-EC.jpeg"
  },
  {
    title: "ipsum",
    subtitle: "Lorem",
    description:
      "lorem ipsum",
    image: "assets/images/umngqungqo.jpg"
  },
  {
    title: "3",
    subtitle: "3",
    description:
      "3",
    image: "assets/images/lobola.jpeg"
  },
  {
    title: "4 ",
    subtitle: "4",
    description:
      " 4",
      image: "assets/images/iduli.jpeg"
  },

  {
    title: "5 ",
    subtitle: "5",
    description:
      "5",
    image: "assets/images/goat-slaughter.jpeg"
  },

  {
    title: " 6",
    subtitle: "6",
    description:
      "6",
    image: "assets/images/xhosa-cuisine.jpeg"
  },
];


let totalSlides = slideContent.length;

// Function to create bullets
function createBullet(index) {
    // Create button to be clicked on and add attributes
    let bulletButton = document.createElement("button");
    bulletButton.classList.add("carousel-bullet");
    bulletButton.setAttribute("onclick", `bulletSlider(${index})`);
  
    // Create bullet with active classes
    let bullet = document.createElement("i");
    bullet.classList.add("fas");
    bullet.classList.add("fa-circle");
    if (index == 0) bullet.classList.add("active");
  
    // Add bullet to bulletButton
    bulletButton.appendChild(bullet);
  
    // Add bulletButton to buttonContainer
    bulletsContainer.appendChild(bulletButton);
  }
  
  // Function to create slides
  function createSlide(slide, index) {
    // Create slide container
    let slideWrapper = document.createElement("div");
    slideWrapper.classList.add("carousel-slide");
    if (index == 0) slideWrapper.classList.add("active");
  
    // Create content for slide
    let slideImage = document.createElement("img");
    slideImage.src = slide.image;
  
    let slideHeading = document.createElement("h2");
    slideHeading.innerHTML = slide.title;
  
    let slideSubtitle = document.createElement("h4");
    slideSubtitle.innerHTML = slide.subtitle;
  
    let slideDescription = document.createElement("p");
    slideDescription.innerHTML = slide.description;
  
    // Build slide
    slideWrapper.appendChild(slideImage);
    slideWrapper.appendChild(slideHeading);
    slideWrapper.appendChild(slideSubtitle);
    slideWrapper.appendChild(slideDescription);
  
    // Add slide to container
    slidesContainer.appendChild(slideWrapper);
  }
  
  // Initialize Carousel
  slideContent.forEach((slide, index) => {
    createBullet(index);
    createSlide(slide, index);
  });
  
  let bulletSlider = (index) => {
    let bullets = document.getElementsByClassName("fa-circle");
    for (let i = 0; i < totalSlides; i++) {
      if (index === i) {
        bullets[i].classList.add("active");
        slides[i].classList.add("active");
      } else {
        bullets[i].classList.remove("active");
        slides[i].classList.remove("active");
      }
    }
  };
  
  let changeSlide = (toSlide) => {
    let bullets = document.getElementsByClassName("fa-circle");
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < totalSlides; i++) {
      if (slides[i].classList.contains("active")) {
        let endOfArray = i + toSlide > totalSlides - 1 ? true : false;
        let beginningOfArray = i + toSlide < 0 ? true : false;
        slides[i].classList.remove("active");
        bullets[i].classList.remove("active");
        if (endOfArray) {
          slides[0].classList.add("active");
          bullets[0].classList.add("active");
        } else if (beginningOfArray) {
          bullets[totalSlides - 1].classList.add("active");
          slides[totalSlides - 1].classList.add("active");
        } else {
          bullets[i + toSlide].classList.add("active");
          slides[i + toSlide].classList.add("active");
        }
        break;
      }
    }
  };
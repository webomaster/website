// Card data to be fetched from an API or any data source
const cardData = [
  {
    name: "Tejas Chaudhari",
    profession: "Community Manager",
    text: "Leading the Webo Master Community to new heights of collaboration and growth.",
    image: "./Images/1.jpg",
    linkedin: "https://www.linkedin.com/in/tejas-chaudhari-cse/",
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
  {
    name: "Ruchita Patil",
    profession: "Core team member",
    text: "Dedicated and passionate about driving innovation and collaboration within Webo Master",
    image: "./Images/2.png",
    linkedin: "https://www.linkedin.com/in/ruchspatil/",
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
  {
    name: "Anvesha Dixit",
    profession: "Core team member",
    text: "Bringing expertise and leadership to shape the future of Webo Master's technical initiatives.",
    image: "./Images/3.jpg",
    linkedin: "https://www.linkedin.com/in/anvesha-dixit-44338a218/",
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
  {
    name: "Abhi Mittal",
    profession: "Tech team member",
    text: "Powering Webo Master's technical progress through cutting-edge solutions and coding expertise.",
    image: "./Images/4.jpeg",
    linkedin: "https://www.linkedin.com/in/abhimittal08/",
    twitter: "https://twitter.com/",
    github: "https://github.com/abhimittal17",
  },
  {
    name: "Yasir Shaikh",
    profession: "Design Lead",
    text: "Transforming Webo Master's vision into visually stunning experiences that captivate and inspire.",
    image: "https://tinypic.host/images/2022/12/19/img_avatar.png",
    linkedin: "https://www.linkedin.com/in/yasir-shaikh-0571a7208/",
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
  {
    name: "Hema Hariharan Samson",
    profession: "Social Media Manager",
    text: "Creating a digital buzz and connecting the Webo Master community through strategic online presence.",
    image: "https://tinypic.host/images/2022/12/19/img_avatar.png",
    linkedin: "https://www.linkedin.com/in/hemahariharansamson/",
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
  {
    name: "Ritesh Pandey",
    profession: "Social Media Manager",
    text: "Crafting compelling narratives and amplifying the impact of Webo Master across social channels.",
    image: "./Images/7.jpg",
    linkedin: "https://www.linkedin.com/in/ritesh-pandey-384b93225/",
    twitter: "https://twitter.com/",
    github: "https://github.com/",
  },
  // Add more card data objects as needed
];

function generateCards() {
  const cardContainer = document.querySelector(".swiper-wrapper.content");

  cardData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("swiper-slide", "card", "col-md-6", "col-lg-4");

    const cardContent = `
      <div class="card-content">
        <div class="image">
          <img src="${card.image}" alt="" class="card-img" />
        </div>
        <div class="name-profession">
          <span class="name">${card.name}</span>
          <span class="profession">${card.profession}</span>
        </div>
        <div class="text">${card.text}</div>
        <div class="media-icons">
          <a href="${card.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="${card.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="${card.github}" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>`;
    cardElement.innerHTML = cardContent;
    cardContainer.appendChild(cardElement);
  });
}

// Initialize Swiper after the cards are generated
function initializeSwiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200:{
        slidesPerView:3
      },
      1440:{
        slidesPerView:4
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// Call the functions to generate cards and initialize Swiper
generateCards();
initializeSwiper();

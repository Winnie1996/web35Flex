const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//Adding the NAVIGATION

let navLinks = document.querySelectorAll("nav a");
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

//Add Circle Img

let circleImg = document.getElementById("cta-img");
circleImg.setAttribute("src", siteContent["cta"]["img-src"]);

//Add H1 Text
let domText = document.querySelector(".cta-text h1");
// domText.textContent = siteContent["cta"]["h1"];
domText.innerHTML = "DOM <br> Is <br> Awesome";

//Add Button Text
let buttonText = document.querySelector(".cta-text button");
buttonText.textContent = siteContent["cta"]["button"];

//Top Content
let headerNames = document.querySelectorAll(".top-content h4");
headerNames[0].textContent = siteContent["main-content"]["features-h4"];
headerNames[1].textContent = siteContent["main-content"]["about-h4"];

//Add Paragraphs
let topParagraph = document.querySelectorAll(".top-content p");
topParagraph[0].textContent = siteContent["main-content"]["features-content"];
topParagraph[1].textContent = siteContent["main-content"]["about-content"];

//Add Rectangle Img
let rectangleImg = document.querySelector(".middle-img");
rectangleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Bottom Content
let bottomHeaderNames = document.querySelectorAll(".bottom-content h4");
bottomHeaderNames[0].textContent = siteContent["main-content"]["services-h4"];
bottomHeaderNames[1].textContent = siteContent["main-content"]["product-h4"];
bottomHeaderNames[2].textContent = siteContent["main-content"]["vision-h4"];

//Bottom Paragraphs
let bottomParagraph = document.querySelectorAll(".bottom-content p");
bottomParagraph[0].textContent =
  siteContent["main-content"]["services-content"];
bottomParagraph[1].textContent = siteContent["main-content"]["product-content"];
bottomParagraph[2].textContent = siteContent["main-content"]["vision-content"];

//Add Contacts
let contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

//Add Contact Info
let contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];

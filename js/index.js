const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navLinks = document.querySelectorAll("header nav a");

//nav links

//this is an alternative that negats the need for individual indexes
navLinks.forEach(
  (currentValue, i) =>
    (currentValue.textContent = Object.values(siteContent.nav)[i])
);

// navLinks[0].textContent = siteContent.nav["nav-item-1"];
// navLinks[1].textContent = siteContent.nav["nav-item-2"];
// navLinks[2].textContent = siteContent.nav["nav-item-3"];
// navLinks[3].textContent = siteContent.nav["nav-item-4"];
// navLinks[4].textContent = siteContent.nav["nav-item-5"];
// navLinks[5].textContent = siteContent.nav["nav-item-6"];

//change the colors to green
navLinks.forEach(colorGreen => {
  colorGreen.style.color = "#7CFC00";
});
//add nav links

let parentNode = document.querySelector("nav");

let newA = document.createElement("a");
newA.href = "#";
newA.style.color = "#7CFC00";
newA.textContent = "Internal Screaming";

let newerA = document.createElement("a");
newerA.href = "#";
newerA.style.color = "#7CFC00";
newerA.textContent = "React";

parentNode.appendChild(newA);
parentNode.prepend(newerA);

//Content for CTA
document.querySelector("h1").textContent = siteContent.cta["h1"];
document.querySelector("button").textContent = siteContent.cta["button"];

let circleImg = document.getElementById("cta-img");
circleImg.setAttribute("src", siteContent["cta"]["img-src"]);

let headingList = document.querySelectorAll("h4");

//headings for main conteny

headingList[0].textContent = siteContent["main-content"]["features-h4"];
headingList[1].textContent = siteContent["main-content"]["about-h4"];
headingList[2].textContent = siteContent["main-content"]["services-h4"];
headingList[3].textContent = siteContent["main-content"]["product-h4"];
headingList[4].textContent = siteContent["main-content"]["vision-h4"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let paragraphList = document.querySelectorAll("p");

//Paragraphs for main content

paragraphList[0].textContent = siteContent["main-content"]["features-content"];
paragraphList[1].textContent = siteContent["main-content"]["about-content"];
paragraphList[2].textContent = siteContent["main-content"]["services-content"];
paragraphList[3].textContent = siteContent["main-content"]["product-content"];
paragraphList[4].textContent = siteContent["main-content"]["vision-content"];

headingList[5].textContent = siteContent["contact"]["contact-h4"];

//Contact
paragraphList[5].textContent = siteContent["contact"]["address"];
paragraphList[6].textContent = siteContent["contact"]["phone"];
paragraphList[7].textContent = siteContent["contact"]["email"];

//Footer
paragraphList[8].textContent = siteContent["footer"]["copywright"];

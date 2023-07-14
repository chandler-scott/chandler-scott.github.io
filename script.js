// JavaScript code to generate the header, navigation, and footer
// refer to comp_chem.html for the minimal code needed

// Create the header element
function createHeader() {
  var header = document.createElement("header");

  // Create the top div, and fill it
  var titleIntroDiv = document.createElement("div");
  titleIntroDiv.classList.add("title-intro");

  var h1 = document.createElement("h1");
  h1.textContent = "Frank Hagelberg";

  var h3 = document.createElement("h3");
  h3.textContent = "Department of Physics and Astronomy,\n" +
                   "East Tennessee State University,\n" +
                   "Research in Computational Materials Science";

  titleIntroDiv.appendChild(h1);
  titleIntroDiv.appendChild(h3);

  header.appendChild(titleIntroDiv);

  return header;
}

// Create the navigation element
function createNavigation() {
  var nav = document.createElement("nav");
  nav.classList.add("topnav");

  // Create the anchor elements for navigation
  var aboutLink = createNavLink("About", "about.html", "internal-nav");
  var researchLink = createNavLink("Research", "research.html", "internal-nav");
  var publicationsLink = createNavLink("Publications", "publications.html", "internal-nav");
  var coursesLink = createNavLink("Courses", "courses.html", "internal-nav");
  var cardsLink = createNavLink("CaRDS", "cards.html", "internal-nav");

  // add first-item stlying to first nav
  aboutLink.classList.add('first-item')
  
  // Append the anchor elements to the nav element
  nav.appendChild(aboutLink);
  nav.appendChild(researchLink);
  nav.appendChild(publicationsLink);
  nav.appendChild(coursesLink);
  nav.appendChild(cardsLink);

  return nav;
}

// Helper function to create a navigation link
function createNavLink(displayText, url, className) {
  var link = document.createElement("a");
  link.textContent = displayText;
  link.href = url;

  if (className) {
    link.classList.add(className);
  }

  return link;
}

// Create the footer element
function createFooter() {
  var footer = document.createElement("footer");

  // Create the footer paragraph
  var footerParagraph = document.createElement("p");
  footerParagraph.innerHTML = "Frank Hagelberg<br/>" +
                              "Department of Physics and Astronomy,<br/>" +
                              "East Tennessee State University,<br/>" +
                              "Research in Computational Materials Science";

  // Append the footer paragraph to the footer element
  footer.appendChild(footerParagraph);

  return footer;
}

// Check if the current page is "comp_chem.html" and redirect to "about.html"
if (window.location.pathname.includes("comp_chem.html")) {
  window.location.href = "about.html";
}

// Get the body element
var bodyElement = document.body;

// Generate the header, navigation, and footer
var header = createHeader();
var navigation = createNavigation();
var footer = createFooter();

// Append the generated elements to the body element
bodyElement.appendChild(header);
bodyElement.appendChild(navigation);

// Create the main element
var mainElement = document.createElement("main");

// Append the main element to the body
// and place <article> inside <main>
bodyElement.appendChild(mainElement);
var articleElement = document.querySelector("article");
mainElement.appendChild(articleElement);

// Append the footer element to the body
bodyElement.appendChild(footer);
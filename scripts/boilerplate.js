// JavaScript code to generate the header, navigation, and footer
// refer to comp_chem.html for the minimal code needed

// Create the header element
export function createHeader() {
  var header = document.createElement("header");

  // Create the top div, and fill it
  var titleIntroDiv = document.createElement("div");
  titleIntroDiv.classList.add("title-intro");

  var h1 = document.createElement("h1");
  h1.textContent = "Chandler Scott";

  var h3 = document.createElement("h3");
  h3.textContent = "Graduate Student,\n" +
                   "East Tennessee State University,\n" +
                   "Applied Computer Science";

  titleIntroDiv.appendChild(h1);
  titleIntroDiv.appendChild(h3);

  header.appendChild(titleIntroDiv);

  return header;
}

// Create the navigation element
export function createNavigation() {
  var nav = document.createElement("nav");
  nav.classList.add("topnav");

  // Create the anchor elements for navigation
  var aboutLink = createNavLink("About", "about.html", "internal-nav");
  var researchLink = createNavLink("Research", "research.html", "internal-nav");
  var blogsLink = createNavLink("Blogs", "blogs.html", "internal-nav");

  // add first-item stlying to first nav
  aboutLink.classList.add('first-item')
  
  // Append the anchor elements to the nav element
  nav.appendChild(aboutLink);
  nav.appendChild(researchLink);
  nav.appendChild(blogsLink);

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
export function createFooter() {
  var footer = document.createElement("footer");

  // Create the footer paragraph
  var footerParagraph = document.createElement("p");
  footerParagraph.innerHTML = "©Chandler Scott Development";

  // Append the footer paragraph to the footer element
  footer.appendChild(footerParagraph);

  return footer;
}

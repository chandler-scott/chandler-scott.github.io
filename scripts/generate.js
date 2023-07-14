import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { createNavigation } from './components/topnav.js';

// Check if the current page is "index.html" and redirect to "about.html"
if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    window.location.href = "pages/about.html";
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
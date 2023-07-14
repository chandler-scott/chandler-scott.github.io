
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
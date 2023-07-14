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
  
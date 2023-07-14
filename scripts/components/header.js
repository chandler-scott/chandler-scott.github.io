// Create the header element
export function createHeader() {
    var header = document.createElement("header");
  
    // Create the top div, and fill it
    var titleIntroDiv = document.createElement("div");
    titleIntroDiv.classList.add("title-intro");
  
    var h1 = document.createElement("h1");
    h1.textContent = "Chandler Scott";
  
    var h3 = document.createElement("h3");
    h3.textContent = "Graduate Student,<br/>" +
                     "East Tennessee State University,<br/>" +
                     "Applied Computer Science";
  
    titleIntroDiv.appendChild(h1);
    titleIntroDiv.appendChild(h3);
  
    header.appendChild(titleIntroDiv);
  
    return header;
  }
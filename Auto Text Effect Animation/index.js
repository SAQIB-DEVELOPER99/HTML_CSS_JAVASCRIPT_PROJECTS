// Gets container element for Animation
const containerEl = document.querySelector(".container");

// Array of different Career options
const careers = ["WEB DEVELOPER", " FRONTEND DEVELOPER","INSTRUCTOR","ML ENGINEER"];

// Keeps the track of the current career
let careerIndex = 0;

// Keeps track of the current character
let characterIndex = 0; 


updateText();

// Function for Animatio
function updateText() {

  // Increase the character index 
  characterIndex++;

  // Update the content of the container with the animated text
  containerEl.innerHTML = `
    <h1>I AM  ${careers[careerIndex].slice(0, 1) === "I" ? "AN" : "A"} ${careers[
    careerIndex
  ].slice(0, characterIndex)}</h1>
  `;

  // Check if the entire career has been displayed
  if (characterIndex === careers[careerIndex].length) {
    // Change the text color to a random color after typing the career
    containerEl.style.color = getRandomColor();

    // Move to the next career and reset the character index
    careerIndex++;
    characterIndex = 0;
  }

  // If all careers are displayed, loop back to the first career
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  // Call updateText again after 400 milliseconds for the typing effect
  setTimeout(updateText, 400);
}

// Function to generate a random color
function getRandomColor() {
  // Define possible characters for a hexadecimal color
  const letters = "0123456789ABCDEF";
  let color = "#"; // Start with "#" for a valid hex color code
  // Generate a 6-character hex color
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color; // Return the generated random color
}

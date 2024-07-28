// Define the text to be typed
var text = "Hello, It's Me Kunal";
var paragraphText = "I'm A Web Developer & FullStack Developer. I Will Make Your Project Beautiful And Attractive.";

// Get the elements for text and paragraph
var textElement = document.getElementById('typing');
var paragraphElement = document.getElementById('typing-para');

// Initialize index to 0
var index = 0;

// Define function to type the text
function typeText() {
    // Check if index is less than text length
    if (index < text.length) {
        // Add next character to text container
        textElement.textContent += text.charAt(index);
        // Increment index
        index++;
        // Call typeText function after a delay
        setTimeout(typeText, 100); // Adjust speed by changing delay value (milliseconds)
    }
}

// Call typeText function to start typing animation
typeText();

// Initialize paragraph index to 0
var paraIndex = 0;

// Define function to type the paragraph text
function typeParagraph() {
    // Check if index is less than text length
    if (paraIndex < paragraphText.length) {
        // Add next character to text container
        paragraphElement.textContent += paragraphText.charAt(paraIndex);
        // Increment index
        paraIndex++;
        // Call typeText function after a delay
        setTimeout(typeParagraph, 50); // Adjust speed by changing delay value (milliseconds)
    }
}

// Call typeParagraph function to start typing animation for the paragraph
setTimeout(typeParagraph, 2000); // Delay to start paragraph animation after heading
// Add event listener to the Skills tab link
document.querySelector('.tab-link[data-tab="skills"]').addEventListener('click', function () {
    document.getElementById('skills-content').style.display = 'block'; // Show the Skills content
});
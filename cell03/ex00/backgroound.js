function changeColor() {
    // 1. Generate a random color
    // Math.random() gives a number between 0 and 1.
    // We multiply by 16777215 (total hex colors) and convert to Hex string.
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // 2. Apply it to the body
    document.body.style.backgroundColor = randomColor;
    
    // Optional: Log it to the console so you can see it working
    console.log("New Color: " + randomColor);
}
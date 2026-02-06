// $(document).ready() ensures the code waits until the page loads
$(document).ready(function() {
    
    // When class 'my-btn' is clicked...
    $('.my-btn').click(function() {
        
        // Generate random color
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Apply to body using jQuery's .css() method
        $('body').css('background-color', randomColor);
        
        console.log("New Color: " + randomColor);
    });

});
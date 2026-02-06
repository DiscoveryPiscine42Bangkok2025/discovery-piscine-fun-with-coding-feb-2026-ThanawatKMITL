document.addEventListener("DOMContentLoaded", function() {
    console.log("Rhodes Island System: Online");

    // Smooth Scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
document.addEventListener("mousemove", parallax);

    function parallax(e) {
        document.querySelectorAll(".moving-shape").forEach(function(move){
            

            var moving_value = move.getAttribute("data-speed");
            
            var x = (e.clientX * moving_value) / 100;
            var y = (e.clientY * moving_value) / 100;

            move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        });
    }
});
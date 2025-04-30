// Ensure the DOM is fully loaded
$(document).ready(function() {
    $('section').click(function() {
        $(".close").slideToggle("slow");
    });
});
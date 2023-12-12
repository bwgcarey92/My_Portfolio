document.addEventListener("DOMContentLoaded", function () {
    // Get all the navigation links
    var navLinks = document.querySelectorAll('#navlist a');

    // Add click event listener to each navigation link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            // Check if the link is an internal link (starts with "#")
            if (this.getAttribute('href').charAt(0) === '#') {
                e.preventDefault(); // Prevent the default behavior of the anchor tag

                // Get the target section id from the href attribute
                var targetId = this.getAttribute('href').substring(1);

                // Scroll smoothly to the target section
                document.getElementById(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // If it's an external link, let it navigate normally
        });
    });
});


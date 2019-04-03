// scroll down arrow
    function scrollWin(x, y) {
        window.scrollBy(x, y);
    }

    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 56) {
                $(".navbar").addClass("bg-secondary");
            }
            else {
                $(".navbar").removeClass("bg-secondary");
            }
        });
        // If Mobile, add background color when toggler is clicked
        $(".navbar-toggler").click(function() {
            if (!$(".navbar-collapse").hasClass("show")) {
                $(".navbar").addClass("bg-secondary");
            }
            else {
                if ($(window).scrollTop() < 56) {
                    $(".navbar").removeClass("bg-secondary");
                }
                else {}
            }
        });
        // document ready
    });
    
$(window).load(function() {
    new Waypoint({
        element: document.getElementById("page-nav"),
        offset: '100%',
        handler: function(direction) {
            if (direction == "down") {
                var $next_page = $("#page-nav .next-page");

                if ($next_page.length > 0) {
                    $("#loading-more").show();

                    $.ajax({
                        url: $next_page.attr("href"),
                        type: 'GET',
                        data: {
                            ajax: true
                        },
                        success: function(data) {
                            // HIDE LOADING
                            $("#loading-more").hide();

                            // DATA
                            var lis = $(data).find("#post-list > .post");
                            $("#post-list").append(lis);
                            Waypoint.refreshAll();

                            // PAGES
                            var $new_next_page = $(data).find("#page-nav .next-page");
                            if ($new_next_page.length == 0) {
                                $next_page.remove();
                            } else {
                                $next_page.attr("href", $new_next_page.attr("href"));
                            }
                        },
                        error: function() {
                            // HIDE LOADING
                            $("#loading-more").hide();
                        }
                    });
                }
            }
        },
    });
});
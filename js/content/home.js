// ARROW HEADER
$("#arrow-down-header").click(function() {
    $("html,body").animate({
        scrollTop: $("#main-header").height() - 66
    });

    return false;
});

// TOOLTIP CAROUSEL
$("#how-carousel .carousel-indicators > li > a").tooltip({
    placement: "right"
});

// WAIT POINTS
new Waypoint({
    element: document.getElementById("what-section"),
    offset: function() {
        return $("#top-navbar").height();
    },
    handler: function(direction) {
        if (direction == "up") {
            $("#top-navbar").removeClass("little");
        } else {
            $("#top-navbar").addClass("little");
        }
    },
});

new Waypoint({
    element: document.getElementById("what-section"),
    offset: function() {
        return $(window).height() / 2;
    },
    handler: function(direction) {
        if (direction == "up") {
            $("#main-header").addClass("active");
            $("#what-section").removeClass("active");
        } else {
            $("#main-header").removeClass("active");
            $("#what-section").addClass("active");
        }
    },
});

new Waypoint({
    element: document.getElementById("how-section"),
    handler: function(direction) {
        if (direction == "up") {
            $("#what-section").addClass("active");
            $("#how-section").removeClass("active");
        } else {
            $("#what-section").removeClass("active");
            $("#how-section").addClass("active");
        }
    },
});

new Waypoint({
    element: document.getElementById("why-section-content"),
    offset: function() {
        return 2 * $(window).height() / 3;
    },
    handler: function(direction) {
        if (direction == "up") {
            $("#how-section").addClass("active");
            $("#why-section").removeClass("active");
        } else {
            $("#how-section").removeClass("active");
            $("#why-section").addClass("active");
        }
    },
});

var why2Waypoint = new Waypoint({
    element: document.getElementById("why-section-content"),
    offset: function() {
        return 116;
    },
    handler: function(direction) {
        if (direction == "up") {
            $("#mac").removeClass("fixed");
            $("#mac-background").css("top", "0px");
        } else {
            $("#mac").addClass("fixed");
        }
    },
});

var why3Waypoint = new Waypoint({
    element: document.getElementById("why-section-content"),
    offset: function() {
        return -($("#why-section-content").height() - $("#mac").height() - 36);
    },
    handler: function(direction) {
        if (direction == "up") {
            $("#mac").addClass("fixed");
            $("#mac").removeClass("bottom");
        } else {
            $("#mac").removeClass("fixed");
            $("#mac").addClass("bottom");
            $("#mac-background").css("top", -(this.triggerPoint - why2Waypoint.triggerPoint) + "px");
        }
    },
});

$(window).load(function() {
    $("#mac-background .background").css("height", ($("#why-section-content").height() / 3) + "px");
    $("#main-header").addClass("active");

    // PLAY VIDEO
    if (!isMobile.any()) {
        document.getElementById("typing-video").play();
    }
});

$(window).scroll(function(event) {
    var s = $(document).scrollTop();

    // FIX MAC
    if ($("#mac").hasClass("fixed")) {
        $("#mac-background").css("top", -(s - why2Waypoint.triggerPoint) + "px");
    }
});

$(window).resize(function() {
    $("#mac-background .background").css("height", ($("#why-section-content").height() / 3) + "px");
});
$(window).load(function() {
	// SHOW CURRICULUM DATA
	
	new Waypoint({
	    element: document.getElementById("about-curriculum-section"),
	    offset: '50%',
	    handler: function(direction) {
	        if(direction == "down") {
	        	$("#about-curriculum-section").addClass("active");
	        } else {
	        	$("#about-curriculum-section").removeClass("active");
	        }
	    }
	});

	// CLOSE CURRICULUM DATA
	new Waypoint({
	    element: document.getElementById("about-contact-section"),
	    offset: '50%',
	    handler: function(direction) {
	        if(direction == "down") {
	        	$("#about-curriculum-section").removeClass("active");

	        	$("#curriculum-btn").removeClass("active");
	        	$("#contact-btn").addClass("active");
	        	$("#menu-active").html($("#contact-btn > a").html());
	        } else {
	        	$("#about-curriculum-section").addClass("active");

	        	$("#curriculum-btn").addClass("active");
	        	$("#contact-btn").removeClass("active");
	        	$("#menu-active").html($("#curriculum-btn > a").html());
	        }
	    }
	});

	// SHOW CONTACT DATA
	new Waypoint({
	    element: document.getElementById("about-contact-section"),
	    offset: '75%',
	    handler: function(direction) {
	        if(direction == "down") {
	        	$("#about-contact-section").addClass("active");
	        } else {
	        	$("#about-contact-section").removeClass("active");
	        }
	    }
	});

	// CLOSE CONTACT DATA
	new Waypoint({
	    element: document.getElementById("about-partners-section"),
	    offset: '50%',
	    handler: function(direction) {
	        if(direction == "down") {
	        	$("#about-contact-section").removeClass("active");

	        	$("#partners-btn").addClass("active");
	        	$("#contact-btn").removeClass("active");
	        	$("#menu-active").html($("#partners-btn > a").html());
	        } else {
	        	$("#about-contact-section").addClass("active");

	        	$("#partners-btn").removeClass("active");
	        	$("#contact-btn").addClass("active");
	        	$("#menu-active").html($("#contact-btn > a").html());
	        }
	    }
	});

	// SHOW PARTNERS DATA
	new Waypoint({
	    element: document.getElementById("about-partners-section"),
	    offset: '75%',
	    handler: function(direction) {
	        if(direction == "down") {
	        	$("#about-partners-section").addClass("active");
	        } else {
	        	$("#about-partners-section").removeClass("active");
	        }
	    }
	});

	// ME1 FIXED
	new Waypoint({
	    element: document.querySelector("#about-curriculum-section .content-block"),
	    offset: 106,
	    handler: function(direction) {
	        if(direction == "down") {
	        	$("#me1-wrapper").addClass("fixed");
	        } else {
	        	$("#me1-wrapper").removeClass("fixed");
	        }
	    }
	});

	// ME1 BOTTOM
	new Waypoint({
	    element: document.getElementById("about-curriculum-section"),
	    offset: -($("#about-curriculum-section").height() - $("#me1-wrapper").height() - 108),
	    handler: function(direction) {
	        if(direction == "down") {
	        	$("#me1-wrapper").addClass("bottom");
	        	$("#me1-wrapper").removeClass("fixed");
	        } else {
	        	$("#me1-wrapper").removeClass("bottom");
	        	$("#me1-wrapper").addClass("fixed");
	        }
	    }
	});

	// ME3 FIXED
	new Waypoint({
	    element: document.querySelector("#about-partners-section .content-block"),
	    offset: 106,
	    handler: function(direction) {
	        if(direction == "down") {
	        	$("#me3-wrapper").addClass("fixed");
	        } else {
	        	$("#me3-wrapper").removeClass("fixed");
	        }
	    }
	});

	// ME3 BOTTOM
	new Waypoint({
	    element: document.getElementById("about-partners-section"),
	    offset: -($("#about-partners-section").height() - $("#me3-wrapper").height() - 108),
	    handler: function(direction) {
	        if(direction == "down") {
	        	$("#me3-wrapper").addClass("bottom");
	        	$("#me3-wrapper").removeClass("fixed");
	        } else {
	        	$("#me3-wrapper").removeClass("bottom");
	        	$("#me3-wrapper").addClass("fixed");
	        }
	    }
	});

	// GO TO
	$("#section-navbar > ul > li > a").click(function() {
		var $obj = $($(this).attr("href"));
		var offset = $obj.position().top - 100;

		$("html, body").animate({scrollTop: offset+"px"}, 1000);

		return false;
	});
});
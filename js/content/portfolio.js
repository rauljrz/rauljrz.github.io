// GRID
var msnry;

$(window).load(function() {
	msnry = new Masonry(document.getElementById('portfolio-grid'), {
		itemSelector: 'li.tile',
		transitionDuration : 0,
		columnWidth: ".tile-2"
	}).on('layoutComplete', function() {
		setTimeout(function() {
			Waypoint.refreshAll();
		}, 100);
	});

	doGridHover("#portfolio-grid");
	doGridClick("#portfolio-grid");

	new Waypoint({
	    element: document.getElementById("page-nav"),
	    offset: '100%',
	    handler: function(direction) {
	        if(direction == "down") {
	        	var $next_page = $("#page-nav .next-page");

	        	if($next_page.length > 0) {
	        		$("#loading-more").show();

		        	$.ajax({
		        		url: $next_page.attr("href"),
		        		type: 'GET',
		        		data: {ajax: true},
		        		success: function(data) {
		        			// HIDE LOADING
		        			$("#loading-more").hide();

		        			// DATA
		        			var lis = $(data).find("#portfolio-grid > li");
		        			$("#portfolio-grid").append(lis);
		        			doGridHover("#portfolio-grid");
							doGridClick("#portfolio-grid");
		        			msnry.appended(lis);

		        			// PAGES
		        			var $new_next_page = $(data).find("#page-nav .next-page");
		        			if($new_next_page.length == 0) {
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

doGridHover = function(container) {
	$(container).find(".tile-2, .tile-4").bind("mouseenter touchstart", function(event) {
		var work = $(this).data("work");

		$(container).find(".tile-1[data-work='"+work+"'], .tile-3[data-work='"+work+"']").addClass("active");
	});

	$(container).find(".tile-2, .tile-4").bind("mouseleave touchend", function(event) {
		var work = $(this).data("work");

		$(container).find(".tile-1[data-work='"+work+"'], .tile-3[data-work='"+work+"']").removeClass("active");
	});
}

doGridClick = function(container) {
	if(isMobile.any()) {
		doMobileTouch(container);
	} else {
		doDesktopClick(container);
	}
}

doMobileTouch = function(container) {
	$(container).find("> li .img-wrapper > a").click(function() {
		return false;
	});
}

doDesktopClick = function(container) {
	$(container).find("> li .img-wrapper > a").fancybox({
		openEffect	: "elastic",
    	closeEffect	: "elastic",
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
}
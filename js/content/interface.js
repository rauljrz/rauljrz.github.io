// OPEN MENU

$("#menu-button").click(function() {
    $("body").toggleClass("menu-open");

    return false;
});

// QAPTCHA

$('.QapTcha').QapTcha({
    disabledSubmit: true,
    PHPfile: SITE_ROOT + '/' + SITE_LANG + '/site/getCaptcha'
});

// INPUT FILLED

$(".form-control").focus(function() {
    $(this).parent(".form-group").addClass("form-group-filled");
});

$(".form-control").blur(function() {
    if ($(this).val().trim() === '') {
        $(this).parent(".form-group").removeClass("form-group-filled");
    }
});

// GO TOP

$(".go-top").click(function() {
    $("html,body").animate({
        scrollTop: 0
    }, 1000);

    return false;
});

var goToTopWaypoint = $(document).height() * 0.75;

$(window).scroll(function() {
    var s = $(document).scrollTop();

    if (s > goToTopWaypoint) {
        $("#go-top").show();
    } else {
        $("#go-top").hide();
    }
});

// SEND CONTACT MODAL

$("#contact-modal-form").submit(function() {
    $("#mih-alert").addClass("hidden");
    $("#modal-mih").removeClass("error");

    var has_error = false;

    if ($("#mih-name").val() == "") {
        $("#mih-name").parent(".form-group").addClass("error");
        has_error = true;
    } else {
        $("#mih-name").parent(".form-group").removeClass("error");
    }

    if ($("#mih-email").val() == "") {
        $("#mih-email").parent(".form-group").addClass("error");
        has_error = true;
    } else {
        $("#mih-email").parent(".form-group").removeClass("error");
    }

    if (has_error) {
        setTimeout(function() {
            $("#modal-mih").addClass("error");
        }, 400);
    } else {
        $("#mih-send").addClass("loading");
        $("#mih-send").prop("disabled", true);

        $.post(
            $(this).attr("action"),
            $(this).serialize(),
            function(data) {
                var d = jQuery.parseJSON(data);

                if (d.error) {
                    $("#mih-alert").removeClass("hidden").html(d.msg);
                } else {
                    $("#mih-send").addClass("success");
                    $("#contact-modal-success .modal-body").html(d.msg);

                    setTimeout(function() {
                        $("#contact-modal-form").slideUp();
                        $("#contact-modal-success").slideDown();
                    }, 1000);
                }
            }).error(function() {
            $("#mih-alert").removeClass("hidden").html("Error");
        }).always(function() {
            $("#mih-send").removeClass("loading");
            $("#mih-send").prop("disabled", false);
        });
    }

    return false;
});
/* =====================================
    Index:- Tutor Web3
    1. Scroll Navbar
    2. Back To Top
    3. Forms Validations Contact Page
    4. Prism
    5. Preloader 
======================================*/
// ============= 1. Scroll Navbar =============
$(function() {
    var header = $(".start-style");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header.removeClass('start-style').addClass("tw3-scroll");
        } else {
            header.removeClass("tw3-scroll").addClass('start-style');
        }
    });
});

// ============= 2. Back To Top =============
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 100);
            return false;
        });
    });
// ============= 3. Forms Validations Contact Page =============
(function () {
    'use strict'  
    var forms = document.querySelectorAll('.needs-validation')  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })();
  // ============= 4. Prism =============
  Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true,
    'break-lines': 60, //max number of characters in each line before break
});
// ============= 5. Preloader =============
$(window).on('load', function() {
    if ($('#preloader').length) {
        $('#preloader').delay(500).fadeOut('slow', function() {
            $(this).remove();
        });
    }
});

$(document).ready(function () {
    
});
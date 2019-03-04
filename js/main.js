$(document).ready(function() {

  $('#send').click(function(event) {
    event.preventDefault();
    sendMail();
  })

  function sendMail() {
    $.post("https://app.loueunnumero.com/api/utility/contact/lunconnect", {
        email: $("#email").val(),
        nom: $("#nom").val(),
        prenom: $("#prenom").val(),
        societe: $("#societe").val(),
        subject: 'IvoireLink Contact',
        message: $("#message").val()+' tel:'+$("#telephone").val()
      })
      .done(function(data) {
        toastr["success"]("Merci ! Nous vous recontacterons bientôt.")
      })
      .fail(function() {
        toastr["error"]('Erreur veuillez nous contacterà contact@lunc.fr')
      });
  };

  /* Toggle animation divers */
  /* Toggle animation divers */
  /* Toggle animation divers */

  $('a.burger, .nav-list-1').on('click', function() {
    $('a.burger, .nav-container, .nav-list-1').toggleClass('open');
  });

  $('.switch').on('click', function() {
    $('.wrapper-web, a.select-web').toggleClass('active');
    $('.wrapper-app, a.select-app').toggleClass('desable');
    $('h2').toggleClass('active');
    $('.bar-tab').toggleClass('slide');
  });

  $('.outline, a.dropdown-item, .overlay-dropdown').on('click', function() {
    $('.dropdown-menu, .overlay-dropdown').toggleClass('open');
  });

  /* Section détectée animation */
  /* Section détectée animation */
  /* Section détectée animation */

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var objectSelect = $('#application');
    var objectPosition = objectSelect.offset().top;

    if (scroll > objectPosition) {
      $('.left').addClass('displayApp');
      $('.right').addClass('displayApp');
    } else {
      $('.left').removeClass('displayNav');
      $('.right').removeClass('displayNav');
    }
  });


  /* Modale lancement movie */
  /* Modale lancement movie */
  /* Modale lancement movie */

  $(".modal").each(function() {
    $(this).wrap('<div class="overlay"></div>')
  });

  $(".open-modal").on('click', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
      modal = $($this).data("modal");

    $(modal).parents(".overlay").addClass("open");
    setTimeout(function() {
      $(modal).addClass("open");
    }, 350);

    $(document).on('click', function(e) {
      var target = $(e.target);

      if ($(target).hasClass("overlay")) {
        $(target).find(".modal").each(function() {
          $(this).removeClass("open");
          $("video").each(function () { this.pause() });
        });
        setTimeout(function() {
          $(target).removeClass("open");
        }, 350);
      }

    });

  });

  $(".close-modal").on('click', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
      modal = $($this).data("modal");

    $(modal).removeClass("open");
    setTimeout(function() {
      $(modal).parents(".overlay").removeClass("open");
      $("video").each(function () { this.pause() });
    }, 350);

  });
});


/* Apparition download bouton au scroll */
/* Apparition download bouton au scroll */
/* Apparition download bouton au scroll */

var scrollTop = 0;
$(window).scroll(function() {
  scrollTop = $(window).scrollTop();
  $('.counter').html(scrollTop);

  if (scrollTop >= 10) {
    $('#download').addClass('scrolled-download');
  } else if (scrollTop < 10) {
    $('#download').removeClass('scrolled-download');
  }

});

/* SCROLL EFFECT */
/* SCROLL EFFECT */
/* SCROLL EFFECT */

// $(function() {
//   $(window).scroll(function() {
//     var mass = Math.max(20, 150 - 0.1 * $(this).scrollTop()) + 'px';
//     $('.illustration').css({
//       'left': mass,
//       'opacity': mass
//     });
//   });
// });

/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */
/* SCROLL REVEAL */

window.sr = ScrollReveal();

sr.reveal('.all', {
  origin: 'bottom',
  distance: "30px",
  duration: 500,
  delay: 200,
  reset: false,
  scale: 1
});

sr.reveal('.scale', {
  origin: 'bottom',
  distance: "0px",
  duration: 500,
  delay: 200,
  reset: false,
  scale: 1.2
});

sr.reveal('.fade', {
  origin: 'bottom',
  distance: "0px",
  duration: 300,
  delay: 0,
  reset: false,
  scale: 1
});


sr.reveal('.left-anim', {
  origin: 'left',
  distance: "70px",
  duration: 500,
  delay: 200,
  reset: false,
  scale: 1
});

sr.reveal('.right-anim', {
  origin: 'left',
  distance: "70px",
  duration: 500,
  delay: 200,
  reset: false,
  scale: 1
});

sr.reveal('.slide', {
  origin: 'bottom',
  distance: "100px",
  duration: 900,
  reset: true,
  scale: 0.5
});

sr.reveal('.step_un', {
  origin: 'bottom',
  distance: "30px",
  duration: 500,
  delay: 200,
  reset: false,
  scale: 1
});

sr.reveal('.step_deux', {
  origin: 'bottom',
  distance: "30px",
  duration: 500,
  delay: 400,
  reset: false,
  scale: 1
});


sr.reveal('.step_trois', {
  origin: 'bottom',
  distance: "30px",
  duration: 500,
  delay: 600,
  reset: false,
  scale: 1
});

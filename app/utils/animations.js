import $ from 'jquery';

export const initializeAnimations = () => {
  // Animación del logo
  $('.header__logo a').hover(
    function() {
      $(this).stop().animate({
        letterSpacing: '0.07em',
        opacity: 0.9,
        fontSize: '2rem'
      }, 200);
    },
    function() {
      $(this).stop().animate({
        letterSpacing: '0.05em',
        opacity: 1,
        fontSize: '1.875rem'
      }, 200);
    }
  );

  // Animación suave del menú móvil
  $('.header__mobile-menu button').click(function() {
    $('.header__mobile-nav').slideToggle(200);
  });

  // Efecto de hover en los enlaces del menú
  $('.header__nav a').each(function() {
    $(this).hover(
      function() {
        $(this).stop().animate({
          paddingLeft: '5px',
          paddingRight: '5px'
        }, 150);
      },
      function() {
        $(this).stop().animate({
          paddingLeft: '0px',
          paddingRight: '0px'
        }, 150);
      }
    );
  });

  // Animación del carrito
  $('.cart-link').hover(
    function() {
      $(this).find('svg').stop().animate({
        width: '26px',
        height: '26px'
      }, 150);
    },
    function() {
      $(this).find('svg').stop().animate({
        width: '24px',
        height: '24px'
      }, 150);
    }
  );

  // Animación de los botones de autenticación
  $('.auth-button').hover(
    function() {
      $(this).stop().animate({
        padding: '6px 22px'
      }, 150);
    },
    function() {
      $(this).stop().animate({
        padding: '6px 20px'
      }, 150);
    }
  );

  // Animación para los iconos sociales en el footer
  $('.footer__social-links-item').hover(
    function() {
      $(this).find('svg').stop().animate({
        width: '26px',
        height: '26px'
      }, 150);
      $(this).find('span').stop().animate({
        fontSize: '0.9rem'
      }, 150);
    },
    function() {
      $(this).find('svg').stop().animate({
        width: '24px',
        height: '24px'
      }, 150);
      $(this).find('span').stop().animate({
        fontSize: '0.875rem'
      }, 150);
    }
  );
}; 
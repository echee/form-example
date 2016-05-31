var mobileMenu = {
  options: {
    button: "#nav-mobile-btn",
    dropdown: '#nav-primary',
    overlay: '#nav-overlay'
  },
  init: function(){
    menuButton = mobileMenu.options.button;
    menuDropdown = mobileMenu.options.dropdown;
    overlay = mobileMenu.options.overlay;
    this.bindClickEvents();
    this.watchResize();
  },
  bindClickEvents: function(){
    $('.mobile-menu').on('click', function(){
      mobileMenu.toggleActive();
    });
    $(overlay).on('click', function(){
      mobileMenu.toggleActive();
    });
  },
  toggleActive: function(){
    $(menuButton).toggleClass('active');
    $(menuDropdown).toggleClass('active');
    $(overlay).toggleClass('active');
  },
  removeActive: function(){
    $(menuButton).removeClass('active');
    $(menuDropdown).removeClass('active');
    $(overlay).removeClass('active');
  },
  watchResize: function(){
    $(window).on('resize', function() {
      if ($(this).width() > 1090) {
        mobileMenu.removeActive();
      }
    });
  }
};

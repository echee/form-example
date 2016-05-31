var createAccount = {
  options: {
    form: "#create-account"
  },
  init: function(){
    this.bindSubmitEvent();
  },
  bindSubmitEvent: function(){
    form = createAccount.options.form;
    $(form).on('submit', function( e ) {
      e.preventDefault();
      createAccount.getSuccessPage(this);
    });
  },
  getSuccessPage: function(form){
    var $form = $( form ),
      firstName = $form.find( "input[name='first-name']" ).val(),
      url = $form.attr( "action" );
    $.ajax({
      method: "POST",
      url: url,
    }).done(function(response){
      createAccount.showSuccessPage(response, firstName);
    });
  },
  showSuccessPage: function(response, firstName){
    var content = $(response).find("#success-container");
    content.find(".page-heading").append(", " + firstName + "!");
    $( "#form-container" ).empty().append( content );
  }
};

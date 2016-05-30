$(document).ready(function() {
  $( "#create-account" ).submit(function( e ) {
    e.preventDefault();

    var $form = $( this ),
      firstName = $form.find( "input[name='first-name']" ).val(),
      url = $form.attr( "action" );

    $.ajax({
      method: "POST",
      url: url,
      data: {name:firstName}
    }).done(function(data){
      var content = $(data).find("#success-container");
      content.find(".page-heading").append(", " + firstName);
      $( "#form-container" ).empty().append( content );
    });
  });
});

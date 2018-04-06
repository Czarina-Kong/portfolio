
  // // Or with jQuery

  // $(document).ready(function(){
  //   $('.parallax').parallax();
	// console.log('js.js is connected')
  // });

  $(document).ready(function(){
    $('.pushpin').pushpin();
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.modal').modal();
    $("#contact-form").validate({
      rules: {
        name: {
            required: true
        },
        email: {
            required: true,
            email:true
        }
      }
   });
  });

  
  
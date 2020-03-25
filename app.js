$(document).ready(function() {
  // Function to slide down page with learn more button
  $('#learn-more').click(function() {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $('.about').offset().top
      },
      2000
    );
  });

  // Form validation
  $("form[name='contact-form']").validate({
    // Specify validation rules
    rules: {
      name: 'required',
      email: {
        required: true,
        email: true
      },
      message: 'required'
    },
    messages: {
      name: 'Please enter your name',
      email: 'Please enter a valid email address',
      message: 'Please enter a message to send'
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});


$(function () {
 // Remove Search if user Resets Form or hits Escape!
 $('body, .header-nav form[role="search"] button[type="reset"]').on('click keyup', function(event) {
   console.log(event.currentTarget);
   if (event.which == 27 && $('.header-nav form[role="search"]').hasClass('active') ||
     $(event.currentTarget).attr('type') == 'reset') {
     closeSearch();
   }
 });

 function closeSearch() {
         var $form = $('.header-nav form[role="search"].active')
     $form.find('input').val('');
   $form.removeClass('active');
 }

 // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
 $(document).on('click', '.header-nav form[role="search"]:not(.active) button[type="submit"]', function(event) {
   event.preventDefault();
   var $form = $(this).closest('form'),
     $input = $form.find('input');
   $form.addClass('active');
   $input.focus();
 });

 // Autofocus for collapsed mode
 $(document).on('click', '.navbar-header button.navbar-toggle:last-of-type', function(event) {
 var $form = $('.header-nav form[role="search"]').find('input').focus();
 });

 // ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
 // if your form is ajax remember to call `closeSearch()` to close the search container
 $(document).on('click', '.header-nav form[role="search"].active button[type="submit"]', function(event) {
   event.preventDefault();
   var $form = $(this).closest('form'),
     $input = $form.find('input');
   $('#showSearchTerm').text($input.val());
         closeSearch()
 });

});

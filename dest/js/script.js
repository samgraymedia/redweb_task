$.ajax({
  url: "../data/book-data.json",
  cache: false,
  success: function(data) {
    console.log(data);
    $(data.books).each(function() {
      $('.dropdown').append('<option>' + this.title + '</option>')
    });
  },
  complete: function() {
    $('#loading-image').hide();
  }
});
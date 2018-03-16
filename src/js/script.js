$.ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  cache: false,
  success: function(data) {
    console.log(data);
    $(data).each(function() {
      $('.data').append('<h1>' + this.name + '</h1>')
    });
  },
  complete: function() {
    $('#loading-image').hide();
  }
});
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/",
  cache: false,
  success: function() {
    console.log("done");
  },
  complete: function() {
    $('#loading-image').hide();
  }
});
// $.ajax({
//   type: "GET",
//   url: "../data/book-data.json",
//   cache: false,
//   dataType: "JSON",
//   data: {
//     get_param: 'value'
//   },
//   success: function(data) {
//     console.log(data);
//     $(data.books).each(function() {
//       $('.dropdown').append('<option>' + this.title + '</option>')
//
//     });
//     var books = JSON.stringify(data)
//     $(document).ready(function() {
//       $('.book-wrap').prepend('<h3>' + books[0] + '</h3>');
//       $('.book-wrap').append('<p>' + books.author + '</p>');
//     });
//     $(document).on('change', '.dropdown', function(e) {
//       $(".book-wrap").children("h3").empty();
//       $(".book-wrap").children("p").empty();
//       $(".book-cover").children("img").empty();
//
//
//
//
//       console.log(this.options[e.target.selectedIndex].text);
//       $('.book-wrap').prepend('<h3>' + this.options[e.target.selectedIndex].text + '</h3>');
//       $('.book-wrap').append('<p>' + data + '</p>');
//
//
//     });
//   },
//
//   complete: function() {
//     $('#loading-image').hide();
//   }
// });




var obj = 0;

$.ajax({
  type: "GET",
  url: "../data/book-data.json",
  cache: false,
  dataType: "html",
  data: {
    get_param: 'value'
  },
  success: function(data) {
    console.log(data);
    var data = JSON.parse(data);
    $(data.books).each(function() {
      $('.dropdown').append('<option>' + this.title + '</option>')
    });
    $(document).on('change', '.dropdown', function(e) {
      $(".book-wrap").children("h3").remove();
      $(".book-wrap").children("p").remove();
      $(".book-cover").children("img").remove();
      $(".age-range").children("p", "strong").remove();
      if (this.options[e.target.selectedIndex].text === data.books[0].title) {
        obj = 0;
      } else if (this.options[e.target.selectedIndex].text === data.books[1].title) {
        obj = 1;
      } else if (this.options[e.target.selectedIndex].text === data.books[2].title) {
        obj = 2;
      } else if (this.options[e.target.selectedIndex].text === data.books[3].title) {
        obj = 3;
      } else if (this.options[e.target.selectedIndex].text === data.books[4].title) {
        obj = 4;
      }
      $('.book-wrap').prepend('<p>' + data.books[obj].author + '</p>');
      $('.book-wrap').prepend('<h3>' + data.books[obj].title + '</h3>');
      $('.book-cover').append('<img src="../media/books/' + data.books[obj].coverImage + '" >');
      $('.age-range').append('<p> aimed at <strong>' + data.books[obj].ageGroup + '</strong></p>');

    });
    $('.book-wrap').prepend('<p>' + data.books[obj].author + '</p>');
    $('.book-wrap').prepend('<h3>' + data.books[obj].title + '</h3>');
    $('.book-cover').append('<img src="../media/books/' + data.books[obj].coverImage + '" >');
    $('.age-range').append('<p> aimed at <strong>' + data.books[obj].ageGroup + '</strong></p>');
  },

});
//a var to track which book a user has selected, on load its the first in the array.
var obj = 0;
$.ajax({
  type: "GET",
  url: "../data/book-data.json",
  cache: false,
  dataType: "html",
  data: {
    get_param: 'value'
  },
  //if getting the json is successful
  success: function(data) {
    var data = JSON.parse(data);
    //for each book put every title into the select as an option
    $(data.books).each(function() {
      $('.dropdown').append('<option>' + this.title + '</option>')
    });
    //on change of the select
    $(document).on('change', '.dropdown', function(e) {
      //empty any data that is currently in the app
      $('.title').text("");
      $('.author').text("");
      $('.bookCover').attr('src', "");
      $('.age').text("");
      //check which book they have selected and changing the obj var accordenly
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
      //append the data to the app
      $('.title').text(data.books[obj].title);
      $('.author').text(data.books[obj].author);
      $('.bookCover').attr('src', '../media/books/' + data.books[obj].coverImage);
      $('.aimed').text("aimed at ");
      $('.aimed').append("<strong>" + data.books[obj].ageGroup + "</strong>")

      //checking to see if there is an age range
      if (data.books[obj].ageGroup === "") {
        $('.aimed').text("Sorry, no age range available");
        $('.aimed').append("");
        $('.age-range').css('padding', '1.2rem 1.5rem 0.5rem');

      }


    });
    //append the data to the app on first load
    $('.title').text(data.books[obj].title);
    $('.author').text(data.books[obj].author);
    $('.bookCover').attr('src', '../media/books/' + data.books[obj].coverImage);
    $('.aimed').text("aimed at ");
    $('.aimed').append("<strong>" + data.books[obj].ageGroup + "</strong>")

  },

});
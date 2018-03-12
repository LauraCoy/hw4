jQuery(function() {
  let apiKey = "6f7c73b6f4cd46f9afb78b10db0896b0";
  let  url = "https://api.nytimes.com/svc/books/v3/lists.json";
    url += '?' + $.param({
      'api-key': "6f7c73b6f4cd46f9afb78b10db0896b0",
      'list': "hardcover-nonfiction",
      'sort-order': "ASC"
});
  $.get(url, function(data) {
    console.log(data);
    $("#list1").empty();
    for (let i=0; i<5; i++) {
      let book = data.results[i];
      let html = '<div class="book">';
      html = html + '<h4 class="book-title"><a href='+book.amazon_product_url+'>' + book.book_details[0].title + '</h4></a>';
      html = html + '<h5 class="book-author">Author: ' + book.book_details[0].author + '</h5>';
      html = html + '<p class="book-text">'+ book.book_details[0].description + '</p>';
      html = html + '</div></div></div>';
      jQuery("#list1").append(html);
    }
    jQuery("#list1").fadeIn(2000);
  });
});


jQuery(function() {
  let apiKey = "6f7c73b6f4cd46f9afb78b10db0896b0";
  let  url = "https://api.nytimes.com/svc/books/v3/lists.json";
    url += '?' + $.param({
      'api-key': "6f7c73b6f4cd46f9afb78b10db0896b0",
      'list': "hardcover-fiction",
      'sort-order': "ASC"
});
  $.get(url, function(data) {
    console.log(data);
    $("#list2").empty();
    for (let i=0; i<5; i++) {
      let book = data.results[i];
      let html = '<div class="book">';
      html = html + '<h4 class="book-title"><a href='+book.amazon_product_url+'>' + book.book_details[0].title + '</h4></a>';
      html = html + '<h5 class="book-author"> Author: ' + book.book_details[0].author + '</h5>';
      html = html + '<p class="book-text">'+ book.book_details[0].description + '</p>';
      html = html + '</div></div></div>';
      jQuery("#list2").append(html);
    }
    jQuery("#list2").fadeIn(2000);
  });
});

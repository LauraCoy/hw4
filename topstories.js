jQuery(function() {
  let apiKey = "6f7c73b6f4cd46f9afb78b10db0896b0";
  let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".row").empty();
    for (let i=0; i<15; i++) {
      let article = data.results[i];
      let html = '<div class="col-4">';
      html = html + '<div class="card">';
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title"><a href=' +article.url +'>'+ article.title + '</h4></a>';
      html = html + '<p class="card-text">' + article.abstract + '</p>';
      html = html + '</div></div></div>';
      jQuery(".row").append(html);
    }
    jQuery(".row").fadeIn(2000);
  });
});

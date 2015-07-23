var mainUrl = 'https://openapi.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=guitar&includes=Images,Shop';

$.ajax(mainUrl, {
  dataType: 'jsonp',
  error: function(){

  },
  success: function(data, textStatus, xhr){
    buildAllItems(data.results);
  }
})

var buildAllItems = function(items){
  var html = items.map(buildItems);

  html.reduce(function(html, item){
    return html + item;
  });

  var $items = $('#primary-content');
  $items.html(html);
};

var buildItems = function(item){
  var image = _.first(item.Images);
      image = image.url_170x135;


  var imgUrl = item.url;
  var title = item.title;
  // var shop = item.shop.shop_name;

  var itemTemplate = $('#itemTemplate').html();
  var itemHTML = _.template(itemTemplate);
  var output = itemHTML(
    {
      image: image,
      imgUrl: imgUrl,
      title: title,
      // shop: shop,
    }
  );

  return output;
};

// jQuery.ajax(mainUrl).done(function(items){
//   buildAllRepos(items);
// });

'use strict';

var mainUrl = 'https://openapi.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=guitar&includes=Images,Shop';

$.ajax(mainUrl, {
  dataType: 'jsonp',
  error: function error() {},

  success: function success(data, textStatus, xhr) {
    buildAllItems(data.results);
  }
});

var buildAllItems = function buildAllItems(items) {
  var html = items.map(buildItems);

  html.reduce(function (html, item) {
    return html + item;
  });

  var $items = $('.items');
  $items.html(html);
};

var buildItems = function buildItems(item) {
  var image = _.first(item.Images);

  // jscs:disable requireCamelCaseOrUpperCaseIdentifiers

  image = image.url_170x135;

  // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

  var imgUrl = item.url;
  var title = item.title;
  var subtitle = function subtitle() {
    if (title.length > 24) {
      return title.substring(0, 24) + '...';
    } else {
      return title;
    }
  };

  // jscs:disable requireCamelCaseOrUpperCaseIdentifiers

  var shop = item.Shop.shop_name;

  // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

  var shopUrl = item.Shop.url;
  var price = item.price;
  var priceTag = function priceTag() {
    return '$' + price;
  };

  var itemTemplate = $('#itemTemplate').html();
  var itemHTML = _.template(itemTemplate);
  var output = itemHTML({
    image: image,
    imgUrl: imgUrl,
    subtitle: subtitle,
    shop: shop,
    shopUrl: shopUrl,
    priceTag: priceTag
  });

  return output;
};
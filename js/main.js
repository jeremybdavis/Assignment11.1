var mainUrl = 'https://openapi.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=guitar&includes=Images,Shop';

$.ajax(mainUrl, {
  dataType: 'jsonp',
  error: function(){

  },
  success: function(data){
    var content = data;
    console.log(content);
  }
})

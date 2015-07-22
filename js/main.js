var mainUrl = 'https://api.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=guitar&includes=Images,Shop';

$.ajax(mainUrl,{
  error: function(){

  },
  success: function(data){
    var content = data;
  }
})

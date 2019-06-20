$(".product-long").each(function () {
    var productId = $(this).find('.prateleira-id').text();
    var dis = $(this);
    $.ajax({
        "async": true,
        "url": "https://en.beira.shop/api/catalog_system/pub/products/variations/" + productId,
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "content-type": "application/json"
        }
    }).done(function (data) {
        var qtdColor = data.dimensionsMap.Color.length;
        var qtdSizes = data.dimensionsMap.Size.length;
        $(dis).find('#shelf-color').empty();
        $(dis).find('#shelf-size').empty();
        for (i=0; i < qtdColor ; i++){
            var color =  data.dimensionsMap.Color[i];
            $(dis).find('#shelf-color').append(color +" ").show();
        } 
        for (i=0; i< qtdSizes ; i++){
            var size =  data.dimensionsMap.Size[i];
            $(dis).find('#shelf-size').append(size + " ").show();
        } 
    })
});
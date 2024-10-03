/*Siirretään item-listaus sivun loppuun itemin muokkaussivulla (Tritonia, päivitetty 2020)*/
$(document).ready(function () {
    
    $('#cat_additem #cataloguing_additem_itemlist').after($('#cat_additem #cataloguing_additem_itemlist #itemst_wrapper').parents('div').html());
    $('#cat_additem #cataloguing_additem_itemlist #itemst_wrapper').parent('div').hide();
    $('#cat_additem #cataloguing_additem_itemlist').prepend($('#cat_additem #cataloguing_additem_itemlist>.row'));
    
    document.getElementById("cataloguing_additem_newitem").scrollIntoView();

    var table = $("#itemst").DataTable();
    table.fixedHeader.disable();

});

/// LOPPU ///

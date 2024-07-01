jQuery(document).ready(function(){
  $(".currency").append(" CHF");
});


function print_today() {
  var now = new Date();
  var months = new Array('Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre');
  var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
  function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
  }
  var today =  date + " " + months[now.getMonth()] + " " + (fourdigits(now.getYear()));
  return today;
}

function update_total() {
  var total = 0;
  $('.price').each(function(i){
    price = $(this).html().replace("","");
    if (!isNaN(price)) total += Number(price);
  });

  $('#subtotal').html(""+parseFloat(total).toFixed(2));
  $('#total').html(""+parseFloat(total).toFixed(2));
  
  update_balance();
}

function update_balance() {
  var due = $("#total").html().replace("","") - $("#paid").val().replace("","");
  due = parseFloat(due).toFixed(2);
  
  $('.due').html(""+due);
}

function update_price() {
  var row = $(this).parents('.item-row');
  var price = row.find('.cost').val().replace("","") * row.find('.qty').val();
  price = parseFloat(price).toFixed(2);
  isNaN(price) ? row.find('.price').html("N/A") : row.find('.price').html(""+price);
  
  update_total();
}

function bind() {
  $(".cost").blur(update_price);
  $(".qty").blur(update_price);
}

$(document).ready(function() {

  $('input').click(function(){
    $(this).select();
  });

  $("#paid").blur(update_balance);
   
  $("#addrow").click(function(){
    $(".item-row:last").after('<tr class="item-row"><td class="item-name"><div class="delete-wpr"><textarea>Nom du produit</textarea><a class="delete" href="javascript:;" title="Remove row">X</a></div></td><td class="description"><textarea>Description du produit</textarea></td><td><textarea class="cost">0.00</textarea></td><td><textarea class="qty">0</textarea></td><td><span class="price">0.00</span><span class="currency"></span></td></tr>');
    if ($(".delete").length > 0) $(".delete").show();
    bind();
    $(".currency").empty();
     $(".currency").append(" CHF");
  });
  
  bind();
  
  $(".delete").on('click',function(){
    $(this).parents('.item-row').remove();
    update_total();
    if ($(".delete").length < 2) $(".delete").hide();
  });
  
  $("#cancel-logo").click(function(){
    $("#logo").removeClass('edit');
  });
  $("#delete-logo").click(function(){
    $("#logo").remove();
  });
  $("#change-logo").click(function(){
    $("#logo").addClass('edit');
    $("#imageloc").val($("#image").attr('src'));
    $("#image").select();
  });
  $("#save-logo").click(function(){
    $("#image").attr('src',$("#imageloc").val());
    $("#logo").removeClass('edit');
  });
  
  $("#date").val(print_today());
  
});
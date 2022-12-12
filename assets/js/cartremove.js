
$(function () {
   $(".caart-re").click(function(){
      removeItems(this);
   });

   function removeItems(item) {
      $($(item).closest(".mini-cart-content")).fadeOut(200, function() {
        $(this).remove();
      });
    }
});



// mini cart quantity

// var inputs = $('.quantity'),
//    minValue = parseInt(inputs.attr('min')),
//    maxValue = parseInt(inputs.attr('max'));


// $('.plus').on('click', function () {
//    var inputValue = inputs.val();
//    if (inputValue < maxValue) {
//       inputs.val(parseInt(inputValue) + 1);
//    }
// });

// $('.minus').on('click', function () {
//    var inputValue = inputs.val();
//    if (inputValue < maxValue) {
//       inputs.val(parseInt(inputValue) - 1);
//    }
// });

var incrementPlus;
var incrementMinus;

var buttonPlus  = $(".plus");
var buttonMinus = $(".minus");

var incrementPlus = buttonPlus.click(function() {
   $n = 1;
   var $n = $(this)
		.parent(".cart-quantity")
		.parent(".mini-cart-content")
		.find(".quantity");
	$n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
		var $n = $(this)
		.parent(".cart-quantity")
		.parent(".mini-cart-content")
		.find(".quantity");
	var amount = Number($n.val());
	if (amount > 0) {
		$n.val(amount-1);
	}
});
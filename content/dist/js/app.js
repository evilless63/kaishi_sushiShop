window.moffConfig = {
	// Website CSS breakpoints.
	// Default values from Twitter Bootstrap.
	// No need to set xs, because of Mobile first approach.
	breakpoints: {
		sm: 640,
		md: 992,
		lg: 1200
	},
	loadOnHover: true,
	cacheLiveTime: 2000
};

$(document).ready(function(){
	$( ".themeSetsBlockImageCover" ).hover(
	  function() {
	    $( this ).children("span").css( "display", "block" );
	  }, function() {
	    $( this ).children("span").css( "display", "none" );
	  }
	);

	$( "#login" ).click(
		function(){
			$( ".loginWrapper" ).css( "display", "block" );	
		});
	
	$(".closeModalLogin").click(
		function(){
			$(".loginWrapper").css("display", "none");
		});	
	
	$( ".closeModalRegistration" ).click(
		function(){
			$( ".registrationWrapper" ).css( "display", "none" );
		});
	
	$( "#registration" ).click(
		function(){
			$( ".registrationWrapper" ).css( "display", "block" );	
		});

	$( ".registrationLink").click(
		function(){
			$(".loginWrapper").css("display", "none");
			$( ".registrationWrapper" ).css( "display", "block" );
		});

	$( ".sushiBlockGetBusket" ).click(
		function(){
			$( ".sushiProfailWrapper" ).css( "display", "block" );	
		});

		$( ".rowProductPaymentTocart" ).click(
		function(){
			$( ".sushiProfailWrapper" ).css( "display", "block" );	
		});
		
	$( ".closeModal" ).click(
		function(){
			$( ".sushiProfailWrapper" ).css( "display", "none" );
		});	
	
	$( ".sushiBlockToCatalog" ).click(
		function(){
			$( ".sushiProfailWrapper" ).css( "display", "none" );
		});		
	
	$(".sushiBlockGetBusketProfail").click(
		function(){
			alert("Товар добавлен в корзину !");
		});	

	// $(".addCommentButton").click(
	// 	function(){
	// 		if($(".addCommentField").hasClass("hidden")){
	// 			$(this).removeClass("hidden").addClass("block");
	// 		} else {
	// 			$(this).removeClass("block").addClass("hidden");
	// 		}
	// 	});

	$(".addCommentButton").click(function(){
		$(".addCommentField").css("display", "block");
	});	



	//cart page input value

	// $(".cartProductsBlockCountMinus").click(function(){
	// 	var inputValue = $(this).parent("cartProductsBlockCount").find("cartProductsBlockInputcount").val();
	// 	if(inputValue > "1") {
	// 		inputValue = inputValue --;
	// 	} else {
	// 		alert ("Выбрано минимальное количество товара !");
	// 	}
	// })

	

});

(function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);


//MOBILE


$(document).ready(function(){
	$( ".formActionCartNext").click(
		function(){
			$(".chooseProucts").css("display", "none");
			$(".topAlert").css("display", "none");
			
			$( ".choosePayment" ).css( "display", "block" );
		});
	
	$( ".formActionCartZakaz").click(
		function(){
			alert("Товар успешно заказан !");
		});	
});	








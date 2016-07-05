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

	$( "#registration" ).click(
		function(){
			$( ".registrationWrapper" ).css( "display", "block" );	
		});
	$( ".gdeZakryt" ).click(
		function(){
			$( ".registrationWrapper" ).css( "display", "none" );
		});
});
$(document).ready(function(){
	$('#person_card_submit').click(function(){
		return accept_person_card();
	});

	$('ul.app_manage_buttons > li > div').click(function(){
		var get_active = $(this);
		return accept_manage_application(get_active);
	});


	function accept_person_card(){
		if (confirm('Вы уверены ? Изменения будут внесены в базу данных')) {
		    // Save it!
		} else {
		    // Do nothing!
		}
	}

	function accept_manage_application(element){
		if (element.hasClass("__active")) {
			alert("Данные уже внесены, для редактирования внесенных ранее данных, пожалуйста, обратитесь к супер администратору !")	
		} else {
			if (confirm('Вы уверены ? Изменения будут внесены в базу данных')) {
		    element.addClass("__active")
		    // Save it!
			} else {
			    // Do nothing!
			}
		}
		
	}
});
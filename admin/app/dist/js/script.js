$(document).ready(function(){
	$('#person_card_submit').click(function(){
		if (confirm('Вы уверены ? Изменения будут внесены в базу данных')) {
		    // Save it!
		} else {
		    // Do nothing!
		}
	});
});
var p1 , p2 ,p3 ,p4
var keywords = ['detective','intelligance','fighter','police','book','lady','observant','criminal']

$(document).ready(function(){
    $('.modal').modal();
  });
function reset(){
	$('#playsheet').trigger('reset'); 
	$('img').css('background-color','transparent');
	for (var i=0;i<keywords.length;i++){
		$('.'+keywords[i]).css('background-color','transparent');
		$('img.'+keywords[i]).parent().parent().css('background-color','transparent');
}
function nextRound(){
	p1 = $('input#player1name').val();
	p2 = $('input#player2name').val();
	p3 = $('input#player3name').val();
	p4 = $('input#player4name').val();
	reset(); 
	$('input#player1name').val(p1);
	$('input#player2name').val(p2);
	$('input#player3name').val(p3);
	$('input#player4name').val(p4);
	
	}


}

function toggle(keyword){
	if ($('.'+keyword).css('background-color') =='rgba(80, 130, 80, 0.5)'){
		$('.'+keyword).parent().css('background-color','transparent')
		$('.'+keyword).css('background-color','transparent');
	}else{
		$('.'+keyword).css('background-color','rgba(80, 130, 80, 0.5)');
	}
	$('img.'+keyword).parent().each(function(){
		if($(this).children().filter(function(){return $(this).css('background-color') == 'rgba(80, 130, 80, 0.5)'}).length != 0){
			$(this).parent().css('background-color','rgba(80, 130, 80, 0.5)');
			$(this).parent().children('.s2').children(':checkbox').attr('checked', true);
		}else{
			$(this).parent().css('background-color','transparent');
			$(this).parent().children('.s2').children(':checkbox').attr('checked', false);
		}
	});

}
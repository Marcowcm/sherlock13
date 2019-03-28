var p1 , p2 ,p3 ,p4

$(document).ready(function(){
    $('.modal').modal();
  });

function NextRound(){
	p1 = $('input#player1name').val();
	p2 = $('input#player2name').val();
	p3 = $('input#player3name').val();
	p4 = $('input#player4name').val();
	$('#playsheet').trigger('reset'); 
	$('input#player1name').val(p1);
	$('input#player2name').val(p2);
	$('input#player3name').val(p3);
	$('input#player4name').val(p4);
}
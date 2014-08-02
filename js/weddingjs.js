function infoPopUp(button){
	var popUpId = '#' + $(button).attr('href') + 'Info';
	$(popUpId).siblings('.popUp').css('display','none');
	$(popUpId).css('display','block');
	$('#popUpWrap').css('display','block');
}

function closeInfoPopUp(e){
	cancelBubble(e)
	// var target = event.target;
	// var targetParents = $(target).parents();
	// var popUpContent = $(targetParents).find('#ajaxGet');
	// if(popUpContent.length < 1){
	$('.popUp').css('display','none');
	$('#popUpWrap').css('display','none');
	// }
}

function cancelBubble(e) {
	var evt = e ? e:window.event;
	if (evt.stopPropagation)    evt.stopPropagation();
	if (evt.cancelBubble!=null) evt.cancelBubble = true;
}

$(document).ready(function() {
   		/*Instagram*/
        $("#instagram").instagram('getStreamByTag', {
        	//tag: 'monsterces2014',
        	tag: 'sarahgabehitched',
        	count: 100,
        	getUser: false
        	//user: 20200337 //Monster 20200337
        });
        // $("#instagram").monsterSocial({
        //     displayType: 'instagram',
        // });
});


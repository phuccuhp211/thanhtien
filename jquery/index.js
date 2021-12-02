$(function() {
	var docao_manhinh = $(window).height();                        
	console.log(docao_manhinh);                                    

	$('.js-auto-set-height').css({'height':docao_manhinh})                     
	$(window).resize(function(){                                   
		var docao_manhinh = $(window).height();    
		$('.js-auto-set-height').css({'height':docao_manhinh})
	});

	$('.vid-bg').css({'height':docao_manhinh})                     
	$(window).resize(function(){                                   
		var docao_manhinh = $(window).height();    
		$('.vid-bg').css({'height':docao_manhinh})
	});

	$('.filter-banner').css({'height':docao_manhinh})                     
	$(window).resize(function(){                                   
		var docao_manhinh = $(window).height();    
		$('.filter-banner').css({'height':docao_manhinh})
	});

	$(window).scroll(function(event){
		vitrihientai = $('html, body').scrollTop();
		console.log(vitrihientai);

		if(vitrihientai > 0){$('.menutop').addClass('menutop-sd');}
		else {$('.menutop').removeClass('menutop-sd');}

		if(vitrihientai > 599){$('.box-2').addClass('box-2-in');}

		if(vitrihientai > 199){$('.btt-button').addClass('btt-button-in');}
		else {$('.btt-button').removeClass('btt-button-in');}

		if(vitrihientai > 899){
			$('.pic-r').addClass('pic-r-in');
			$('.pic-l').addClass('pic-l-in');
		}
	})

	$('.btt-button').on('click',function(event){
		$('html, body').animate({scrollTop: $('#banner').offset().top},500);
	})
})
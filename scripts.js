var cards = [
    '<img src="1s.png">',
    '<img src="4d.png">',
    '<img src="base.png">',
    '<img src="baseDC.png">',
    '<img src="11d.png">',
    '<img src="9s.png">',
];


// All code will wait until the DOM is ready!
$(document).ready(function(){
	var gridSize = 12;
	var card = 0;

	var mgHTML = '';
	for(var i = 0; i < gridSize; i++){
		if(i < 2){card = cards[0];
        }else if(i<4){card = cards[1];
        }else if(i<6){card = cards[2];
        }else if(i<8){card = cards[3]
        }else if(i<10){card = cards[4]
        }else{card = cards[5];
        }
		mgHTML += '<div class="mg-tile col-sm-3">';
			mgHTML += '<div class="mg-tile-inner">';
				mgHTML += '<div class="mg-front">'+card+'</div>';
				mgHTML += '<div class="mg-back"></div>';
			mgHTML += '</div>';
		mgHTML += '</div>';
	}

    $('.mg-contents').html(mgHTML);
    $(".mg-tile-inner").click(function(){
    	$(this).toggleClass("flip");

    	var cardsUp = $(".flip");
    	if(cardsUp.length == 2){
    		// CHECK TO SEE IF THEY ARE THE SAME
    		var cardsUpImages = cardsUp.find(".mg-front img");
    		if(cardsUpImages[0].src == cardsUpImages[1].src){
    			// THIS IS A MATCH!!!
    			cardsUp.addClass("matched");
    			cardsUp.removeClass("flip");
    		}else{
    			// THE USER HAS FLIPPED 2 CARDS, THEY DO NOT MATCH, FLIP THEM BACK OVER
    			setTimeout(function(){
    					cardsUp.removeClass("flip");
    			}, 2000);
    		}
    	}else{
    		// DO NOTHING
    	}
    });


});
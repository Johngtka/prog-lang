$(document).ready(function() {
    var NavY = $('.menu').offset().top;
    
    var stickyNav = function(){
    var ScrollY = $(window).scrollTop();
        
    if (ScrollY > NavY) { 
        $('.menu').addClass('sticky');
    } else {
        $('.menu').removeClass('sticky'); 
    }
    };
    
    stickyNav();
    
    $(window).scroll(function() {
        stickyNav();
    });
    });
    function zegarek()
				{
					var dzisiaj = new Date();
					
					var dzien = dzisiaj.getDate();
					var miesiac = dzisiaj.getMonth()+1;
					var rok = dzisiaj.getFullYear();
					var godzina = (dzisiaj.getHours()<10?'0':'') + dzisiaj.getHours();
					var minuta =  (dzisiaj.getMinutes()<10?'0':'') + dzisiaj.getMinutes();
					var sekunda = (dzisiaj.getSeconds()<10?'0':'') + dzisiaj.getSeconds();
					document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+"|"+godzina+":"+minuta+":"+sekunda;
					
					setTimeout("zegarek()",1000);
				}
$(document).ready(function(){

var navHover = $('nav ul li').children(".menu");

//Adds text underline when Navbar links are hovered over
navHover.hover(function(){
	$(this).css('text-decoration', 'underline');
}, function() {
	$(this).css('text-decoration', 'none');
});

//Increase width and hight of Navbar logo when hovered over
var brand = $('.navbar-brand > img');

brand.hover(function() {
	$(this).css('width', '43px');
	$(this).css('height', '42px');
}, function() {
	$(this).css('width', '40px');
	$(this).css('height', '40px');
});

//Index Span Loading Animation
var target1, target2, target3, target4, target5, target6;
target1 = $('#target1'); 
target2 = $('#target2'); 
target3 = $('#target3'); 
target4 = $('#target4');
target5 = $('#target5');
target6 = $('#target6');  
target7 = $('#target7'); 

target1.fadeIn(1000);
target2.fadeIn(2000);
target3.fadeIn(2500);
target4.fadeIn(3000);
target5.fadeIn(3500);
target6.fadeIn(4000);
target7.fadeIn(3500, function(){
	$(this).animate({'right': '+=315px'}, "slow", 'easeOutBounce');
});

//Swipebox Plugin
$( '.swipebox' ).swipebox();


//Back to Top Button
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

});

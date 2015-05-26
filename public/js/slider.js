jQuery(document).ready(function ($) {

    var auto = function () {
        moveRight();
    };
    var autoInterval = setInterval(auto, 5000);
    
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        clearInterval(autoInterval);
        autoInterval = setInterval(auto, 5000);
        moveLeft();
    });

    $('a.control_next').click(function () {
        clearInterval(autoInterval);
        autoInterval = setInterval(auto, 5000);
        moveRight();
    });

});    

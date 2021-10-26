$(function() {
    $('nav a').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href'),
        targetOffset = $(href).offset().top;
        menuHeight = $('nav').innerHeight();
        
        $('html, body').animate({
            scrollTop: targetOffset -  menuHeight
        }, 600);
        
    })
})
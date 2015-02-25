(function( $ ){ 
    $(document).ready(function(){
        $('a.lightbox').click(function(e) { //вызов события клик
            $('body').css('overflow-y', 'hidden'); // убираем скролл
            
            $('<div id="overlay"></div>')
                .css('top', $(document).scrollTop())
                .css('opacity', '0.2')
                .animate({'opacity': '0.5'}, 'slow')
                .appendTo('body');
              
            $('<div id="lightbox"></div>')
                .hide()
                .appendTo('body');
              
            $('<img>',{
                src:$(this).attr('href'),
                load:function(){
                    positionLightboxImage();
                },
                click:function(){
                    removeLightbox();
                }

            }).appendTo('#lightbox');
            
            return false;
        });
    });

    function positionLightboxImage() {
        var top = ($(window).height() - $('#lightbox').height()) / 2;
        var left = ($(window).width() - $('#lightbox').width()) / 2;
        $('#lightbox')
            .css({
                'top': top,
                'left': left
            })
            .fadeIn();
    }

    function removeLightbox() {
        $('#overlay, #lightbox')
        .fadeOut('slow', function() {
            $(this).remove();
            $('body').css('overflow-y', 'auto'); // show scrollbars!
        });
    }
 })( jQuery );

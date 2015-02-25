(function( $ ){ // обгортаємо об’єкт jQuery в виконувану функцію-вираз
    $.fn.myPluginLightbox = function() {//оголошуємо плагін

                $(this).click(function() { ////виклик події для заданого в файлі HTML елемента
                   
                    $('body').css('overflow-y', 'hidden');  // прибираємо скрол
                    
                    $('<div id="overlay"></div>')//створюємо блок обгортку
                        .css('top', $(document).scrollTop())//зазначаємо верхнє положення, scrollTop – висота прокрутки
                        .css('opacity', '0')// задаємо прозрачність
                        .animate({'opacity': '0.5'}, 'slow')//повільно відкриваємо полупрозоре вікно
                        .appendTo('body');//відкриваємо в body
                      
                    $('<div id="lightbox"></div>')//створюємо допоміжний блок, який
                        .hide()// є скритий
                        .appendTo('body'); // і відкриваємо його також в body

                    
                    $('<img src="images/lightbox.jpg" />')// створюємо картинку яку відображаємо в лайтбоксі
                        .load(function() {//загружаємо в координати вказані в
                            positionLightboxImage();//цій функції
                            removeLightbox();//дана функція закриває картинку по кліку не на картинці
                        })
                        .appendTo('#lightbox');//відкриваємо картинку в блоці lightbox
                    
/*намагалась зробити вивід картинок, якщо заданий елемент сам є картинкою,  але не знаю як правильно умову скласти*/
                    
                    /*if () {//if $(this) === 'img' 
                        
                        $(this)
                        .load(function() {
                            positionLightboxImage();
                            removeLightbox();
                        })
                        .appendTo('#lightbox');

                    }
                    else{

                        $('<img src="images/lightbox.jpg" />')
                        .load(function() {
                            positionLightboxImage();
                            removeLightbox();
                        })
                        .appendTo('#lightbox');
                    };*/

                  
                    return false;//для того щоб не переходило безпосередньо по адресі ссилки

                });

            function positionLightboxImage() {//ф-ція яка відображає картинку з заданих координат
                var top = ($(window).height() - $('#lightbox').height()) / 2;//вираховуємо координату з верху
                var left = ($(window).width() - $('#lightbox').width()) / 2;//вираховуємо координату з ліва

                $('#lightbox')//присваюємо координати
                    .css({
                        'top': top,
                        'left': left
                    })
                    .fadeIn();//відображаємо на екрані
            }

            function removeLightbox() {
                $(function(){
                    $(document).click(function(event) {//обробка кліку на елементі document
                        if ($(event.target).closest("#lightbox img").length) return;//ловимо де саме відбувся клік, якщо ззовні елемента, то скриваємо елемент
                        
                        $('#overlay, #lightbox')
                        .fadeOut('slow', function() {//повільно скриваємо, і удаляємо елементи
                            $('#overlay, #lightbox').remove();
                            $('body').css('overflow-y', 'auto'); 
                        });
                    });
                });
             
            }
    };

 })( jQuery );

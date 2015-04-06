(function ($) {
    $(document).ready(function () {

        $('.flexslider .flex-viewport .slides li img').each(function () {
            $(this).addClass('tech-gal');
            $(this).attr('href', $(this).attr('src'));
            /*$(this).click(function () {
             $(this).colorbox({href: $(this).attr('src'), rel: 'tech-gal'});
             });*/
        });
        $('.flexslider .flex-viewport .slides li img').colorbox({rel: 'tech-gal', current: false});

        // Hiding AHAH PROCESSED button
        $('.field-name-field-fotografie-z-akce .field-items .field-item').hide();
        // Inserting button "add more rows"
        $('<div class="more-images-button"><div class="more-images-button-label">Zobrazit další obrázky</div></div>').insertAfter(".field-name-field-fotografie-z-akce .field-items");

        // Total number of rows
        total_rows_count = $(".field-name-field-fotografie-z-akce .field-items .field-item").size();
        // Show [x] rows at the beginning
        show_rows = 30;
        // Counting of filled rows
        rows_count = 0;
        // Show more [x] rows
        increase_of = 15;

        // If there more filled rows then min count
        if (show_rows < rows_count) {
            show_rows = rows_count;
        }
        //
        // Show min count of rows
        $('.field-name-field-fotografie-z-akce .field-items .field-item:lt(' + show_rows + ')').show();
        //

        // checking, if all images are showen at beganing
        if (show_rows >= total_rows_count) {
            $('.more-images-button .more-images-button-label').hide();
        }
        // Click function for button "add more rows"
        $('.more-images-button .more-images-button-label').click(function () {
            show_rows = (show_rows + increase_of <= total_rows_count) ? show_rows + increase_of : total_rows_count;
            $('.field-name-field-fotografie-z-akce .field-items .field-item:lt(' + show_rows + ')').show();
            if (show_rows >= total_rows_count) {
                $('.more-images-button .more-images-button-label').hide();
            }
        });

        $('#block-user-login #user-login-form').hide();
        $('<div class="user-login-button"><div id="user-login-button">Přihlásit se / Registrovat</div></div>').insertBefore('#block-user-login #user-login-form');
        $('<div class="user-login-button-hide" style="display:none;"><div id="user-login-button-hide">Skrýt</div></div>').insertAfter('#block-user-login #user-login-form');
        $('#block-user-login #user-login-button').click(function () {
            $('#block-user-login .user-login-button').hide();
            $('#block-user-login .user-login-button-hide').show(200);
            $('#block-user-login #user-login-form').show(200);
        });
        $('#block-user-login #user-login-button-hide').click(function () {
            $('#block-user-login .user-login-button-hide').hide();
            $('#block-user-login .user-login-button').show(200);
            $('#block-user-login #user-login-form').hide(200);
        });

        if ($('body.node-type-zak-skoly')) {
            $('body.node-type-zak-skoly .field-name-field-zak-zkousky table tbody .field_zkouska_technicky_stupen').each(function () {
                var NewClass = $(this).find('ul.links li').text();
                var NewClassNumbers = NewClass.replace(/[^0-9]/g, "");
                var NewClassLetters = NewClass.replace(/[^a-zA-Z]/g, "").toLowerCase();
                var NewClassKonstruktor = NewClassLetters + '-' + NewClassNumbers;
                $(this).addClass(NewClassKonstruktor);
            });
        }
        if ($('body.page-seznam-nasich-zaku') || $('body.page-seznam-nasich-zaku-vedouci')) {
            $(this).find('.view-seznam-nasich-zaku table tbody tr .views-field-field-zak-zkousky').each(function () {
                var NewClass = $(this).find('.field-content').text();
                var NewClassNumbers = NewClass.replace(/[^0-9]/g, "");
                var NewClassLetters = NewClass.replace(/[^a-zA-Z]/g, "").toLowerCase();
                var NewClassKonstruktor = NewClassLetters + '-' + NewClassNumbers;
                $(this).addClass(NewClassKonstruktor);
            });
            $(this).find('.view-seznam-nasich-zaku table tbody tr .views-field-field-aktualni-pasek-zaka').each(function () {
                var NewClass = $(this).text();
                var NewClassNumbers = NewClass.replace(/[^0-9]/g, "");
                var NewClassLetters = NewClass.replace(/[^a-zA-Z]/g, "").toLowerCase();
                var NewClassKonstruktor = NewClassLetters + '-' + NewClassNumbers;
                $(this).addClass(NewClassKonstruktor);
            });
        }
        if ($('body.node-type-zak-skoly')) {
            $('body.node-type-zak-skoly .field-name-field-aktualni-pasek-zaka ul.links li').each(function () {
                var NewClass = $(this).text();
                var NewClassNumbers = NewClass.replace(/[^0-9]/g, "");
                var NewClassLetters = NewClass.replace(/[^a-zA-Z]/g, "").toLowerCase();
                var NewClassKonstruktor = NewClassLetters + '-' + NewClassNumbers;
                $(this).addClass(NewClassKonstruktor);
            });
        }
    });
}(jQuery));
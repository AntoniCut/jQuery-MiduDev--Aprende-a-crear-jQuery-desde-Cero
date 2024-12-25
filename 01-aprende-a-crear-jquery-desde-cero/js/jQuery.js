//  --------------------------------------------------------------------------
//  ----------  /01-aprende-a-crear-jquery-desde-cero/js/jQuery.js  ----------
//  --------------------------------------------------------------------------


//import $ from 'https://cdn.skypack.dev/jquery';

//  -----  Importación de la Libreria de jQuery  -----
import $ from '../jquery/jquery-3.7.1.js';


$(() => {

    console.warn('----- jQuery Versión: ', $.fn.jquery, ' -----');

    $('#boton1')
        .css('background', '#09f')
        .css('border', '#fff')
        .css({
            padding: 16,
            borderRadius: '4%',
            cursor: 'pointer'
        })
        .on('click', () => {
            alert('Soy un Botón!!!');
            $('#mensaje1').fadeIn(3000);
        })


    $('#lista1 li').each((index, elem) => {
        if (index === 0) $(elem).css('color', '#09f');
        if (index === 1) $(elem).css('color', 'red');
        if (index === 2) $(elem).css('color', 'blue');
    })

    $('#mensaje1').on('click', function() {
        $(this).fadeOut(3000);
    })

})

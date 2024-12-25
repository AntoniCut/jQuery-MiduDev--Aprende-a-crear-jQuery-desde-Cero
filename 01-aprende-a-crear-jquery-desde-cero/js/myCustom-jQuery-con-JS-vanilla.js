//  --------------------------------------------------------------------------------------------------
//  ----------  /01-aprende-a-crear-jquery-desde-cero/js/myCustom-jQuery-con-JS-vanilla.js  ----------
//  --------------------------------------------------------------------------------------------------


//  -----  Importación de my Libreria de jQuery  -----
import $ from '../jquery/jQueryMyCustom.js';


//  ----------------------------------------
//  ----------  Código de jQuery  ----------
//  ----------------------------------------

$(() => {           //  -----  DOMContentLoaded  -----

    $('#boton2')
        .css('background', '#09f')
        .css('border', '#fff')
        .css({
            padding: '16px',
            borderRadius: '4%',
            cursor: 'pointer'
        })
        
        .on('click', () => {
            alert('Soy un Botón!!!');
            $('#mensaje2').fadeIn(3000);
        })


    $('#lista2 li').each((index, elem) => {
        if (index === 0) $(elem).css('color', '#09f');
        if (index === 1) $(elem).css('color', 'red');
        if (index === 2) $(elem).css('color', 'blue');
    })

    $('#mensaje2').on('click', function() {
        $(this).fadeOut(3000);
    })

})

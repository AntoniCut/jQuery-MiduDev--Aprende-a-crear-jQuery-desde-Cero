//  --------------------------------------------------------------------
//  ----------  Mi Libreria de jQuery con Vanilla JavaScript  ----------
//  --------------------------------------------------------------------


const $ = (arg) => {


    let elements = HTMLElement;

    if (!elements) throw new TypeError(`El argumento proporcionado no es válido: ${arg}`);
    
    //  -----  DOMContentLoaded  -----
    if (typeof arg === 'function') {
        document.addEventListener('DOMContentLoaded', arg);
        console.warn('-----  DOM Cargado desde jQueryMyCustom.js  -----');
        return;
    }
   
    if (typeof arg === 'string') elements = document.querySelectorAll(arg);
    
    //  -----  Elemento HTML Suelto  -----
    if( arg instanceof HTMLElement ) elements = [arg]
    
    
    //  -----  Mutamos el Array --  Practica Pirata  -------------

    //  -----  Selector de CSS  --------------------------------
    elements.css = (...args) => {

        const [property, value] = args;
        const isString = typeof property === 'string';

        elements.forEach(elem => {

            if (isString) elem.style[property] = value;

            else {

                const entriesCSS = Object.entries(property);
                console.log(entriesCSS);

                entriesCSS.forEach(([property, value]) => {
                    elem.style[property] = value
                })
            }
        })

        return elements;
    }
    //  -------------------------------------------------------


    //  -----  Eventos  ----------------------------
    elements.on = (event, callback) => {

        elements.forEach(elem => {
            elem.addEventListener(event, callback)
        })

        return elements;
    }
    //  --------------------------------------------


    //  -----  each()  -----
    elements.each = (fn) => {

        elements.forEach((elem, index) => {
            fn(index, elem)
            console.log(elem)
        })

        return elements;
    }


    //  -----  fadeIn()  -----
    elements.fadeIn = (duration = 1000) => {

        elements.forEach((elem, index) => {
            const animation = elem.animate([
                { opacity: 0 },
                { opacity: 1 },
            ], {
                duration
            })

            animation.onfinish = () => elem.style.opacity = 1;
        })

        return elements;
    }


    //  -----  fadeOut()  -----
    elements.fadeOut = (duration = 1000) => {

        elements.forEach((elem, index) => {
            const animation = elem.animate([
                { opacity: 1 },
                { opacity: 0 },
            ], {
                duration
            })

            animation.onfinish = () => elem.style.opacity = 0;
        })

        return elements;
    }


    //  -----  Devolvemos TODO  -----
    return elements;
}


export default $;


//  -----------------------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------------------
//  -----------------------------------------------------------------------------------------------

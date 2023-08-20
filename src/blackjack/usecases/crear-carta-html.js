/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} elemento HTML de retorno
 */
export const crearCartaHTML = (carta) => {
    if (!carta) throw new Error('La carta un argumento obligatorio')

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}
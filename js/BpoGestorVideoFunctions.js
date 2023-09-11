function fncBsqYtClean() {
    // Limpiando Ult 
    for (const array of vUltRsltBsq) {
        for (const prop in array) {
            if (Object.prototype.hasOwnProperty.call(array, prop)) {
                array[prop] = '';
            }
        }
    }
    // Limpiando array de objeto completo 
    vaLastSrch = [];
}

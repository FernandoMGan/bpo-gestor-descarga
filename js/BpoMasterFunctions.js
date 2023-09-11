function bpoReduccionYFormateoNumero(num) {
    switch (String(num).length) {
        case 1:
        case 2:
        case 3:
            return String(num);
        case 4:
        case 5:
        case 6:
            return (num / 1000).toFixed(2) + " K";
        case 7:
        case 8:
        case 9:
            return (num / 1000000).toFixed(2) + " M";
        case 10:
        case 11:
        case 12:
            return (num / 1000000000).toFixed(2) + " KM";
        case 13:
        case 14:
        case 15:
            return (num / 1000000000000).toFixed(2) + " MM";
        case 16:
        case 17:
        case 18:
            return (num / 1000000000000000).toFixed(2) + " KMM";
        case 19:
        case 20:
        case 21:
        default:
            return "+ de " + (num / 1000000000000000).toFixed(2) + " KMM";
    }
}

const { argv } = require('./config/yargs');

const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.00000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const climaC = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${climaC} Grados Centigrados`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        console.log(`El valor introducido ${ base } debe ser un número`);
        return;
    }

    if (!Number(limite)) {
        console.log(`El valor introducido ${ limite } debe ser un número`);
        return;
    }

    console.log('========================'.green);
    console.log(`tabla de ${ base }`.green);
    console.log('========================'.green);

    for (let cont = 1; cont <= limite; cont++) {
        console.log(`${ base } x ${ cont } = ${ base * cont }`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un número`);
            return;
        }

        let data = '';

        for (let cont = 1; cont <= limite; cont++) {
            data += `${ base } x ${ cont } = ${ base * cont }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}
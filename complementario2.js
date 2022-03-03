console.log ('Arreglos');

const planes = [
    {id: 1, destino: 'Santa Marta', precio: 500000, disponibles: 10, descuento: 10},
    {id: 2, destino: 'Cartagena', precio: 600000, disponibles: 20, descuento: 10},
    {id: 3, destino: 'Eje Cafetero', precio: 650000, disponibles: 8, descuento: 10},
    {id: 4, destino: 'San Andrés', precio: 900000, disponibles: 12, descuento: 10},
    {id: 5, destino: 'Boyacá', precio: 550000, disponibles: 9, descuento: 10},
]

planes.forEach(element => {
    console.log(element.destino);
    console.log('precio con descuento ' + precioConDescuento (element.precio, element.descuento))
});

function precioConDescuento (precio, descuento) {
    return precio - ((precio * descuento) / 100)
}

const nuevoArray = planes.map (element => element.destino.toUpperCase())
console.log(nuevoArray);

const porId = planes.find (plan => plan.id == 2 )
console.log ('Búsqueda por Id: ' + porId);

const mayor700000 = planes.filter (plan => plan.precio > 700000)
console.log ('Búsqueda precio mayor a 700000: ', mayor700000 );

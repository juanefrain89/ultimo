const EJ = () => {
    const productos = [
        { id: 1, nombre: 'Producto 1', precio: 10, status: 'vendido', fechaVenta: '2024-03-25' },
        { id: 2, nombre: 'Producto 2', precio: 20, status: 'disponible' },
        { id: 3, nombre: 'Producto 3', precio: 30, status: 'disponible' },
        { id: 4, nombre: 'Producto 4', precio: 40, status: 'vendido', fechaVenta: '2024-03-24' },
        { id: 5, nombre: 'Producto 5', precio: 50, status: 'disponible' }
    ];

    
    const productosRenderizados = [];

    for (let i = 0; i < productos.length; i++) {
    if(productos[i].status === "vendido"){
        productosRenderizados.push(productos[i])
    }
    
    }
    console.log(productosRenderizados);

    return (
        <>
            
        </>
    );
}

export default EJ;

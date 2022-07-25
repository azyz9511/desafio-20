const productosDB = require('../database/productos');

const productos = {
    addProduct: async (producto) => {
            try{
                await productosDB.addNewProduct(producto);
                console.log('Producto agregado con exito');
            }catch (e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        },
    readProducts: async () => {
            try{
                const data = await productosDB.getAllProducts();
                return data;
            }catch (e){
                console.log(`aqui esta el problema: ${e}`);
                // console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        }
}

module.exports = productos;
const productosDao = require('../database/DAO/productos');
const ProductoDto = require('../database/DTO/productos');

const productos = {
    addProduct: async (producto) => {
            try{
                await productosDao.addNewProduct(producto);
                console.log('Producto agregado con exito');
            }catch (e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        },
    readProducts: async () => {
            try{
                const data = await productosDao.getAllProducts();
                const datos = data.map( elemento => {
                    const dto = new ProductoDto(elemento);
                    return dto;
                })
                return datos;
            }catch (e){
                console.log(`Ha ocurrido el siguiente error: ${e}`);
            }
        }
}

module.exports = productos;
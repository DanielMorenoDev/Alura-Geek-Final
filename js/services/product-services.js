//  URL de tu API desplegada en Vercel
const apiUrl = "https://fake-aqckwsom7-daniel-morenos-projects-771907c9.vercel.app/db.json"; 

// Funciones de la página web

//Listar los productos 
const productList = async () => {
    try {
        const res = await fetch(apiUrl);
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
};

//Crear productos
const createProducts = async (nombre, precio, imagen) => {
    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                precio,
                imagen,
            }),
        });
        // Después de crear el producto, recarga la página
        location.reload();
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
};

//Eliminacion de un producto por id
const deleteProduct = async (id) => {
    try {
        const res = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE"
        });
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
};

//Exportamos las funciones
export const servicesProducts = {
    productList,
    createProducts,
    deleteProduct,
}
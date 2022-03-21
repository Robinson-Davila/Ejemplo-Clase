

// Dom de eventos
document
.getElementById("producto-formulario")
.addEventListener("submit", function(elemento){
    elemento.preventDefault(); //Evalua el comportamiento del elemento

    //Obtener valores de formulario
    const name = document.getElementById("name").value, 
    precio = document.getElementById("precio").value,
    año = document.getElementById("año").value;

    //crear nuevo objeto producto
    const producto = new Producto(nombre, precio, año);

    //Crear nuevo usuario
    const usuario = new Usuario();

    //Boton de validacion
    if(nombre === " " || precio === " " || año === " "){
        usuario.showMessage("Por favor insertar nombre de usuario");
    }

    //Guardar Producto
    usuario.AddProducto(producto);
    usuario.showMessage("Producto agregado correctamente");
    usuario.restForm();
});

document.getElementById("Lista-producto").addEventListener("click", (elemento) =>{
    const usuario = new Usuario();
    usuario.deleteProduct(elemento.target);
    elemento.preventDefault();
});

//Producto Clase

export class Producto{
    constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}

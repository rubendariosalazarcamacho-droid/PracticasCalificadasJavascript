//Ejercicio 1 — Tarjetas de Usuarios
// Crea una función que reciba un objeto usuario con propiedades:
// { nombre, edad, pais, ...resto }.
// Desestructura las propiedades principales y usa el operador rest para capturar el resto.
// Genera dinámicamente una tarjeta en el DOM mostrando todos los datos.
// Cada vez que se invoque la función con un nuevo usuario, debe agregarse una nueva tarjeta al contenedor.

const usuarios = [
    {
        nombre: "Ana",
        edad: 28,
        pais: "Colombia",
        profesion: "Ingeniera de Software",
        telefono: "+57 300 1234567",
        email: "ana@example.com"
    },
    {
        nombre: "Luis",
        edad: 35,
        pais: "México",
        profesion: "Diseñador Gráfico",
        telefono: "+52 55 1234 5678",
        email: "luis@example.com"
    },
    {
        nombre: "Carla",
        edad: 22,
        pais: "Argentina",
        profesion: "Estudiante",
        telefono: "+54 11 1234 5678",
        email: "carla@example.com"
    },
    {
        nombre: "Pedro",
        edad: 40,
        pais: "España",
        profesion: "Chef",
        telefono: "+34 600 123 456",
        email: "pedro@example.com"
    },
    {
        nombre: "Sofía",
        edad: 30,
        pais: "Chile",
        profesion: "Médica",
        telefono: "+56 9 1234 5678",
        email: "sofia@example.com"
    }
]

const btnAgregarUsuario = document.querySelector("#btnAgregarUsuario")

function crearTarjeta({ nombre, edad, pais, ...resto }) {

    const { profesion, telefono, email } = resto
    return `
    <div class="tarjeta-usuario">
        <div class="usuario-principales">
            <p><strong>${nombre}</strong></p>
            <p>Edad: ${edad} años</p>
            <p>Pais: ${pais}</p>
        </div>
        <div class="usuario-adicionales">
            <p>Profesión: ${profesion}</p>
            <p>Teléfono: ${telefono}</p>
            <p>Email: ${email}</p>        
        </div>        
        
    </div>
    `
}

const prueba = crearTarjeta(usuarios[0])
//console.log(prueba)

const listaUsuarios = document.querySelector("#listaUsuarios")
let indice = 0
btnAgregarUsuario.addEventListener("click", () => {
    if (indice < usuarios.length) {
        listaUsuarios.innerHTML += crearTarjeta(usuarios[indice])
        indice++
    } else {
        alert("No hay mas usuarios")
    }

})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 2 — Tabla de Productos
// Crea una función renderProducto que reciba un objeto producto con propiedades:
// { nombre, precio, stock, ...rest }.
// Inserta en el DOM una fila en una tabla mostrando nombre, precio, stock y las propiedades adicionales.
// Agrega varios productos para mostrar la funcionalidad.
const productos = [
  {
    nombre: "Laptop Lenovo",
    precio: 2500,
    stock: 10,
    categoria: "Tecnología",
    descripcion: "Laptop de 14 pulgadas con 16GB RAM"
  },
  {
    nombre: "Mouse Inalámbrico",
    precio: 80,
    stock: 50,
    categoria: "Accesorios",
    descripcion: "Mouse ergonómico con conexión Bluetooth"
  },
  {
    nombre: "Teclado Mecánico",
    precio: 200,
    stock: 25,
    categoria: "Accesorios",
    descripcion: "Teclado mecánico con iluminación RGB"
  },
  {
    nombre: "Monitor 24 pulgadas",
    precio: 900,
    stock: 15,
    categoria: "Tecnología",
    descripcion: "Monitor Full HD con panel IPS"
  },
  {
    nombre: "Silla Gamer",
    precio: 1200,
    stock: 8,
    categoria: "Muebles",
    descripcion: "Silla ergonómica reclinable para escritorio"
  }
]

const filasProductos = document.querySelector("#filasProductos")
const btnAgregarProducto =document.querySelector("#btnAgregarProducto")

function crearFila ({nombre, precio, stock, ...resto}){
    const adicionales=Object.values(resto).join(" / ")

    return `
    <tr>
        <td>${nombre}</td>
        <td>$${precio}</td>
        <td>${stock}</td>
        <td>${adicionales}</td> 
    </tr>    
    `
}


let index = 0
btnAgregarProducto.addEventListener("click", () => {
    if (index < productos.length) {
        filasProductos.innerHTML += crearFila(productos[index])
        index++
    } else {
        alert("No hay mas productos para agregar")
    }

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 3 — Lista de Tareas
// Crea una función agregarTarea que reciba un objeto { titulo, descripcion, ...extra }.
// La función debe crear un <li> con la información principal y un botón “Ver más”.
// Al hacer clic en “Ver más”, mostrar en consola las propiedades adicionales (...extra).
// Mantén un array de tareas usando spread para no mutar el original.
const tareas = [
  {
    titulo: "Aprender Desestructuración",
    descripcion: "Dominar la extracción de datos en JS.",
    prioridad: "Alta",
    categoria: "Estudio",
    fechaLimite: "2023-12-01"
  },
  {
    titulo: "Comprar chocolate",
    descripcion: "Ir a la tienda por granos de especialidad.",
    prioridad: "Media",
    categoria: "Hogar",
    fechaLimite: "2023-11-25"
  },
  {
    titulo: "Gimnasio",
    descripcion: "Rutina de pierna y cardio.",
    prioridad: "Baja",
    categoria: "Salud",
    fechaLimite: "2023-11-24"
  },
  {
    titulo: "Llamar al banco",
    descripcion: "Consultar estado de cuenta.",
    prioridad: "Alta",
    categoria: "Finanzas",
    fechaLimite: "2023-11-26"
  },
  {
    titulo: "Preparar cena",
    descripcion: "Cocinar pasta con pesto casero.",
    prioridad: "Baja",
    categoria: "Hogar",
    fechaLimite: "2023-11-24"
  }
]

const listaTareas = document.querySelector ("#lista-tareas")

function agregarTarea({titulo,  descripcion, ...extra }){
     const li = document.createElement('li');

     li.innerHTML = `
        <strong>${titulo}</strong> - ${descripcion} 
        <button class="boton-ver">Ver más</button>
    `;
    const boton = li.querySelector(".boton-ver")
    boton.addEventListener("click", function(){
        console.log("propiedadesAdicionales:", extra)
    })

    listaTareas.appendChild(li)

}

const btnAgregarTarea = document.querySelector ("#btnAgregarTarea")

let indicetareas=0

btnAgregarTarea.addEventListener("click", ()=>{
    if (indicetareas < tareas.length) {
        agregarTarea(tareas[indicetareas])
        indicetareas++
    } else {
        alert("No hay mas tareas para agregar")
    }
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ejercicio 4 — Tabla de Estudiantes
// Crea una función mostrarEstudiantes(...estudiantes) que reciba varios objetos estudiantes.
// Cada estudiante tiene { nombre, edad, notas }.
// Desestructura para calcular el promedio de notas y genera dinámicamente una tabla en el DOM.
// Usa spread para agregar estudiantes sin mutar el array original.
// Bonus: agrega un botón que actualice la edad o las notas de un estudiante y vuelva a renderizar la tabla. 
const estudiantes = [
  { 
    nombre: "Ana Martínez", 
    edad: 20, 
    notas: [15, 18, 20] 
  },
  { 
    nombre: "Luis Pérez", 
    edad: 22, 
    notas: [10, 12, 14] 
  },
  { 
    nombre: "Sofía Castro", 
    edad: 19, 
    notas: [18, 19, 17] 
  },
  { 
    nombre: "Carlos Ruiz", 
    edad: 21, 
    notas: [11, 13, 10] 
  },
  { 
    nombre: "Elena Gómez", 
    edad: 23, 
    notas: [20, 15, 19] 
  }
]

 const tabla = document.querySelector("#filasEstudiantes")
 const btnCargar = document.querySelector("#btnCargarEstudiantes")

function mostrarEstudiantes(...lista) {
    
    tabla.innerHTML = ""
    
    lista.forEach(({ nombre, edad, notas }) => {
        
        const [nota1, nota2, nota3] = notas;
        const promedio = (nota1 + nota2 + nota3) / 3;

        tabla.innerHTML += `
            <tr>
                <td>${nombre}</td>
                <td>${edad}</td>
                <td>${promedio.toFixed(2)}</td>
            </tr>
        `
    })
}

btnCargar.addEventListener("click", () =>{
     mostrarEstudiantes(...estudiantesActualizados)
})

const nuevoEstudiante = { 
    nombre: "Pedro Picapiedra", 
    edad: 35, 
    notas: [10, 10, 10] 
};

const estudiantesActualizados = [...estudiantes, nuevoEstudiante];
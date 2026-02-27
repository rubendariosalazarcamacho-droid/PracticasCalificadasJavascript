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
    estado: "pendiente",
    email: "ana@example.com"
      },
  {
    nombre: "Luis",
    edad: 35,
    pais: "México",
    profesion: "Diseñador Gráfico",
    telefono: "+52 55 1234 5678",
    estado:"pagada",
    email: "luis@example.com"
  },
  {
    nombre: "Carla",
    edad: 22,
    pais: "Argentina",
    profesion: "Estudiante",
    telefono: "+54 11 1234 5678",
    estado:"pagada",
    email: "carla@example.com"
  },
  {
    nombre: "Pedro",
    edad: 40,
    pais: "España",
    profesion: "Chef",
    telefono: "+34 600 123 456",
     estado: "pendiente",
    email: "pedro@example.com"
  },
  {
    nombre: "Sofía",
    edad: 30,
    pais: "Chile",
    profesion: "Médica",
    telefono: "+56 9 1234 5678",
    estado:"pagada",
    email: "sofia@example.com"
  }
]


// function probarRest({ titulo, ...extra }) {
//   console.log("1. Titulo extraído:", titulo);
//   console.log("2. El paquete 'extra' (REST):", extra); 
// }

// // Probamos con un objeto
// probarRest({ 
//   titulo: "Aprender JS", 
//   prioridad: "Alta", 
//   dificultad: "Media", 
//   categoria: "Estudio" 
// });

const pagadas = usuarios.filter(user => user.estado === "pendiente");
console.log(pagadas);


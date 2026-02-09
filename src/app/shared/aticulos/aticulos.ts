import { Component } from '@angular/core';

@Component({
  selector: 'app-aticulos',
  imports: [],
  templateUrl: './aticulos.html',
  styleUrl: './aticulos.css',
})
export class Aticulos {
  articulos =[
    {
      id:1,
      nombre: "Celular",
      descripcion: "Honor",
      imagen:"https://laganga.com/media/catalog/product/cache/48ac97e70dc64bafe85e6c37e44b155d/8/4/842_1.jpeg",
      precio:650,
      activo: true
    },
    {
      id:2,
      nombre: "Celular",
      descripcion: "Iphone Apple",
      imagen:"https://lavictoria.ec/wp-content/uploads/2025/01/IPHONE-16-DE-128GB-MYE93BE-A-BLANCO-APPLE-1.jpg",
      precio:850,
      activo: false
    },
    {
      id:3,
      nombre: "Computador",
      descripcion: "portátil HP",
      imagen:"https://almacenesfamiliar.com/wp-content/uploads/2025/02/COMPUTADOR-PORTATIL-HP-CI7-250-G10-1355U-16GB512BSSD-15.6.png",
      precio:650,
      activo: true
    },
    {
      id:4,
      nombre: "Computador",
      descripcion: "Computador de escritorio",
      imagen:"https://images.unsplash.com/photo-1587831990711-23ca6441447b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JkZW5hZG9yJTIwZGUlMjBtZXNhfGVufDB8fDB8fHww",
      precio:550,
      activo: false
    },
    {
      id:5,
      nombre: "Periféricos",
      descripcion: "Las herramientas de entrada como mause, teclados, micrófonos, etc",
      imagen:"https://i.pinimg.com/736x/92/3f/64/923f64c4b718c3659b36a86fc71b86f2.jpg",
      precio:250,
      activo: true
    },
    {
      id:6,
      nombre: "Hardware",
      descripcion: "Componentes de piezas de un portátil",
      imagen:"https://www.apen.es/wp-content/uploads/2017/11/que-es-el-hardware.jpg",
      precio:40,
      activo: true
    },
    {
      id:7,
      nombre: "Periféricos",
      descripcion: "Tecnología de salida como audífonos, monitor, impresoras, etc.",
      imagen:"https://www.cavsi.com/espanol/wp-content/uploads/perifericos/perifericos-salida.jpg",
      precio:450,
      activo: true
    },
    {
      id:8,
      nombre: "Entrenamiento",
      descripcion: "Equipo completo para gamers",
      imagen:"https://i.blogs.es/ed843e/superpc-ap/1366_2000.jpeg",
      precio:800,
      activo: false
    },
    {
      id:9,
      nombre: "Entrenamiento",
      descripcion: "Tecnología para los tiempos libres, drones",
      imagen:"https://uavlatam.com/wp-content/uploads/2022/04/pexels-peter-fazekas-997130-1024x682.jpg",
      precio:80,
      activo: true
    },
    {
      id:10,
      nombre: "Entrenamiento",
      descripcion: "CPUs para gamers.",
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQncLuPBvdBPVL5n6Uwvn9Wok-SDUKv68rg&s",
      precio:750,
      activo: false
    },
    {
      id:11,
      nombre: "Entrenamiento",
      descripcion: "Para tiempos libres, gafas realidad virtual",
      imagen:"https://i.blogs.es/09cbbb/realidad-virtual/1366_2000.jpg",
      precio:50,
      activo: true
    },
    {
      id:12,
      nombre: "Computador",
      descripcion: "Intel Icore i5",
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTFpP5znLQf81M2xfX6E6xTZ6jElUpFGePQ&s",
      precio:450,
      activo: true
    },
  ];

  aFiltro= this.articulos

  artSelect : string="Aún sin seleccionar";

  seleccion(articulo: string){
    this.artSelect = articulo;
  };

  buscar(event: Event){
    const aBusqueda = (event.target as HTMLInputElement).value;
      this.aFiltro = this.articulos.filter(
      i => i.nombre.toLocaleLowerCase().includes(aBusqueda.toLocaleLowerCase())
    )
  }

}

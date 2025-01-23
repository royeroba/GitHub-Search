# Proyecto: Buscador de Repositorios en GitHub

## Instrucciones para ejecutar el proyecto

### Instalación de dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
cd github-search
```

```bash
npm install
```

### Iniciar el servidor de desarrollo

Para iniciar el servidor de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

---

## Resumen del proyecto

Este proyecto es una aplicación que permite buscar repositorios en GitHub utilizando la API oficial. Está construido con las siguientes tecnologías y herramientas:

- **Vue 3** con **TypeScript**
- **Pinia** para la gestión de estado global
- **TailwindCSS** para estilos responsivos
- **Axios** para realizar peticiones HTTP
- **Vue Router** para la gestión de rutas

### Funcionalidades implementadas:

- Se creó el store de Pinia para manejar la lógica y el estado global de manera centralizada.
- Componentes reutilizables y escalables, como:
  - `InputSearch`: Para ingresar términos de búsqueda.
  - `ErrorModal`: Para mostrar mensajes de error.
  - `Hero`: Para la cabecera principal de la aplicación.
  - `RepositoryList`: Para listar los repositorios obtenidos de la API.
  - `SearchHistory`: Para mostrar y gestionar el historial de búsquedas.
  - `Spinner`: Para indicar estados de carga.
- Los componentes se comunican entre sí mediante props y eventos emit (`emit`).
- Vista principal `HomeView` que renderiza todos los componentes mencionados.
- Configuración de una `baseURL` de Axios para gestionar las peticiones HTTP.
- Archivo de tipos (`types.ts`) para centralizar y gestionar el tipado de TypeScript.

---

## Decisiones técnicas importantes

- Se utilizó **TailwindCSS** para diseñar una interfaz responsiva siguiendo el enfoque _mobile-first_.
- La lógica de la aplicación se dividió cuidadosamente entre los componentes y el store de Pinia, asegurando un código limpio y escalable.
- El historial de búsquedas se almacena de manera persistente en `localStorage`.

---

## Limitaciones conocidas y áreas de mejora

- **Paginación**: Hubo dificultades en la implementación debido a la gran cantidad de resultados devueltos por la API. Aunque logré visualizar correctamente el número total de páginas, no logré completar la funcionalidad de cambio de página dentro del tiempo establecido para la prueba.
- **Tiempo de desarrollo**: Excedí un poco el tiempo estimado tratando de resolver el problema de la paginación, lo que afectó el enfoque en otras posibles mejoras.

---

## Mejoras futuras

- Finalizar la implementación de la paginación para que funcione correctamente.
- Mejorar la gestión de errores para abarcar más casos posibles.
- Optimizar el rendimiento al manejar grandes cantidades de resultados en las peticiones de la API.

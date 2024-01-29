# Rest Api Hexagonal

Comando principales para ejecutar:

Inicia el server con la app ToDo + arquitectura hexagonal

```sh
npm run dev
```

`npm run eslint` Ejecuta el eslint

`npm test` Ejecuta el test

## Que es una API REST?

Una API REST es una interfaz de comunicacion del lado del servidor que se comunica con el navegador (Cliente) mediante los endpoint y devuelve respuestas, archivos, estados, etc.

Utiliza los metodos HTTP:

- GET
- POST
- DELETE
- PUT

## Que es la arquitctura hexagonal?

Es una arquitectura de sofware que trata de distribuir un proyecto en 3 niveles de compromiso:

![foto hexagonal](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*LpmkeWbePqKAgVm07ORlxg.png)

Los niveles tienen una intencionanilidad de poder trabajar de manera abstracta y classificar el proyecto según esto, para así, poder llevarlo a un nivel de modularidad que facilite cualquier actualización/cambio de consulta de datos, interfaz, endpoints, etc.

Nuestro API Rest será sobre una aplicacion `ToDo List` en la que implementaremos el CRUD con clases y utilizando express como framework.

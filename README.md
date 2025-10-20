# Minicore para el cálculo de comisiones de empleados

[![Laravel](https://img.shields.io/badge/Laravel-12-red.svg)](https://laravel.com/)
[![PHP](https://img.shields.io/badge/PHP-8.4-blue.svg)](https://www.php.net/)
[![Tests](https://github.com/joseenrique61/mvc-minicore/actions/workflows/tests.yml/badge.svg)](https://github.com/joseenrique61/mvc-minicore/actions/workflows/tests.yml)

## Índice

- [Índice](#índice)
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Estado del proyecto](#estado-del-proyecto)
- [Acceso al proyecto](#acceso-al-proyecto)
    - [Requisitos](#requisitos)
    - [Instalación](#instalación)
    - [Ejecución](#ejecución)
    - [Ejecución con Docker](#ejecución-con-docker)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Personas Desarrolladoras del Proyecto](#personas-desarrolladoras-del-proyecto)
- [Licencia](#licencia)

## Descripción del Proyecto

Este es un minicore que calcula comisiones para los empleados de una tienda. Fue desarrollado utilizando Laravel 12, PHP 8.4, y React con TypeScript. Para el frontend, se utilizó Sass con la notación BEM para el estilo.

## Estado del proyecto

El proyecto se encuentra actualmente en desarrollo.

## Acceso al proyecto

### Requisitos

- PHP >= 8.4
- Composer
- Node.js
- npm
- Docker (opcional)

### Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/joseenrique61/mvc-minicore.git
    ```

2. Instala las dependencias de PHP:

    ```bash
    composer install
    ```

3. Instala las dependencias de Node.js:

    ```bash
    npm install
    ```

4. Crea una copia del archivo de entorno:

    ```bash
    cp .env.example .env
    ```

5. Genera una nueva clave de aplicación:

    ```bash
    php artisan key:generate
    ```

6. Configura tu base de datos en el archivo `.env`.

7. Ejecuta las migraciones de la base de datos:

    ```bash
    php artisan migrate
    ```

8. Ejecuta los seeders para poblar la base de datos con datos de ejemplo:

    ```bash
    php artisan db:seed
    ```

### Ejecución

Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

```bash
composer run dev
```

Esto iniciará el servidor de desarrollo de Vite y el servidor de Laravel. Puedes acceder a la aplicación en `http://localhost:8000`.

### Ejecución con Docker

También puedes ejecutar el proyecto utilizando Docker.

1. Construye la imagen de Docker:

    ```bash
    docker build -t mvc-minicore .
    ```

2. Ejecuta el contenedor:

    ```bash
    docker run -p 8080:80 mvc-minicore
    ```
Puedes acceder a la aplicación en `http://localhost:8080`.


## Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
php artisan test
```

## Tecnologías utilizadas

- [Laravel](https://laravel.com/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [PHP](https://www.php.net/)
- [Sass](https://sass-lang.com/)
- [BEM](https://getbem.com/)

## Personas Desarrolladoras del Proyecto

[<img src="https://www.github.com/joseenrique61.png" width=115><br><sub>José Enrique Cerezo</sub>](https://github.com/joseenrique61)

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
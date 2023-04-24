# Proyecto Integrador - Alan Luna

La App se centra en Rick And Morty, mostrando sus personajes.

## Que tecnologias se utilizaron?

* Visual Studio Code
* React
* Node JS
* Axios
* Redux
## Cómo se usaron las tecnologias?
Para el desarrollo de la aplicación, se optó por utilizar React para la capa de presentación y Node para el servidor. En la parte del servidor, se realizó la conexión con la API de Rick and Morty, y se modularizó el código para crear diversas funcionalidades. Por otro lado, en la capa de presentación, se consumió la información provista por el servidor, y se mostró mediante diferentes componentes.
## Como se implementaron las mismas?
En la parte del servidor, se modularizaron las rutas para mejorar la organización del código. Se crearon tres controladores: "GetCharById", utilizado para obtener información de un personaje a partir de su ID; "handleFavorites", utilizado para agregar o eliminar personajes de la lista de favoritos; y el controlador de inicio de sesión, el cual verifica las credenciales del usuario para permitir el acceso a la aplicación.

En la capa de presentación, se desarrollaron varios componentes, destacando entre ellos: "Card", "SearchBar" y "Favorites". El componente "Card" se utilizó para iterar sobre el conjunto de personajes que se obtienen mediante el componente "SearchBar", el cual consume la información provista por el controlador "GetCharById" a través de la biblioteca "axios". Por otro lado, el componente "Favorites" utiliza el controlador "handleFavorites" para añadir o eliminar personajes de la lista de favoritos.

En la capa de datos, se utilizó Redux como sistema de almacenamiento global, empleando sus "actions" y "reducers". Se crearon diferentes arrays para almacenar los personajes agregados y los que se agregaron a favoritos.
## Como utilizar al codigo en tu computadora
*  Clona el repositorio con el siguiente comando en tu terminal:
```bash
git clone https://github.com/AlanLuna-00/rickandmorty-m2.git
```
* Instala NPM con el siguiente comando:
```bash
npm install
```
* Para hacer funcionar la aplicación, debes ejecutar dos comandos:

Dirígete a la carpeta ./client y ejecuta el siguiente comando para correr la app de React:
```bash
npm start
```
Dirígete a la carpeta ./server y ejecuta el siguiente comando para correr el servidor con nodemon:
```bash
npm run dev
```
### ¡Listo! La aplicación está corriendo, con el front-end en el puerto 3000 y el servidor en el puerto 3001.
```javascript
console.log('Gracias por ver - Alan')
```

<h1>Notas React</h1>
<a href="https://jonmircha.com/react">Notas de Jon Mircha</a>

<h2>JSX:</h2>

* Todo elemento JSX debe estar enpaquetado en un elemento contenedor.

* Para pasarle algo que no sea string a una propiedad de un componente, debemos utilizar las llaves y mandar, por ejemplo, un número o una cadena.

* Para mandar un objeto como propiedad de un componente, debo abrir llaves 2 veces, una para mandar, y otra para denotar que lo que mandamos es un objeto.

* Puedo pasar elementos react a traves de las props.

<h2>COMPONENTES:</h2>

* El estado de un componente son las variables del mismo.

* Las props son objetos que se le pasan a los componentes.

* Los componentes tienen un objeto: Component.defaultProps   Que es un objeto con las props por defecto que podemos elegir, se puede utilizar para poner dichas props y se puede acceder a ellas a travez del objeto que recibe la función por parametro.

* Para poder darle tipos o hacer que ciertas propiedades de un componente sean opcionales o requeridas, puedo instalar la dependecia "propTypes", puedo buscar su documentacion en NPM.

<hr>

<h2>State:</h2>

* Los estados son las variables que intervienen en la lógica del componente.

* Los estados se propagan desde los elementos padres a los hijos. El estado de un componente padre, se puede pasar como propiedad a sus componentes hijos.

* Cuando cambio el estado de un componente, se renderiza el componente. 

* En una componente de clase, para poder acceder a la misma clase a travez de un evento, debo utilizar bind para asignarle al operador this del entorno de la función el this de la clase. 

<hr>

<h2>Comunicacion entre componentes:</h2>
* Los componentes se pueden comunicar mandando datos por el prop a sus hijos.

* Tambien se pueden enviar variables de estado para desencadenar eventos en sus eventos hijos, los cuales se veran reflejados en si mismo.

* Otra forma sería buscar algun patron de diseño para poder compartir informacion entre varios componentes.

* A travez de los portales podría mandar informacion entre componentes que no sean padres e hijos, pero que pertenezcan a la misma aplicacion.

* La mejor manera de comunicar estos componentes es a travez de Redux o la API Context.

<hr>

<h2>Ciclo de vida de los Componentes</h2>

* El metodo render es llamado cada vez que se actualiza un componente.

<hr>

<h2>Hooks:</h2>

* Con estas funciones, dotamos a los componentes funcionales de ciclo de vida y estados.

* Nuestro codigo será mas corto y facil de escribir y leer trabajando con hooks.

* <h3>useState</h3>

  * Devuelve dos valores, el estado y el actualizador del estado.

  * React recomienda que por cada estado, usemos useState para definirlo y actualizarlo.

* <h3>useEffect</h3>
  
  * Nos permite usar el ciclo de vida de un componente de clase.

  * Para ejecutar una sola vez un efecto, puedo dejar la lista de dependencias vacía.

  * Si quiero que el componente se actualice al variar cualquiera de sus estados, no pongo la lista de parametros en la funcion.

<hr>

<h2>Referencias:</h2>

* Las referencias sirven para no tener que renderizar de nuevo un elemento al cual queremos cambiar de estados.

* Creamos referencias en componentes de clases con el metodo createRef.

* Creamos referencias en componentes funcionales con el metodo useRef.

* Las referencias contienen dentro de su propiedad current una referencia a un objeto en el DOM, 

<hr>

<h2>Formularios:</h2>

* Los valores por defecto se ponen en los inputs con los atributos con prefijo default, por ejemplo: defaultValue, defaultChecked, etc.

* Para controlar los eventos, puedo usar los manejadores de estado de react a travez de los estados o con las referencias.

* Puedo asignarle un eventHandler a un form mediante el atributo <b>onSubmit</b>.

* Puedo manejar el estado de los inputs a travez la fucncion <b>onChange</b>

* Podría controlar el estado de un formulario con una sola variable, que tenga todos los estados de los inputs. De esta manera podría poner muchos inputs sin la necesidad de escribirlo todo. Para este caso debo generar un solo manejador de estado para todos los inputs y otro para los checked.

<hr>

<h2>Estilos:</h2>

* Se sugiere poner el mismo nombre al archivo CSS y al componente, y que lo pongamos en la misma carpeta.

* Los estilos en linea se expresan como objetos dentro del atributo <b>style<b> del componente.

* Puedo agregar la hoja de estilos normalize escribiendo la linea <b>@import-normalize;</b> en la hoja de estilos de la aplicacion (index.css).

* Podemos tratar los estilos css como modulos. Esto me permite agregar las clases del modulo a los componentes como propiedades. Tambien hará que las clases agreguen caracteres aleatorios al final para tener mas especifidad para el navegador. 

<hr>

<h2>Otros:</h2>

* Cuando quiero hacer peticiones http, lo mejor es tener un archivo por separado que se encargue de hacer la consulta al servicio.

* Cuando renderizamos un componente a traves de un Array.map, cada elemento debería tener una key propia para poder renderizar de forma eficiente dicho componente.

* La dependencia me permite renderizar mas de una vez un componente si cambia el estado de un componente, dicho estado debe ser una dependencia del useEffect.

* Cuando el estado de un componente depende de una variable que pasamos como parametro del mismo componente, debemos agregar la dependencia en el segundo parametro de useEffect.

* Investigar como hacer paginacion.

* Link utiliza el historial del navegador para no tener que descargar todos los contenidos de nuevo en el navegador y no cargue los contenidos de la página.

<hr>
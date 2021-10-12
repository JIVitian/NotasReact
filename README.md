<h1>Notas React</h1>

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

<hr>

<h2>Otros:</h2>

* Cuando quiero hacer peticiones http, lo mejor es tener un archivo por separado que se encargue de hacer la consulta al servicio.

* Cuando renderizamos un componente a traves de un Array.map, cada elemento debería tener una key propia para poder renderizar de forma eficiente dicho componente.

* La dependencia me permite renderizar mas de una vez un componente si cambia el estado de un componente, dicho estado debe ser una dependencia del useEffect.

* Cuando el estado de un componente depende de una variable que pasamos como parametro del mismo componente, debemos agregar la dependencia en el segundo parametro de useEffect.

* Investigar como hacer paginacion.

* Link utiliza el historial del navegador para no tener que descargar todos los contenidos de nuevo en el navegador y no cargue los contenidos de la página.

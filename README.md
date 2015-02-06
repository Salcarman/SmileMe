# [SmileMe](https://app-smileme.herokuapp.com/)
#### Proyecto para la asignatura de Implementación e Implantación de Sistemas Software

### Capturas
#### iPad
![Captura desde iPad](https://photos-3.dropbox.com/t/2/AADOx9-_q2c1xvjioilwHiaJV2eeS6EO6N-TH6wNUXqveA/12/116037006/png/1024x768/3/1423094400/0/2/Chrome2.png/CI6rqjcgASACIAMoASgC/gVZWn16leTN8g8j2Hguyaqxr3b8e74etO70BNX78tWA)

#### Portátil
![Captura desde Portátil](https://photos-3.dropbox.com/t/2/AADOx9-_q2c1xvjioilwHiaJV2eeS6EO6N-TH6wNUXqveA/12/116037006/png/1024x768/3/1423094400/0/2/Chrome2.png/CI6rqjcgASACIAMoASgC/gVZWn16leTN8g8j2Hguyaqxr3b8e74etO70BNX78tWA)



### Integrantes del grupo:
+ Felipe Bedoya Castaño
+ Manuel Bonat Lucia
+ Salvador Carmona Román

## Documentación

## Índice de contenidos
#### <a href="#lnk1">1.Introducción</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk1.1">1.1 Motivación</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk1.2">1.2 Descripción del sistema</a>
#### <a href="#lnk2">2.Planteamiento</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk2.1">2.1 Organización de tareas</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk2.2">2.2  Etapas de ejecución del proyecto</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk2.3">2.3 Sistemas para el desarrollo de la aplicación web</a>
#### <a href="#lnk3">3. Requisitos y análisis</a>  
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk3.1">3.1  Requisitos funcionales</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk3.2">3.2  Requisitos no funcionales</a>   
#### <a href="#lnk4">4. Despliegue</a>
#### <a href="#lnk5">5. Automatización de tareas</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk5.1">5.1 Compilación automática de less a css</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk5.2">5.2 Concatenación de css y javascript</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk5.3">5.3 Minificación de css y javascript</a>
#### <a href="#lnk6">6. Pruebas</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk6.1">6.1 Pruebas unitarias</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk6.2">6.2 Pruebas E2E</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk6.3">6.3 Pruebas de verificación html y css</a>  
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk6.3.1">6.3.1 Verificación HTML</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#lnk6.3.2">6.3.2 Verificación CSS</a>
#### <a href="#lnk7">7. Bibliografía</a>

----------------------------------------------------------------------------------

## Historial de cambios

 * 05-02-2015   v0.7.1   Pruebas E2E.
 * 03-02-2015   v0.7.0   Despliegue en Heroku.
 * 01-02-2015   v0.6.0   Pruebas unitarias, correción de diseño, inclusión de servicios  ofertados, galeria.
 * 21-01-2015   v0.4.0   Automatización de tareas.
 * 14-01-2015   v0.3.0   Uso de plantilla.
 * 07-01-2015   v0.2.0   Persistencia, información se guarda en base de datos.
 * 27-12-2014   v0.1.1   Inyección de vistas, formulario.
 * 03-12-2014   v0.1.0   Comienzo del proyecto, trabajo en progreso.
 
 ------------------------------------------------------------

#### <a name="lnk1">1. Introducción</a>

SmileMe está formado por un grupo de jóvenes con muchas ganas de hacer reír a los niños. Este grupo trabaja en comuniones, reuniones, fiestas, etc. Siempre estando relacionado con la animación infantil y deportiva.

#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk1.1">1.1 Motivación</a>

>Ofrecer un portal web elegante y vistoso que permita consultar sobre los servicios que SmileMe oferta y acceder a estos de una manera fácil y rápida para los clientes. Ya sea recorriendo el catálogo de servicios o enviando una pregunta directamente.

#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk1.2">1.2 Descripción del sistema</a>

>Aplicación web que dará información sobre los servicios ofrecidos por la empresa Smileme, con la posibilidad de que el sistema pueda poner en contacto al cliente con la empresa Smileme.

#### <a name="lnk2">2.Planteamiento</a>

#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk2.1">2.1 Organización de tareas</a>

>El reparto de tareas se ha realizado de la manera más equitativa posible. A continuación se detalla dicho reparto:

>**Salvador Carmona**: coordinación general. Persistencia del sistema, implementando el almacenamiento de información en base de datos. Desarrollo general de HTML, CSS y Javascript. Implementación y prueba de automatización de tareas. Redacción de documentación.

>**Felipe Bedoya**:  Desarrollo general de HTML, CSS y Javascript. Aportación de contenido a la web, servicios de la empresa, imágenes, diseño de vistas. Redacción de documentación. Despliegue de la aplicación web sobre Heroku.

>**Manuel Bonat**: Desarrollo general de HTML y Javascript. Implementación del sistema de vistas. Implementación y prueba de automatización de tareas. Implementación y automatización de pruebas unitarias y E2E. Redacción de documentación.

#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk2.2">2.2  Etapas de ejecución del proyecto</a>

>**Entrevista con el cliente**: antes de hacer nada, se realizó una entrevista al cliente con la que poder determinar los requisitos que tendría que cumplir la web.

>**Redacción de una primera versión de la documentación**: esta versión contiene una serie de requisitos iniciales, recogidos de la entrevista.

>**Determinar el reparto de tareas**: entre los integrantes del grupo se debatió qué tareas le corresponden a cada uno.

>**Determinar herramientas a usar**: Se eligieron las herramientas aprendidas en clase como Yeoman, Heroku, NodeJS, AngularJS, etc.

>**Comienzo del desarrollo de la web**: gracias a Yeoman el inicio del desarrollo fue cómodo y pudimos concentrarnos en añadir contenido y cumplir con los requisitos iniciales. Primero se implementó el formulario de la sección contacto seguido del sistema de vistas mediante el uso de Angular.

>**Implementación de la persistencia**: Para almacenar los mensajes de contacto se utilizó formato json para estructurar los datos y una base de datos no relacional, en nuestro caso, hemos usado MongoDB y el servicio en la nube de MongoLab para su gestión.

>**Cumplir nuevos requisitos**: el cliente nos pidió requisitos adicionales, tales como banners en la página de inicio. Se optó por utilizar una plantilla de Bootstrap que nos permitiría tener un Responsive Design y un slider o carousel en la página principal, además de un aspecto minimalista y moderno. Todo esto acompañado de la redacción de una nueva versión de la documentación.

>**Automatización de tareas**: Grunt nos permite automatizar tareas tales como la compilación de archivos .less a .css o la minificación de archivos CSS, para ello tuvimos que recurrir a varias páginas con información sobre la configuración del archivo Grunfile.js y búsqueda de librerías para dichas funcionalidades.

>**Pruebas unitarias**: Implementación de pruebas para comprobar la corrección de los patrones que validan si una consulta del formulario es válida o no. Se usó Karma y su plugin Jasmine.

>**Despliegue en servidor**: Se usa Heroku para el despliegue de la web y poder hacer así la prueba en un servidor.
    
>**Validación de HTML y CSS**: Comprobación de que el código se ciñe a los estándares.

>**Pruebas E2E**: Implementación de las pruebas e instalación de herramientas necesarias para su ejecución.

#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk2.3">2.3 Sistemas para el desarrollo de la aplicación web.</a>

>Para el desarrollo del proyecto se ha utilizado la herramienta de ensamblaje Yeoman, compuesto por tres tipos de herramientas:

>>Yo: Proporciona herramientas de scaffolding.

>>Grunt: Para la ejecución de tareas, construcción, previsualización, y probar los avances del proyecto, además de la automatización de tareas.

>>Bower y nmp: Administradores de paquetes, dependencias de la página.

>Para el desarrollo del código HTML nos hemos ayudado del framework AngularJS, que ayuda a la legibilidad y mejora del código.

>Para la creación y manejo de base de datos instalamos MongoDB packages mediante la terminal.

>Para el despliegue de la aplicación sobre Heroku, se necesitaba instalar heroku toolbelt mediante la terminal.

>Además de esto, los integrantes del equipo de desarrollo del proyecto, han usado el programa Brackets con el plugin de git para actualizar los cambios en el repositorio alojado en GitHub.

>Todo el equipo trabajó sobre un sistema operativo Linux.

#### <a name="lnk3">3. Requisitos y análisis</a>
#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk3.1">3.1 Requisitos funcionales</a>

>Página de bienvenida
>>En esta página se mostrará a grandes rasgos los servicios ofrecidos por SmileMe, además de la experiencia y calidad que los avala. Por otro lado, se da la bienvenida y se invita al visitante a que explore el sitio web por sus distintas secciones.

>Sección de contacto
>>Página compuesta por un formulario a rellenar para la consulta de información concreta.

>Sección de galería
>>Página para mostrar los trabajos llevados a cabo por SmileMe con fotografías de las actividades.

>Sección acerca de
>>Página dónde se muestra la historia de SmileMe y su trayectoria profesional.

>Sección servicios
>>Conjunto de páginas donde se informa de los distintos servicios ofrecidos al público.

>>Dichos servicios son:
>>>+ Cumpleaños y comuniones
>>>+ Alquiler de material
>>>+ Excursiones

#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk3.2">3.2 Requisitos no funcionales</a>

>**Minificación de recursos**
>>Se ha minificado los recursos javascript y css para que el tiempo de carga sea el menor posible.

>**Framework Javascript**
>>Se ha usado el framework javascript AngularJS para el desarrollo de la aplicación web.

>**Framework CSS**
>>Se ha usado el framework Bootstrap 3 para ofrecer un diseño más profesional y actual al sitio web.

>**Responsive Design**
>>Se ha utilizado el Grid System de Bootstrap 3 para adaptar la visibilidad del sitio a todo tipo de dispositivos, PCs, tablets o móviles.

#### <a name="lnk4"> 4. Despliegue </a>

>Para el despliegue de la web usamos Heroku. A continuación, se detallan los pasos que fueron necesarios seguir para el correcto funcionamiento.

>**Primer paso.**
Para subir nuestra aplicación Angular a Heroku tuvimos la necesidad de añadir las siguientes dependencias para el servidor: Gzippo, Morgan y Express

>Pues bien, instalamos mediante nuestra terminal las dependencias con el comando:
	
>>		npm install gzippo express morgan --save

>Una vez instaladas, el siguiente paso es crear un fichero para el servidor en el directorio raíz, a este fichero
le daremos el nombre, por ejemplo, de web.js. El contenido de este fichero es básico:

>>    
    var gzippo = require('gzippo');
    var express = require('express');
    var morgan = require('morgan');
    var app = express();
>>
    app.use(morgan('dev'));
    app.use(gzippo.staticGzip("" + __dirname + "/dist"));
    app.listen(process.env.PORT || 5000);


>Una vez que hemos creado el fichero para el servidor, nosotros necesitamos que grunt nos construya el directorio /dist
para ello usaremos en nuestra consola de comando y estando sobre nuestro proyecto, en este caso realizado con Yeoman, el siguiente comando:

>>				grunt build

>Con esto, grunt creará la carpeta /dist con el contenido de nuestra aplicación a desplegar en Heroku.

>**Segundo paso.**
Esto es algo que en nuestro caso no nos ocurrió, pero había que comprobarlo. Por defecto en el fichero oculto .gitignore puede incluirse el directorio dist, si es así, deberemos borrarlo del fichero ya que Heroku usa el
protocolo git para el despliegue. Guardar los cambios y cerramos.

>Ahora abrimos de nuevo un terminal y entramos en la carpeta de nuestro proyecto y creamos un repositorio git, haciendo
uso del comando:
>>				git init

>Además de un repositorio git necesitamos crear un Procfile, que Heroku utiliza para comprender cómo iniciar la aplicación. Pues bien, creamos en el direcorio raíz el Procfile al igual que hicimos con web.js, e incluímos la siguiente línea:

>>				web: node web.js

>Cerramos y guardamos.

>**Tercer Paso.**
El siguiente paso es crear nuestra aplicación Heroku. Es importante saber que debemos tener creada una cuenta en Heroku
y tener instalado el Heroku Toolbelt. Si tenemos todo, ejecutamos la linea de comando en nuestra terminal

>>				Heroku login


>y se nos pedirá nuestro email y contraseña para identificarnos en Heroku. Una vez identificados ejecutamos

>>				heroku create app_nombre

>donde "app_nombre" lo sustituiremos por el nombre de nuestra app.


>**Cuarto Paso.**
Ahora el siguiente paso es realizar un commit de todo el código y hacer un push en Heroku. Ejecutamos los siguientes
comandos:

>>			git add .

>>			git commit -m "Creación de app angular para el proyecto de ISS"

>>			git push heroku master



>Una vez que git y el servidor terminan de realizar sus operaciones necesitamos al menos un proceso de Heroku que nos de servicio para ejecutar la aplicación, esto lo haremos con el siguiente comando:

>>				Heroku ps:scale web=1

>Una vez hecho esto, nuestra aplicación debería estar ejecutandose sobre la dirección app_nombre.herokuapp.com

>Para comprobarlo, basta con ejecutar desde la terminal el comando:

>>				heroku open

>Entonces se nos abre una ventana del navegador y podremos ver nuestra aplicación desplegada sobre Heroku.

#### <a name="lnk5">5. Automatización de tareas</a>

>Se ha utilizado la herramienta Grunt para la automatización de tareas que se detallan a continuación.
    
#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk5.1">5.1 Compilación automática de less a css</a>

>Se ha usado un preprocesador CSS llamado less para la personalización del framework css Bootstrap 3, mediante el cual se compila los ficheros fuente en formato less de Bootstrap 3 junto con los ficheros de personalización.

>Para automatizar esta tarea, para que cada vez que se produzca un cambio en algún fichero less se compile automáticamente para generar los ficheros css correspondientes, se ha utilizado la biblioteca grunt-contrib-less.

#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk5.2">5.2 Concatenación de css y javascript</a>

>La idea ha sido mantener todos los recursos css y javascript en la menor cantidad posible de ficheros. Por tanto, se ha optado por unificar, tanto por un lado los ficheros css referente a bootstrap y su personalización, como por otro lado, los ficheros javascript referente a la aplicación en angularjs junto a sus controladores, en un único fichero.

>Para automatizar esta tarea, se ha definido en el fichero Gruntfile.js para que cuando se produzca un cambio en los ficheros css o cuando se ejecuta la orden build, se lleve a cabo la unificación. Se ha utilizado la biblioteca grunt-contrib-concat.

#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk5.3">5.3 Minificación de css y javascript</a>

>Para un entorno de desarrollo, tanto los ficheros css y javascript se usan siguiendo una estructura legible para que sea más sencillo su edición, pero para un entorno de producción, lo interesante es que dichos recursos ocupen la mínima cantidad de recursos posible para conseguir que el tiempo de carga del sitio web sea el mínimo posible, además de que en este entorno la legibilidad del código no es tan importante.

>Por ello, se ha automatizado una tarea para que una vez se ha compilado los ficheros less a css, se han unificado tanto los ficheros css como javascript, se minifiquen generando ficheros *.min.css y *.min.js para el css y javascript respectivamente. Para ello se ha utilizado la biblioteca grunt-contrib-uglify y grunt-contrib-cssmin.


####<a name="lnk6">6. Pruebas</a>

#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk6.1">6.1 Pruebas unitarias</a>

>Se ha realizado pruebas unitarias sobre el formulario de contacto, donde se comprueban las expresiones regulares que deben pasar los distintos campos que componen el formulario. Solo se necesitó escribir un archivo form.js en la ruta test/spec/controllers y usando el comando grunt test se ejcutaban dichas pruebas. El test se compone de cuatro pruebas, dos sobre el campo email y dos sobre el campo teléfono.

#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk6.2">6.2 Pruebas E2E</a>

>Para las pruebas E2E, se usó Protractor, un framework para testeo end-to-end par AngularJS. En estas pruebas se comprueba que al enviar una consulta por el formulario, se envia correctamente mostrando su correspondiente mensaje en la página. Para ello primero se comprueba que dicho mensaje no se muestra, se rellena el formulario y se hace click en el botón de enviar para a continuación comprobar que el mensaje se muestra.

>A continuación se detallan los pasos a seguir para la instalación de plugins y frameworks necesarios para la automatización de ejecución de las pruebas. 

>Primero instalamos Protractor globalmente con el sigueinte comando:

>>  
    npm install -g protractor
    
>Descargamos los binarios necesarios para tener un servidor de Selenium sobre el que realizar las pruebas.

>>  
    webdriver-manager update
    
>Y ejecutamos el servidor con:

>>  
    webdriver-manager start

>Una vez hecho esto, podemos proceder a escribir los tests. Para realizar estas pruebas se crearon dos archivos, conf.js, que contiene la configuración del test y todo-spec.js que contiene la prueba en si y se guardaron en la carpeta test. Una vez creados, si accedemos por consola a dicha carpeta y ejecutamos: 

>>  
    Protractor todo-spec.js
    
>se nos abrira el navegador y observaremos como se rellena el formulario y se envia la consulta satsifactoriamente. Y en consola se muestra el exito/fallo de los asertos escritos en todo-spec.js.

>Lo siguiente es hacer posible la ejecución de estas pruebas mediante grunt. Para ello necesitamos crear una nueva tarea en Gruntfile.js que nos lo permita. Primero instalamos grunt-protractor-runner:

>>  
    npm install grunt-protractor-runner --save-dev
    
>Y lo activamos dentro del Gruntfile.js escribiendo dentro lo siguiente:

>>  
    grunt.loadNpmTasks('grunt-protractor-runner');
    
>A continuación escribimos dentro del bloque grunt.initConfig la tarea "protractor" que se ejecutará para realizar las pruebas mediante el comando grunt test.

>>  
    protractor: {
        options: {
          configFile: "node_modules/protractor/example/conf.js", 
          keepAlive: true,
          noColor: false,
          args: {
            // Arguments passed to the command 
          }
        },
        target: {
            options: {
                configFile: "test/conf.js", 
                args: {}
            }
        },
    },
    
> Y la incluimos dentro de la lista de tareas a lanzar por grunt test:

>>  
     grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma',
        'protractor'
    ]);
    
>Una vez hecho esto, se hace posible la ejecución de las pruebas E2E mediante grunt test.

#### &nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk6.3">6.3 Pruebas de verificación html y css</a>
	
#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk6.3.1">6.3.1 Verificación HTML</a>
>Se ha verificado todo el código html con la herramienta proporcionada por el consorcio W3C (http://validator.w3.org).

> Los resultados son los siguientes:
>
> El fichero *index.html* se valida al **100%** puesto que es una página html normal sin incluir AngularJS por incompatabilidad con el slider.
>
> ![Captura index.html](https://photos-4.dropbox.com/t/2/AACg71yFoSXBcVh64ls1LbtUq2l8YMo9gx--unTl3MIa2g/12/116037006/png/1024x768/3/1423159200/0/2/index.html.png/CI6rqjcgASACIAMoASgC/AaFKE0xOMUpQFvl8yr7hmqd3gfYG-Srn1GyB6L5Wic4)
>
> El fichero *portada.html* se declara como una aplicación AngularJS propiamente dicha con sus respectivas directivas de AngularJS, las cuáles provocan los dos únicos errores del documento puesto que no son directivas propias de html por lo que no deberemos preocuparnos. En definitiva, a pesar de estos dos errores, el fichero se considera validado al **100%**, puesto que es inevitable.
>
> ![Captura portada.html](https://photos-3.dropbox.com/t/2/AABFQioHrAhW4aRzlVHWTWaslML0XnDpVXKMdh_OXnaJKg/12/116037006/png/1024x768/3/1423159200/0/2/portada.html.png/CI6rqjcgASACIAMoASgC/YWiVr9-s10P0_Kjnde_P1WesIR4OmIPxJI0maFAdvtc)
>
> El resto de ficheros son cada una de las vistas asociadas a una ruta determinada. Todas las vistan producen el mismo error: 
> **no document type declaration; will parse without validation**. Esto se debe a que al ser vistas, son secciones de una página web, por lo que únicamente contienen el fragmento de código a mostrar para esa vista y no disponen de la etiqueta *<!DOCTYPE>* ya que eso se define en portada.html que es el contenedor de vistas. Luego, se considera que las vistas se validan al **100%**.
>
> ![Captura vistas](https://photos-6.dropbox.com/t/2/AACJnqoViOLUyyWuNSHoplbrCy2Dy0irualIrG41D_-Wug/12/116037006/png/1024x768/3/1423159200/0/2/vistas.png/CI6rqjcgASACIAMoASgC/LQrP2Ps_reXHWa8an54hzen_nxziQbe5YE-mPSK3QpY)
> Por tanto, el código html se considera válido al **100%**.

#### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a name="lnk6.3.2">6.3.2 Verificación CSS</a>

>Se ha verificado todo el código css con la herramienta proporcionada por el consorcio W3C (https://jigsaw.w3.org/css-validator).

> Se ha verificado tanto el fichero *unificados.min.css* que contiene tanto Bootstrap 3 como el estilo personalizado además del fichero de la librería Font-Awesome. Se obtienen errores en unificados.min.css que pertenecen a Bootstrap 3, ya que el estilo personalizado validado a parte se valida al **100%**.
>
> ![Captura unificados](https://photos-1.dropbox.com/t/2/AABOnswQDiDEFhe-sn5tcxxdngcjqaGFSXZDlDLsuXkt7g/12/116037006/png/1024x768/3/1423162800/0/2/unificados.css.png/CI6rqjcgASACIAMoASgC/69VFJNOr5OvGFCBS3sjMg43_rcW249hYjH7I2AFljEM)
>
> ![Captura estilo propio](https://photos-5.dropbox.com/t/2/AACYnFKvSOCjkr78GQz83V-EGptfb4423K0il-Bk6lTnyw/12/116037006/png/1024x768/3/1423162800/0/2/propio.png/CI6rqjcgASACIAMoASgC/N7Ud0ALOSzTd_IvTuLmWbH7n7pGE742QcqmpM8oRAz4)
>
> Por tanto, el código html se considera válido al **100%**.
>
> En el caso de Font-Awesome también se producen errores, pero al tratarse de librerías de terceros, se considera que el css propio está validado al **100%**.
####<a name="lnk7">7. Bibliografía</a>

>http://yeoman.io/learning/index.html

>http://yeoman.io/codelab.html

>https://devcenter.heroku.com/

>https://devcenter.heroku.com/articles/git

>https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

>http://docs.mongodb.org/manual/installation/

>http://docs.mongodb.org/manual/tutorial/getting-started/

>http://getbootstrap.com/getting-started/

>http://lesscss.org/

>https://docs.angularjs.org/guide

>https://github.com/gruntjs/grunt-contrib-concat/blob/master/README.md

>https://github.com/gruntjs/grunt-contrib-less/blob/master/README.md

>https://github.com/gruntjs/grunt-contrib-watch/blob/master/README.md

>https://github.com/gruntjs/grunt-contrib-uglify/blob/master/README.md

>https://github.com/gruntjs/grunt-contrib-cssmin/blob/master/README.md

>https://github.com/JoseTomasTocino/josetomastocino.github.io


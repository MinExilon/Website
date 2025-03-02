---
date:
  created: 2025-03-02
pin: true
authors:
  - aaron_el_genio
categories:
  - Novedades
tags:
  - v2.0
  - actualización
  - towny
---

# MinExilon 2.0

<figure markdown="span">
  ![Portada](https://img.minexilon.com/blog/2022/portada_minexilon_2_0.webp){ width="100%" }
</figure>

Se avecina un retorno de MinExilon y no parece ser algo pequeño!

<!-- more -->

Llevamos unos años inactivos y llegó el momento de volver a la carga. Algunos de vosotros ya sospechabais algo, viendo de nuevo movimientos por parte del staff.

No esperábamos ver gente de vuelta y con ánimos de comenzar nuevos proyectos. Por eso hemos decidido comentar los cambios que se avecinan, para que lo tengas en cuenta.

Ahora estamos con todos los preparativos y la idea es tenerlo todo bien pulido antes de que llegue el verano. Durante este período, iremos revelando con mayor detalle la actualización.

{==

<div style="text-align: center;" markdown>
__Fecha prevista para la actualización 2.0__

Mediados de mayo de 2025 :fontawesome-solid-circle-question:{ title="La fecha se especificará más adelante" }
</div>

==}

## Cambios
### Página Web y Soporte
Empecemos por lo más obvio, ¡una nueva y flamante página web!

- [x] Se ha rediseñado la web entera para dejarlo mucho más ligero, rápido y fácil de navegar. Además, incluye un potente buscador capaz de encontrarte todas las palabras que empiezan por la letra `s` en milésimas de segundo.
- [x] Se tienen principalmente dos secciones:
    - [Blog](../../index.md): Donde se publicarán todas las noticias, eventos y actualizaciones. Como todo blog, podrás filtrar el contenido por etiquetas, categorías o fechas.
    - [Wiki](../../../wiki/index.md): donde se alojan las guías de los sistemas que tiene el servidor. En el panel izquierdo de la Wiki se listan todas las guías y posibles estados, como :material-alert-decagram:{ title="Nueva guía" } o :fontawesome-solid-trash-can:{ title="Desactualizada" }.

Toda la sección __social__ de la web se ha movido a nuestro __Discord__, ya que la comunidad es mucho más activa por esta vía.

- [x] Se ha incluido en el servidor de Discord un __sistema de tíckets de soporte__ con tres categorías:
    - __Desahucios__: para realizar desahucios en caso de gestionar una ciudad.
    - __Reportes__: para reportar a algún usuario.
    - __Soporte__: para cualquier otro asunto.

### Towny

Se va a modificar toda la estructura actual de Towny. Los objetivos son:

- Reducir el grindeo
- Eliminar sistemas desactualizados o difíciles de mantener.
- Incluir nuevos sistemas que ofrezcan una experiencia más entretenida para los jugadores, sobre todo, los más veteranos.

#### Los jobs y la economía

La idea es __eliminar los Jobs__, ya que actualmente la economía y el progreso gira en torno a ellos y hemos observado dos cosas:

- El desarrollador que mantiene el plugin no suele estar disponible, por lo que la carga del mantenimiento recae sobre nosotros. Hay apaños que hemos podido hacer pero ha llegado un punto donde no vemos viable mantener todo un proyecto.
- Sistemas como el de Jobs recae 100% en el grindeo para conseguir dracmas, cosa que vemos divertido al inicio pero, en el endgame, ya llega a cansar al no quedar objetivos.

Vamos a cambiar la manera de conseguir dracmas a lo siguiente:

- [x] __Tiendas rotativas__: se trata de __tiendas admin__ en el que se pueden comprar y vender ciertos ítems que van rotando (cambiando) cada cierto tiempo. Habrá principalmente dos tiendas rotativas en el spawn de Exilon.
- [x] __Misiones__: se quieren incluir diferentes líneas de misiones que den como premios dracmas.

Aparte, seguirán estando las otras vías ya conocidas: subastas, tiendas de usuarios, intercambios, mobs, eventos, etcétera.

#### Las veteranías

El sistema de rangos de veteranía también incita al grindeo de dracmas, ya que el avance es exclusivo con el pago de dracmas.
Queremos darle otra vuelta de tuerca a esto para hacerlo más entretenido (más que el mero hecho de conseguir dracmas):

- [x] __Sistema de misiones__: para progresar al siguiente rango de veteranía es necesario avanzar por una serie de misiones/objetivos de diversa índole: matar mobs, recolectar materiales, cumplir otra misión, ...
- [x] __Pago del ascenso__: aparte de las misiones, se tendrá que seguir pagando una cierta cantidad de dracmas y puntos de voto, aunque menos que antes.
- [x] __Ascensos celestiales__: una vez alcanzado el __Omnisciente__{title="Último rango de veteranía"}, se pasará a unos ascensos especiales aún más desafiantes para los veteranos. Esto ahora mismo es una idea que se desarrollará en un futuro.

Al incluir una estructura de misiones, se pulirán para la actualización las primeras 6 veteranías, y se irán incluyendo más rangos en el futuro. Puedes consultarlo en la [Hoja de ruta](#hoja-de-ruta).

#### Las ciudades
==comentar reset==

==comentar eventos==

#### Los aldeanos

Los trades de los aldeanos lo vemos como un sistema que rompe el gameplay de Minecraft. Sí que es verdad que en estas últimas actualizaciones están tratando de limitar encantamientos y ciertos trabajos dependiendo del bioma en el que se encuentre la aldea, pero esto sólo retrasa lo inevitable: la granja de aldeanos.

Lo que haremos en esta futura update es retirar el __sistema de tradeos de los aldeanos__. Los aldeanos existirán en los mundos, pero no se podrán interactuar con ellos.

Con esto queremos recuperar las mecánicas vanilla 

Esto vemos que afecta negativamente en dos aspectos, y tenemos soluciones para ello:

- __Bibliotecarios__: hay encantamientos como la Reparación, que son muy complicados de obtener si no es por aldeanos.
- __Cartógrafos__: mapas de exploración.

==terminar de comentar (con el tema dungeons)==

#### Mazmorras

Por fin vamos a hacer el sueño de Blacky realidad. En esta actualización se van a incluir mazmorras (dungeons) en el servidor.

Las mazmorras son mapas personalizados en los que debes conseguir algún objetivo como: matar a un jefe para lootear un objeto interesante, farmear dropeos especiales de mobs o cumplir cierto objetivo de una misión.

#### Otros sistemas

Otros elementos que se van a tocar son los siguientes:

- __Objetos míticos__: Se van a eliminar para incluir en una futura actualización un sistema mucho más estable que agrega una gran variedad de herramientas y armas míticas, gemas, sincronías especiales, habilidades, etcétera. Puedes consultarlo en la [Hoja de ruta](#hoja-de-ruta).
- __mcMMO__: Se va a eliminar, ya que sus efectos y habilidades se verán solapados con sistemas posteriores que tenemos pensado incluir. Sabemos que es un sistema que gusta mucho e intentaremos volver a incluirlo en caso de que sea posible.
- __Brewery__: Las bebidas personalizadas se van a mantener. Habrá una actualización pensada para mejorar los ingredientes de las bebidas, para que sea algo más realista. Puedes consultarlo en la [Hoja de ruta](#hoja-de-ruta).
- __Mascotas__: ==¿Qué se hace con esto al final?==
- __Cajas misteriosas__: Permanecerá únicamente la caja de votos.

### Rangos VIP y Tienda Web
El servidor y toda la infraestructura de MinExilon se mantiene gracias a vuestras [donaciones](../../../donadores.md). Sin ellas, este proyecto no hubiese aguantado ni un año (y este año vamos a cumplir 7).

Con el nuevo rumbo que va a tomar el servidor y la inversión que esto requiere, hemos decidido modificar también los rangos VIP.

- [x] Se han simplificado los VIPs a 3 de carácter mensual:

!!! info "Precios aproximados, pueden diferir con el precio final"

| VIP | Precio | Duración | Características |
| :--- | :---: | :---: | :--- |
| __Can__ | 4.80 € | 1 mes | Rango VIP más barato enfocado a ampliar limitaciones de homes, plots y privados. |
| __Ghast__ | 8.90 € | 1 mes | El rango VIP estándar con características similares al VIP Ghast actual: acceso al `/fly`, al `/nick` y un sinfín de cosas.  |
| __Wither__ | 12.40 € | 1 mes | Tendrá una potencia similar al WitherEx, con elementos exclusivos como la bebida personalizada, el guardado de ítems en cofres al morir, etcétera. |

En la wiki [Rangos del servidor](../../../wiki/basico/rangos.md) podéis consultar un desglose más detallado de todos los aspectos que tendrán los nuevos VIPs. Esa publicación está en constante actualización, por lo que seguramente tenga más elementos durante estos meses.

!!! warning "Los VIPs permanentes van a desaparecer"
    Ya no van a existir los VIPs permanentes, todos tendrán una duración de 1 mes. Los usuarios VIP actuales recibirán una recompensa especial que se anunciará cuando se acerque la fecha de la actualización.

- [x] Nueva __Tienda Web__ con un sistema simplificado, más robusto y que solicite menos datos. Sólo tienes que aportar tu nombre de usuario del Minecraft y un correo electrónico donde te llegará la información de la compra.

!!! info "La Tienda Web se activará cuando se realice la actualización"

[:fontawesome-solid-cart-shopping: &nbsp; Tienda Web](https://store.minexilon.com/){ .md-button .md-button--secondary }

## Hoja de ruta
Estos son los objetivos que tenemos en mente una vez actualicemos el servidor:

- [ ] Conjunto nuevo de 5-10 veteranías y misiones.
- [ ] Nuevas mazmorras y bebidas personalizadas con ingredientes más realistas.
- [ ] Conjunto nuevo de 5-10 veteranías y misiones.
- [ ] Nuevo sistema de objetos míticos.
- [ ] Último conjunto de 5-10 veteranías y misiones.
- [ ] Rama de misiones paralela al progreso principal de veteranías.

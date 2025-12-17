---
date:
  created: 2025-03-02
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
  ![Portada](https://img.minexilon.com/blog/2025/portada_minexilon_2_0.webp){ width="100%" }
</figure>

Se avecina un retorno a MinExilon y no parece ser algo pequeño!

<!-- more -->

Llevamos unos años inactivos y llegó el momento de volver a la carga. Algunos de vosotros ya sospechabais algo, viendo de nuevo movimientos por parte del staff.

No esperábamos ver gente de vuelta y con ánimos de comenzar nuevos proyectos. Por eso hemos decidido comentar los cambios que se avecinan, para que los tengas en cuenta.

Ahora estamos con todos los preparativos y la idea es tenerlo todo bien pulido antes de que llegue el verano. Durante este período, iremos revelando con mayor detalle la actualización.

{==

<div style="text-align: center;" markdown>
__Fecha prevista para la actualización 2.0__

Posiblemente en mayo de 2025 :lucide-circle-question-mark:{ title="La fecha se especificará más adelante" }
</div>

==}

## Cambios
### Página Web y Soporte
Empecemos por lo más obvio, ¡una nueva y flamante página web!

- [x] Se ha rediseñado la web entera para dejarlo mucho más ligero, rápido y fácil de navegar. Además, incluye un potente buscador capaz de encontrarte todas las palabras que empiezan por la letra `s` en milésimas de segundo.
- [x] Se tienen principalmente dos secciones:
    - [Blog](../../index.md): Donde se publicarán todas las noticias, eventos y actualizaciones. Como todo blog, podrás filtrar el contenido por etiquetas, categorías o fechas.
    - [Wiki](../../../wiki/index.md): donde se alojan las guías de los sistemas que tiene el servidor. En el panel izquierdo de la Wiki se listan todas las guías y posibles estados, como :lucide-badge-plus:{ title="Nueva guía" } o :lucide-trash:{ title="Desactualizada" }.

Toda la sección __social__ de la web se ha movido a nuestro __Discord__, ya que la comunidad es mucho más activa por esta vía.

- [x] Se ha incluido en el servidor de Discord un __sistema de tíckets de soporte__ con tres categorías:
    - __Desahucios__: para realizar desahucios en caso de gestionar una ciudad.
    - __Reportes__: para reportar a algún usuario.
    - __Soporte__: para cualquier otro asunto.

### Towny

Se va a modificar toda la estructura actual de Towny. Los objetivos son:

- Reducir el grindeo.
- Eliminar sistemas desactualizados o difíciles de mantener.
- Incluir nuevos sistemas que ofrezcan una experiencia más entretenida para los jugadores, sobre todo, los más veteranos.

#### Los jobs y la economía

La idea es __eliminar los Jobs__, ya que actualmente la economía y el progreso gira en torno a ellos y hemos observado dos cosas:

- El desarrollador que mantiene el plugin no suele estar disponible, por lo que la carga del mantenimiento recae sobre nosotros. Hay apaños que hemos podido hacer pero ha llegado un punto donde no vemos viable mantener todo un proyecto.
- Las economías basadas en Jobs incitan al grindeo de dracmas, cosa que vemos divertido al inicio pero, en el endgame, llega a ser repetitivo.

Vamos a cambiar la manera de conseguir dracmas a lo siguiente:

- [x] __Tiendas rotativas__: se trata de __tiendas admin__ en el que se pueden comprar y vender ciertos ítems que van cambiando cada cierto tiempo. Los precios de compra y venta son dinámicos (suben y bajan dependiendo de la oferta y la demanda) y hay ciertos límites globales y por usuario. Se detallará más en una futura guía.
- [x] __Misiones__: vamos a incluir líneas de misiones que den como premios dracmas.

Aparte, seguirán estando las otras vías ya conocidas: subastas, tiendas de usuarios, intercambios, eventos, etcétera.

#### Las veteranías

El sistema de rangos de veteranía también incita al grindeo, ya que el avance es exclusivo con el pago de dracmas.
Queremos darle otra vuelta de tuerca a esto para hacerlo más entretenido:

- [x] __Sistema de misiones__: para progresar al siguiente rango de veteranía es necesario avanzar por una serie de misiones/objetivos de diversa índole: matar mobs, recolectar materiales, cumplir otra misión, ...
- [x] __Pago del ascenso__: aparte de las misiones, se tendrá que seguir pagando una cierta cantidad de dracmas y puntos de voto, aunque menos que antes.

Al incluir una estructura de misiones, se pulirán para la actualización las primeras 6 veteranías, y se irán incluyendo más rangos en el futuro. Puedes consultarlo en la [Hoja de ruta](#hoja-de-ruta).

#### Las ciudades

!!! warning "Nuevo mundo Exilon"
    La actualización se hará en un __servidor nuevo__ con todos empezando de 0 (rangos, inventario, dracmas, ciudades, ...).

Sabemos que esto puede causar algo de controversia, pero es lo mejor para incorporar estos nuevos sistemas. Hay varios motivos por los que se ha tomado esta decisión:

- El mundo actual de Towny pesa más de 200GB, está bastante desactualizado en cuanto a biomas nuevos y presenta problemas de rendimiento.
- La mayoría de las ciudades se encuentran inactivas.
- Se desea reiniciar por completo los inventarios, dracmas y rangos de los usuarios. No reiniciar las ciudades hace perder el sentido a esto, ya que se podrían recuperar objetos/equipamientos.
- El sistema Towny va a sufrir algunos ajustes en cuanto a precios, impuestos, límites de bonus plot y outposts.

Las novedades son las siguientes:

- [x] __Varios tipos de ciudades__: queremos facilitar tipos de ciudades en base a la cantidad de usuarios y el uso que se le vaya a dar. Esto se desarrollará en una futura guía.

- [x] __Las tiendas de usuario se trasladan a las ciudades__: mundo Ágora va a desaparecer, ¡ya que las ciudades podrán crear sus propios plots tienda donde colocar los cofres!
  
    De esta forma, pensamos que se anima a la comunidad a visitar las ciudades y no hay limitación en cuanto al tamaño de la tienda, se puede hacer en un plot o en varios.

- [x] __Eventos de servidor celebrados en las ciudades__: se quieren organizar más eventos en mundo Exilon, como las mobarenas o las luchas PvP, por ejemplo. No obstante, ¡queremos que estos eventos tengan lugar en las ciudades del servidor!

    Es por esto que, cuando se anuncie un evento de este tipo, se seleccionará una ciudad anfitriona entre todas las que se ofrezcan. Lógicamente, las ciudades deben disponer de la infraestructura necesaria para alojar el evento. Los administradores echarán un cable con los detalles.

!!! question "¿Qué sucede con los premios de evento y otros objetos especiales? ¿Puedo tener una copia/schematic de mi ciudad?"
    El mundo actual de Ciudades se va a mantener en otro servidor, sin posibilidad de ser modificado. Podréis visitarlo y manejar vuestros homes, plots y cofres.

    Se puede solicitar a la administración una copia de la ciudad y también se podrá solicitar el traslado de trofeos y objetos conmemorativos __dados por la administración__ al nuevo servidor. __No se moverán otros objetos__, como los objetos míticos o las cabezas decorativas.

    !!! warning "Mueve the ass"
        En estos meses puedes ponerte a organizar las cosas para no dejarlo para el último día ;)

    

#### Los aldeanos

Los intercambios de los aldeanos lo vemos como un sistema que rompe el gameplay de Minecraft. Sí que es verdad que, en estas últimas actualizaciones, Mojang está tratando de limitar encantamientos y ciertos trabajos dependiendo del bioma en el que se encuentre la aldea. Sin embargo, esto sólo retrasa lo inevitable: las granjas de aldeanos.

Lo que haremos en esta futura update es retirar el __sistema de tradeos de aldeanos__. Los aldeanos existirán en los mundos, pero no se podrá interactuar con ellos.

Esto vemos que afecta negativamente en estos aspectos, y tenemos soluciones para ello.

| Aspecto | Problema | Solución |
| :--- | :--- | :--- |
| __Bibliotecarios__ | Hay encantamientos como la Reparación que son muy complicados de obtener si no es por aldeanos. | Se van a facilitar esos libros de encantamiento por otras vías [comentadas a continuación](#mazmorras). |
| __Cartógrafos__ | Mapas de exploración para encontrar mansiones, templo marino, trials chambers y aldeas. | Habrá una alternativa para conseguirlos. |
| __Uso de las esmeraldas__ | Al no haber intercambios, las esmeraldas son un recurso bastante escaso. | Se van a dar como dropeos en cajas de votos y otras vías. |

#### Mazmorras

¡En esta actualización se van a incluir dungeons en el servidor!

!!! question "¿Qué son las dungeons?"
    Las mazmorras son mapas personalizados en los que debes conseguir algún objetivo, como: matar a un jefe para lootear un objeto interesante, farmear dropeos especiales de mobs o cumplir cierto objetivo de una misión.

Con las mazmorras se pretende solventar el problema de los libros de encantamiento y futuras actualizaciones señaladas en la [Hoja de ruta](#hoja-de-ruta).

#### Otros sistemas

Otros elementos que se van a modificar son los siguientes:

- __Objetos míticos__: Se van a eliminar para incluir en una futura actualización un sistema mucho más estable que agrega una gran variedad de herramientas y armas míticas, gemas, sincronías especiales, habilidades, ... Puedes consultarlo en la [Hoja de ruta](#hoja-de-ruta).
- __mcMMO__: Se va a eliminar, ya que sus efectos y habilidades se verán solapados con sistemas posteriores que tenemos pensado incluir. Sabemos que es un sistema que gusta mucho y veremos si es posible implementarlo en un futuro.
- __Brewery__: Las bebidas personalizadas se van a mantener. Hay pensado una actualización para mejorar los ingredientes de las bebidas y hacer las recetas algo más realistas. Puedes consultarlo en la [Hoja de ruta](#hoja-de-ruta).
- __Mascotas__: Pueden verse modificados al eliminar los jobs.
- __Cajas misteriosas__: Permanecerá únicamente la caja de votos. En un futuro se agregarán más.
- __Cabezas decorativas__: La tienda de cabezas decorativas se dejará exclusivamente para VIPs.

### Rangos VIP y Tienda Web
El servidor y toda la infraestructura de MinExilon se mantiene gracias a vuestras [donaciones](../../../donadores.md). Sin ellas, este proyecto no hubiese aguantado ni un año (y en este vamos a cumplir 7).

Con el nuevo rumbo que va a tomar el servidor y la inversión que esto requiere, hemos decidido modificar también los rangos VIP.

- [x] Se han simplificado los VIPs a 3 de carácter mensual:

!!! info "Precios aproximados, pueden diferir con el precio final"

| VIP | Precio | Duración | Características |
| :---: | :---: | :---: | :--- |
| <span class="tag-vip-rana"></span> | 4.80 € | 1 mes | Rango VIP más barato enfocado a ampliar limitaciones de homes, plots y privados. |
| <span class="tag-vip-ghast"></span> | 8.90 € | 1 mes | El rango VIP estándar con características similares al VIP Ghast actual: acceso al `/fly`, al `/nick` y un sinfín de cosas.  |
| <span class="tag-vip-wither"></span> | 12.40 € | 1 mes | Tendrá una potencia similar al WitherEx, con elementos exclusivos como la bebida personalizada, el guardado de ítems en cofres al morir, etcétera. |

En la wiki [Rangos del servidor](../../../wiki/basico/rangos.md) podéis consultar un desglose más detallado de todos los aspectos que tendrán los nuevos VIPs. Esa publicación está en constante actualización, por lo que seguramente tenga más elementos durante estos meses.

!!! warning "Los VIPs permanentes van a desaparecer"
    Ya no van a existir los VIPs permanentes, todos tendrán una duración de 1 mes. Los usuarios VIP actuales recibirán una recompensa especial que se anunciará cuando se acerque la fecha de la actualización.

- [x] Nueva __Tienda Web__ con un sistema simplificado y que solicite menos datos. Sólo tienes que aportar tu nombre de usuario del Minecraft y un correo electrónico donde te llegará la información de la compra.

!!! info "La Tienda Web se activará cuando se realice la actualización"

[:lucide-handbag: &nbsp; Tienda Web](https://store.minexilon.com/){ .md-button .md-button--secondary }

## Hoja de ruta
Estos son los objetivos que tenemos en mente una vez actualicemos el servidor:

- [ ] Conjunto nuevo de 5-10 veteranías y misiones.
- [ ] Nuevas mazmorras y bebidas personalizadas con ingredientes más realistas.
- [ ] Conjunto nuevo de 5-10 veteranías y misiones.
- [ ] Nuevo sistema de objetos míticos.
- [ ] Último conjunto de 5-10 veteranías y misiones.
- [ ] Rama de misiones paralela al progreso principal de veteranías.

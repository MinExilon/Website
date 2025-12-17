---
date:
  created: 2025-08-31
authors:
  - aaron_el_genio
categories:
  - Novedades
tags:
  - v2.0
  - actualización
  - towny
---

# Novedades Septiembre 2025

<figure markdown="span">
  ![Portada](https://img.minexilon.com/blog/2025/portada_novedades_septiembre.webp){ width="100%" }
</figure>

¡La fase BETA de MinExilon ya tiene fecha y más novedades!

Al final nos hemos extendido más de lo que nos hubiese gustado, pero no es por menos. Hay mucho contenido que cubrir, explorar y renovar.

Descubre en este post toda la información que va a estar en breve en el servidor.

<!-- more -->

{==

<div style="text-align: center;" markdown>
__Fecha prevista para la BETA__

Sábado 13 de septiembre de 2025
</div>

==}

## Novedades de la nueva versión
Han surgido algunas modificaciones con respecto a la [primera publicación](2025-1-actualizacion-minexilon.md) que hicimos.
También hemos anotado las cuestiones que han surgido en el Discord sobre los objetos transferibles al nuevo servidor. Esto será aclarado cuando se salga de la versión BETA.

### Compatibilidad con versiones de minecraft anteriores
El servidor se ha actualizado a la versión `1.21.8` y __no va a estar disponible para versiones anteriores a la `1.21.1`__.
El motivo por el que hemos decidido limitar esto es por nuevos cambios internos que está realizando minecraft, como los atributos de entidades y los metadatos de los ítems. Estos cambios no son visibles en versiones anteriores, lo que supone un problema para usuarios que jueguen en ellas.

### Los Jobs
Los trabajos regresan, ¡pero con modificaciones!

Se han reducido la cantidad de trabajos a los cinco siguientes:

- :material-pickaxe:{ .middle } __Minería__: Pica minerales y crea utensilios.
- :material-axe:{ .middle } __Tala__: Tala árboles y dale forma a la madera.
- :material-bow-arrow:{ .middle } __Caza__: Equípate para matar mobs de todo tipo.
- :material-fish:{ .middle } __Pesca__: Explora el mundo y pesca diversos peces.
- :material-cow:{ .middle } __Granja__: Cultiva y consigue recursos de animales.

Con esto se logran unos trabajos más dinámicos, evitando jobs que solo se dediquen a una sola tarea. Además, los trabajos __no__ dan <span class="tag-econ-dracmas">dracmas</span> directamente, sino __recursos__.

!!! question "Los recursos <span class="tag-econ-gemas"></span> <span class="tag-econ-ramas"></span> <span class="tag-econ-colmillos"></span> <span class="tag-econ-escamas"></span> <span class="tag-econ-espigas"></span>"
    __Cada trabajo aporta un recurso distinto__. Debes ir cambiando de trabajo para ir recolectando recursos. También puedes recibir o enviar recursos a la gente con `/<recurso> pay <jugador> <cantidad>`.

    - :material-pickaxe:{ .middle } __Minería__ aporta <span class="tag-econ-gemas">gemas</span>
    - :material-axe:{ .middle } __Tala__ aporta <span class="tag-econ-ramas">ramas</span>
    - :material-bow-arrow:{ .middle } __Caza__ aporta <span class="tag-econ-colmillos">colmillos</span>
    - :material-fish:{ .middle } __Pesca__ aporta <span class="tag-econ-escamas">escamas</span>
    - :material-cow:{ .middle } __Granja__ aporta <span class="tag-econ-espigas">espigas</span>

Con los recursos se pueden activar __efectos o perks temporales__ desbloqueados en ciertos niveles de job, __encargos especiales__ que te recompensan con <span class="tag-econ-dracmas"></span> y __cajas especiales__.

!!! info "Para más información, consulta la [guía de los trabajos del servidor](./../../../wiki/general/jobs.md)."

### Las Veteranías
El sistema de rangos de veteranía permanecerá al final __sin misiones__, debido a que las misiones van a tomar su propio rumbo y se van a ligar poco a poco a los niveles de Veteranía, niveles de Jobs y otros sistemas.
Esto nos permite mayor flexibilidad.

Subir de rango te costará una serie de <span class="tag-econ-dracmas">dracmas</span> y <span class="tag-econ-votos">puntos de voto</span> que podrás consultar, junto a las nuevas mejoras permanentes, en la [tabla de Veteranías](./../../../wiki/basico/rangos.md#lista-de-rangos) actualizada.

### La nueva pesca
¡La pesca ha cambiado en MinExilon!
Para hacer la pesca algo más entretenida hemos incluido peces y tesoros personalizados que aparecen en diversos biomas.

Dependiendo del bioma y el tipo de pez, te costará más o menos pescarlo. Además, el nuevo sistema de pesca incluye cebos de distintos tipos, que se implementarán más adelante.

Cada vez que consigues pescar, aparecerá en pantalla un __minijuego de pesca__ en el que tendrás que acertar la barra blanca que está en movimiento con las barras de color claro del título. Las cañas de pescar que están en los laterales indican tu vida. Cuando fallas, pierdes una vida. Si te quedas sin vidas, pierdes el pez.

Al descubrir un pez nuevo, se te registra en el __catálogo de pesca__. Este catálogo es muy útil para saber en qué bioma se pesca cada pez.

<div class="grid" markdown>
<div markdown>
<figure markdown="span">
      ![Minijuego pesca](https://img.minexilon.com/wiki/pesca/pesca_minijuego.webp)
      <figcaption>Minijuego de pesca</figcaption>
    </figure>
</div>

<div markdown>
<figure markdown="span">
      ![Catálogo pesca](https://img.minexilon.com/wiki/pesca/pesca_catalogo.webp)
      <figcaption>Catálogo de pesca</figcaption>
    </figure>
</div>
</div>

Por último, se organizarán torneos de pesca cada semana, en los que podrás ganar <span class="tag-econ-dracmas"></span>, cebos y otros tesoros especiales.

!!! info "Para más información, consulta la [guía de pesca](./../../../wiki/general/pesca.md)."

### La mazmorra "Biblioteca de Marvin"

Durante la beta se abrirá la primera mazmorra que se quiere incluir en MinExilon. En esta mazmorra, se pueden lootear __libros de encantamiento__ e __ítems__ que permiten hacer ciertas acciones, como limpiar encantamientos aleatorios de ítems y crear libros de encantamiento de interés.

## Fase BETA

La idea es que la fase BETA dure un par de meses para revisar progresos en los nuevos rangos de veteranía con el sistema de tienda admin, y también la adquisición de recursos vía los nuevos trabajos.

Hay unas cuantas modificaciones en la fase BETA para probar las cosas:

- [x] La __tienda admin__ estará boosteada y te aportará muchos más <span class="tag-econ-dracmas">dracmas</span> para ver de manera aproximada el progreso que harías en 8-10 meses.
- [x] Los __trabajos__ no estarán boosteados, para ver los recursos que consigues en cada trabajo de forma diaria. Esto nos sirve para balancear los costes de las cajas especiales y los perks temporales.
- [x] Los __perks temporales__ de los trabajos se desbloquean en los primeros 5 y 10 niveles, para que los puedas probar todos durante la BETA.
- [x] Los <span class="tag-econ-votos">puntos de voto</span> no se cobrarán __en el ascenso de veteranía__, para que puedas ascender más rápido.

Aparte de esos aspectos, te animamos a que montes una ciudad con otros amigos y compañeros, compruebes el poder hacer hacer un mercado con cofres-tienda, los sistemas comentados en este post (trabajos, la pesca y la mazmorra) y otros sistemas antiguos como las subastas, el `/rtp`, etcétera.

Cualquier problema que detectes, puedes generar un tícket en nuestro Discord para que lo arreglemos y de esa manera ayudas a mejorar el servidor para todos.

!!! warning "La fase BETA es una fase temporal"
    Se trata de un servidor de pruebas que será __eliminado__ cuando finalicen las comprobaciones. El objetivo es ver el funcionamiento de los sistemas principales con la comunidad, antes de hacer el cambio completo.

!!! info "Cuando se abra el servidor BETA, se avisará por nuestro Discord el mismo sábado."

### ¡Participa en la BETA y gana boosts!

Aunque el progreso que hagas en la fase BETA se va a perder cuando finalice, ¡queremos premiar tu participación!

{==

<div style="text-align: center;" markdown>
Por cada nivel de veteranía que hayas ascendido en la BETA, recibirás un día de boost en los trabajos y en la tienda admin cuando salga MinExilon 2.0.
</div>

==}

Es decir, si has logrado ascender por ejemplo hasta <span class="tag-vet-20"></span> tendrás 20 días de boost.

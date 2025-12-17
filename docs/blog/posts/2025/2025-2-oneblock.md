---
date:
  created: 2025-03-11
  updated: 2025-08-31
authors:
  - tblacknight
categories:
  - Eventos
tags:
  - oneblock
  - skyblock
  - individual
  - equipos
---

# Desafío OneBlock

<figure markdown="span">
  ![Portada](https://img.minexilon.com/blog/2025/portada_oneblock.webp){ width="100%" }
</figure>

¿Te atreves a participar en el desafío OneBlock?

Rompe el bloque para conseguir materiales y consigue hacer crecer tu isla empezando con... un... único... ¡bloque!

<!-- more -->

No se trata de un bloque cualquiera. Es un __bloque mágico__ que se puede destruir infinitamente.

{==

<div style="text-align: center;" markdown>
__Fechas del evento__

Evento disponible desde el 14 de marzo hasta la apertura del nuevo servidor
</div>

==}

## Funcionamiento del desafío

### Objetivo
El objetivo es __expandir__ tu isla y conseguir romper el bloque mágico __tantas veces__ como puedas para conseguir recursos.

Habrá dos tablas de clasificación diferentes para cada objetivo, y la isla que alcance el primer puesto de cada TOP logrará el premio final que es un <span class="tag-vip-ghast"></span>!

Además, hay un tercer <span class="tag-vip-ghast"></span> que se otorgará a la isla __mejor decorada__. Se realizará un promedio entre los likes o "me gusta" dados por la comunidad con `/ob likes` y una valoración final por parte de los administradores.

!!! info "Reparto de premios"
    Si una isla queda en primera posición en ambas clasificaciones, se otorgará el premio del TOP bloques mágicos rotos a la segunda isla posicionada.
    
    Lo mismo sucede posteriormente con el premio a la isla mejor decorada. El premio se dará a la siguiente isla en orden de puntuación.
    
    De esta forma, se garantizan __tres distintas islas premiadas__.

### La Isla
Para acceder al evento debes dirigirte al lobby con `/lobby` y haz clic al bloque de portal de tu inventario para abrir el menú y acceder al `Desafío OneBlock`. Esto te teletransportará al lobby del desafío.

Para crear una isla, pon `/ob create`. Tardará unos segundos en crearlo y te teletransportará directamente encima del único bloque que tendrás en el mapa.

Y ahora... lo más importante... ¡empieza a romper el bloque mágico!
Verás que cada bloque que rompas, lo podrás almacenar en tu inventario. Conforme lo vayas rompiendo, aparecerá uno nuevo.

!!! abstract "Puede salir cualquier cosa"
    No solo salen bloques, también te pueden salir animales, monstruos o... cofres misteriosos.

    Prepárate herramientas, armas y estructuras para defenderte y almacenar los recursos.

La Isla no está limitada solamente a ese bloque. Recolecta más bloques, ve expandiendo tu isla y explora todas las posibilidades.

### Número de jugadores
El evento se puede jugar de forma individual o por equipos de hasta 4 jugadores.

!!! warning "¡Los premios son distintos si lo juegas en equipo!"
    En caso de que una isla premiada sea un __equipo__, todos los jugadores recibirán un descuento en el rango <span class="tag-vip-ghast"></span> proporcional al tamaño del equipo:
    
    - __Equipo de 2 personas__: Vale de descuento del 50% en el rango <span class="tag-vip-ghast"></span>.
    - __Equipo de 3 personas__: Vale de descuento del 33% en el rango <span class="tag-vip-ghast"></span>.
    - __Equipo de 4 personas__: Vale de descuento del 25% en el rango <span class="tag-vip-ghast"></span>.

=== "Pasos para jugarlo solo"

    - Accede al desafío vía `/lobby`
    - Crea tu Isla con `/ob create`
    - ¡Comienza el desafío!

=== "Pasos para jugarlo en equipo"

    - Accede al desafío vía `/lobby`.
    - Crea tu Isla con `/ob create`.
    !!! tip "Expande un poco antes de invitar a los demás"
        Es recomendable avanzar un poco para expandir algo la Isla y evitar caídas por estar todos apretujados en el bloque mágico.
    - Invita a los demás jugadores usando `/ob team`.
    - Los demás jugadores deben utilizar `/ob team accept` 2 veces para aceptar la invitación.
    - ¡Comenzad el desafío!

### Botón del pánico
Si has perdido objetos importantes, o notas que tu progreso de juego ha empeorado por decisiones que has tomado, puedes volver a empezar de 0 si así lo deseas, con el comando `/ob reset`.

!!! danger "Perderás todo el progreso, la isla y el inventario"
    El reinicio de la isla implica empezar de 0, perdiéndolo todo. Esta acción no es reversible.

## Lista de comandos
Puedes ver la lista de comandos dentro del desafío poniendo `/ob help`.

### Comandos Generales

| Comando | Descripción |
| :--- | :--- |
| `/ob` | El comando principal de la isla. |
| `/ob go [home number]` | Teletransportarte a tu isla. |
| `/ob spawn` | Teletransportándote al spawn. |
| `/ob create` | Crear una isla. |
| `/ob reset` | Reinicia tu isla y elimina la antigua. |
| `/ob info <player>` | Muestra información sobre tu isla o la isla del jugador. |
| `/ob settings` | Muestra la configuración de la isla. |

### Administración de Jugadores e Isla

| Comando | Descripción |
| :--- | :--- |
| `/ob setname <name>` | Establece un nombre para tu isla. |
| `/ob resetname` | Restablece el nombre de tu isla. |
| `/ob ban <player>` | Banea a un jugador de tu isla. |
| `/ob unban <player>` | Desbanea a un jugador de tu isla. |
| `/ob banlist` | Lista de los usuarios baneados. |
| `/ob expel <player>` | Expulsar a un jugador de tu isla. |
| `/ob near` | Muestra el nombre de las islas vecinas a tu alrededor. |
| `/ob team` | Gestiona tu equipo. |

### Administración de Puntos de Teletransporte y Bloques

| Comando | Descripción |
| :--- | :--- |
| `/ob sethome` | Configura tu punto de teletransportación. |
| `/ob deletehome [home name]` | Elimina una ubicación de home. |
| `/ob renamehome [home name]` | Renombra una ubicación de home. |
| `/ob homes` | Lista tus ubicaciones de home. |
| `/ob count` | Muestra el número de bloques minados y la fase correspondiente. |
| `/ob fases` | Muestra una lista de todas las fases. |
| `/ob setCount <count>` | Establece la cantidad de bloques a un valor previamente completado. |
| `/ob respawnBlock` | Reaparece el bloque mágico en situaciones en las que desaparece. |
| `/ob level [player]` | Calcula tu nivel de isla o muestra el nivel de un jugador. |

### Warp y Sistema de Ranking

| Comando | Descripción |
| :--- | :--- |
| `/ob top` | Muestra el TOP 10 de islas con mayor número de bloques colocados. |
| `/ob value [hand/material]` | Muestra el valor de los bloques. Añade `hand` al final para mostrar el valor del bloque en la mano. |
| `/ob controlpanel` | Abre el panel de control. |
| `/ob likes` | Abre el menú de "me gusta". |
| `/ob topblock` | Muestra el TOP 10 de islas que más veces han roto el bloque mágico. |
| `/ob warp <player name>` | Teletransportarte hacia el warp del jugador. |
| `/ob warps` | Abre el panel de warps. |
| `/ob togglewarp` | Activa o desactiva la señal de warp. |
| `/ob visit <player>` | Abre la GUI o visita la isla del jugador objetivo. |

## Ganadores del Desafío OneBlock

### TOP ISLA
<div markdown style="display:flex; gap:2px; justify-content:center;">
  <figure markdown="span">
    ![Ariel1218](https://crafthead.net/avatar/8422fbea230b4ff2a0ed5602b6318b2f){ width="70%" }
    <figcaption>Ariel1218</figcaption>
  </figure>
  <figure markdown="span">
    ![Joshua0939L](https://crafthead.net/avatar/51e9ba875e4a4bdbba90fd66d5d01bdd){ width="70%" }
    <figcaption>Joshua0939L</figcaption>
  </figure>
  <figure markdown="span">
    ![aaron9275](https://crafthead.net/avatar/8667ba71b85a4004af54457a9734eed7){ width="70%" }
    <figcaption>aaron9275</figcaption>
  </figure>
  <figure markdown="span">
    ![rixelias](https://crafthead.net/avatar/42a7f2bdaa274abb902755afac2b6167){ width="70%" }
    <figcaption>rixelias</figcaption>
  </figure>
</div>

### TOP ISLA BLOQUES MÁGICOS ROTOS

<figure markdown="span">
  ![Mikecr1](https://crafthead.net/avatar/63b4764d7a4547608fbece63d86e087a){ width="70%" }
  <figcaption>Mikecr1</figcaption>
</figure>

### TOP ISLA DECORADA

<figure markdown="span">
  ![Thuranduil](https://crafthead.net/avatar/a1b9cc67ce1d410ab26f451fc7149d29){ width="70%" }
  <figcaption>Thuranduil</figcaption>
</figure>

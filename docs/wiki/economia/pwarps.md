---
icon: lucide/map-pin
status: new
---
# Warps de jugadores

No solo existen zonas de teletransporte del servidor. La propia comunidad también ofrecen diversos transportes (conocidos como warps) a zonas de interés como: tiendas, granjas de mobs, biomas, etcétera.
Además, si creas buenos warps recibirás mayores visitas, pudiendo conseguir <span class="tag-econ-dracmas"></span> al cobrar por su uso.

Utilizando el comando `/pwarp` abres el menú donde podrás visitars los warps por las siguientes categorías:

- **Casa**: todo tipo de edificios que se consideran hogares.
- **Tienda**: para establecimientos que contienen cofres tienda o que se utilicen para realizar venta y compra entre jugadores.
- **Granjas**: para zonas en las que se farmeen mobs, cultivos u otros objetos del minecraft.
- **PvP**: terrenos destinados a la lucha PvP entre dos o más jugadores.
- **Otros**: para otros propósitos que no se agrupan en las anteriores.

Los warps se pueden colocar en todos los mundos (ciudades y mundos de recurso).
En ciudades solamente se pueden colocar warps en aquellos plots en los que tengas permisos.
No se pueden colocar warps en campo.

!!! info "Ten en cuenta la temporalidad de los mundos de recurso"
    Los mundos de recurso se van renovando cada 3-4 meses.
    Esto afecta a que las ubicaciones de los warps en mundo recurso queden desactualizadas e inservibles, sobre todo si se tratan de zonas bajo tierra.

    No obstante, es posible modificar la ubicación del warp, por lo que no es necesario elimintarlo y volver a crearlo.

Los warps además cuentan con un sistema de métricas y valoraciones de la comunidad, para que puedas ver cuáles son los warps más recomendables.

## Crear y configurar un warp

Para poder crear un warp necesitas alcanzar la [veteranía](../basico/rangos.md#rangos-de-veterania) <span class="tag-vet-9"></span> y tener <span class="tag-econ-dracmas">50.000</span> en tu monedero.

Ve a la zona donde quieres colocar en punto de aparición, y pon el siguiente comando:

```
/pwarp set <nombre>
```

!!! example "El nombre no puede contener espacios, puedes separar usando el guión bajo `_`"
    Por ejemplo: `pwarp set gran_mercado`

!!! info "El warp tiene un coste de mantenimiento diario"
    Mantener el warp disponible cuesta <span class="tag-econ-dracmas">250</span> que se cobran automáticamente de tu cartera.
    El sistema irá avisándote cuando se acerque el ciclo del pago para tenerlo en cuenta.

Una vez colocado, puedes configurar varios aspectos del warp como: el icono que aparece en el menú, la descripción del warp, el coste del warp, si es publico, privado o limitado a ciertos jugadores. Incluso puedes bloquear a ciertos jugadores de utilizar el warp.

Para configurarlo, puedes utilizar el menú interactivo mediante:

```
/pwarp administradores <set/remove/list> <warp>
```

O si prefieres ir modificándolo vía comandos, tienes disponible la lista de comandos disponibles utilizando el `/pwarp ayuda`.
A continuación se explican algunas funcionalidades principales.

### Menús

El sistema cuenta con varios menús con los que puedes acceder escribiendo `/pwarp abrir <menu>`.
Los posibles menús son:

- `all`: menú con todos los warps disponibles.
- `miswarps`: menú con los warps configurados por tí.
- `categoría`: el menú de warps por categoría, el mismo que abres al poner `/pwarp`. También puedes concretar una categoría para que directamente te abra el submenú de warps de esa categoría.
- `visitedwarps`: aquí se muestran los warps que has visitado.

### Bloqueo de warps

Puedes bloquear un warp propio para evitar que lo utilicen y aparezca en el menú de warps vía:

```
/pwarp bloquear <warp> [true/false]
```

!!! info "Aunque esté bloqueado, lo podrás seguir utilizando si eres el propietario del warp."

### Acceso por contraseña

Si quieres agregarle una constraseña al warp puedes hacerlo utilizando el comando:

```
/pwarp contraseña <set/remove> <warp> <contraseña>
```

### Lista blanca y bloqueo de jugadores

Es posible que sólo quieras el warp disponible para ciertos jugadores.
En ese caso, debes activar primero la lista blanca con:

```
/pwarp lista-blanca <disable/enable> <warp>
```

Y luego agregar a los jugadores que quieras que tengan acceso con:

```
/pwarp lista-blanca <set/remove/list> <warp> <jugador>
```

Por otro lado, si prefieres bloquear el acceso al warp a ciertos jugadores, lo más cómodo es bloquear el acceso para dicho jugador vía:

```
/pwarp bloquear <set/remove/list> <warp> [jugador] [tiempo] [razon]
```

!!! example "Ejemplo para bloquear al jugador durante 1 semana"
    `/pwarp bloquear set gran_mercado Jaimito 7d es un manco`

## Valora los warps de la comunidad

Si te gusta el warp de un jugador, puedes puntuarlo con el siguiente comando (de 0 a 5 estrellas):

```
/pwarp valoración <warp> <estrellas> <comentario>
```

E, incluso, agregarlo a tus warps favoritos para tenerlo siempre a mano, con:

```
/pwarp favorito <warp>
```
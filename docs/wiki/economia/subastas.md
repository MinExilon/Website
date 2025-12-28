---
icon: lucide/coins
status: unavailable
---
# Subastas

!!! bug "Temporalmente fuera de servicio"
    Ahora mismo presenta ciertas incompatibilidades que solventaremos en un futuro.

¿Quieres convertirte en un auténtico maestro de subastas? Pues con este post podrás ver todos los parámetros que tienes a mano para garantizar una buena subasta y buenos compradores!

Este post se dividirá en dos partes, una desde la vista de quien realiza una subasta y otra desde la vista del comprador.

!!! tip "Aparte de los comandos que indiquemos aquí siempre podrás consultarlos online vía `/auc`."

## Realizar una subasta

Para realizar una subasta debes poner lo siguiente teniendo el ítem o conjunto de ítems (como un stack de madera, por ejemplo) en tu mano:

```
/auc start <cantidad> <precio> [incremento] [autocomprar] [tiempo]
```

!!! example "Ejemplo: `/auc start 3 40 10 230 30`"
    Siendo cada parámetro lo siguiente:

    - __Cantidad__: la cantidad de ítems que deseas subastar (si es un ítem único pon 1, esto sobre todo sirve si tienes un stack de un ítem pero solo quieres vender 20 piezas, por ejemplo).
    - __Precio__: el precio inicial del ítem o conjunto de ítems que se ponen a la venta en la subasta.
    - __Incremento__ (opcional): lo que se eleva el precio por defecto cuando alguien realiza una oferta con /bid. Ejemplo: <span class="tag-econ-dracmas">400</span> por una espada (y has añadido un incremento de <span class="tag-econ-dracmas">25</span>) , alguien realiza el `/bid` y la próxima oferta será de <span class="tag-econ-dracmas">425</span> si alguien pone otro `/bid`.
    - __Autocomprar__ (opcional): si quieres que por una cierta cantidad de <span class="tag-econ-dracmas"></span> tu subasta finalice porque lo consideras un precio justo, puedes indicarlo en este parámetro. Cuando alguien ofrezca dicha cantidad, la subasta finalizará directamente realizándose el intercambio.
    - __Tiempo__ (opcional): define el tiempo (en segundos) en la que la subasta andará activa.

### Haz una subasta a ciegas
La subasta a ciegas es igual que la subasta normal, sólo que las personas que participen en ella no verán quién ha sido el último que más a pujado por ella!

```
/auc startsealed <cantidad> <precio> [incremento] [autocomprar] [tiempo]
```

!!! example "Ejemplo: `/auc startsealed 3 40 10 230 30`"
    Los parámetros son los mismos que en la subasta normal.

### Administra la subasta
Puedes cancelar la subasta en cualquier momento. Si hay una subasta ya iniciada se te agregará a la cola de subastas.

Aquí se te muestran algunos comandos útiles:

- `/auc cancel` Cancela tu subasta si está activo.
- `/auc remove` Elimina tu subasta si está en cola.

## Participar en una subasta
Para participar en una subasta basta con poner `/bid` y entras como última oferta. Si quieres subir la cantidad de <span class="tag-econ-dracmas">dracmas</span> más que la de por defecto, puedes emplear el siguiente comando:

```
/bid <dracmas>
```

!!! example "Ejemplo: `/bid 240`"

Siendo los `<dracmas>` el precio por el que comprarías lo que se ofrece en la subasta.

### Estate al tanto de como va el progreso de la subasta
No le quites ojo a lo que va pasando en la subasta y menos si has ofrecido una cantidad que piensas que va a ser insuperable! Cuanto menos te lo esperes te lo puedes haber arrebatado con otra oferta mucho mayor!

Puedes ver el tiempo restante de la subasta, el comprador que se llevaría la subasta si se finalizase y a qué precio, vía `/auc info`.

## ¿No quieres saber nada de subastas?
Si no estás interesado en el mundo de las subastas puedes ignorar los mensajes más molestos con `/auc spam` o todos los mensajes que tengan que ver con las subastas vía `/auc ignore`.

Para volver a habilitarlos simplemente escribe el mismo comando con el que lo deshabilitaste.

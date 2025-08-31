---
icon: fontawesome/solid/palette
---
# Deja volar tu creatividad

??? question "Página en construcción, la información puede ser modificada"
    Ahora mismo estamos moviendo todo el contenido de la página web anterior a esta nueva web. Hay contenido que se va a conservar, pero es necesario dar un segundo repaso.
    
    El contenido estará actualizado y será definitivo cuando este aviso se elimine.

¿Tienes muchas ideas para hacer algún edificio o tipo de decoración? ¿No sabes en qué plot de tu ciudad hacerlo sin destrozar la temática?

Pues olvida esos problemas en el __Mundo Creativo__ de MinExilon!!

Esta zona te permite construir en parcelas de 32×32 con el creativo para poder desarrollar toda tu creatividad, valga la redundancia!

## Acceso a Mundo Creativo
Para acceder al mundo creativo, accede al lobby vía `/lobby` y dale click derecho al NPC del mundo creativo que se encuentra a la derecha.

Todos los usuarios tendrán acceso para poder ver las construcciones pero sólo los VIPs Permanentes y los que alcancen la veteranía <span class="tag-vet-26"></span> podrán asignarse una parcela para construir sobre él.

- <span class="tag-vet-26"></span> Acceso a 1 parcela de Creativo y poder unificar 2 parcelas.
- <span class="tag-vet-27"></span> __y superiores__: Acceso a 2 parcelas de Creativo y poder unificar hasta 4 parcelas!
- <span class="tag-vip-vex"></span> Acceso a 4 parcelas de Creativo y poder unificar hasta 7 parcelas!
- <span class="tag-vip-ghast"></span> Acceso a 5 parcelas de Creativo, poder unificar hasta 9 parcelas y uso de World Edit (manejo de hasta 1000 bloques/comando).
- <span class="tag-vip-wither"></span> Acceso a 6 parcelas de Creativo, poder unificar hasta 9 parcelas y uso de World Edit (manejo de hasta 1500 bloques/comando).

## Asignación y gestión de una parcela
Para asignarte una parcela tienes dos vías para hacerlo:

1. Ir a la parcela que más te mole y poner (estando encima de ella): `/plot claim`
2. Asignarte la más cercana disponible, de forma automática sin mover un dedo: `/plot auto`

Si no deseas tener cierta parcela, pon estando encima de ella: `/plot delete`

<figure markdown="span">
  ![Parcela de Creativo](https://dummyimage.com/1080x650/555/fff&text=imagen pendiente)
  <figcaption>Parcela 32×32 de Mundo Creativo</figcaption>
</figure>

### Anexionar más parcelas para hacerlo todo una mega-parcela!
Si puedes crear más de una parcela, puedes hacer que éstas anden enlazadas!! Por ejemplo: unir dos parcelas 32×32, obteniendo un 32×76 (ya que también se agregaría la zona de la calle, que es 12 de ancho) Para el caso del Wither, podría crear una zona de 6 parcelas unificadas, resultando una parcela de 76×120!!

Lo realmente chulo es que siempre podrás unificar más que tus propias parcelas, esto se debe a que puedes unificar parcelas tuyas con la de otros usuario!!

Para realizarlo debes estar encima de una parcela que ya poseas y, mirando a la parcela que quieras anexionar (la parcela que quieres enlazar debe estar claimeado), poner `/plot merge`

Si te has equivocado o no quieres tenerla ya enlazada, pon `/plot unlink`

<figure markdown="span">
  ![Parcelas mergeadas](https://dummyimage.com/1080x650/555/fff&text=imagen pendiente)
  <figcaption>2 parcelas de 32×32 anexionadas</figcaption>
</figure>

### Trabajar en la parcela junto con amigos!
Si quieres, puedes conceder permisos de construcción en tus parcelas a un usuario (no es necesario que sea VIP o Élite o superior) siguiendo estos pasos:

Si quieres que pueda construir aunque tu estés offline

1. Teletransporta al jugador al que deseas darle los permisos al plot específico.
2. Pon, estando el jugador contigo: `/plot trust <jugador>`
3. Si quieres retirarle los permisos pon: `/plot remove <jugador>`

Si quieres que pueda construir pero SOLO cuando estés online

1. Teletransporta al jugador al que deseas darle los permisos al plot específico.
2. Pon, estando el jugador contigo: `/plot add <jugador>`
3. Si quieres retirarle los permisos pon: `/plot remove <jugador>`

## Comandos útiles
Vía `/plot help` te salen los comandos. A continuación destacamos algunos que consideramos importantes (aparte de los ya mencionados de claimeo):

- `/plot visit <jugador>` Visita las parcelas de cierto usuario.
- `/plot info` Te muestra toda la información de la parcela en la que te encuentres.
- `/plot music <música>` Pon que se escuche cierto disco de minecraft en tu parcela!
- `/plot biome <bioma>` Define tu parcela de un cierto bioma.
- `/plot kick <jugador>` Expulsa de tu plot a un jugador.
- `/plot set <biome/home/flag> <valores>` Configura diversos aspectos de la parcela en la que te sitúes.
- `/plot <clear/reset>` Reinicia la parcela en la que estás, con los valores por defecto.

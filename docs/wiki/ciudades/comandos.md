---
icon: lucide/building-2
---
# Comandos de ciudades, ciudadanos y parcelas

??? question "Página en construcción, la información puede ser modificada"
    Ahora mismo estamos moviendo todo el contenido de la página web anterior a esta nueva web. Hay contenido que se va a conservar, pero es necesario dar un segundo repaso.
    
    El contenido estará actualizado y será definitivo cuando este aviso se elimine.

Estos son los comandos para towny, los que te permiten llevar a cabo labores de administración de tu ciudad, parcela o permisos de residente.

## Aspectos generales

Debes tener claras las siguientes pautas:

1. Si hay algún comando que no entiendas bien y suponga cierto riesgo para tu ciudad, consúltalo antes con la administración.
2. Los radios que se presentan en algunos comandos son radios de plots/parcelas, no de bloques.
3. Si se indica un <span style="color:red">:lucide-circle-alert:</span> al lado del comando, significa que se trata de un comando crítico con el que hay que tener especial cuidado.
4. Algunos comandos se pueden abreviar como `/t` (`/town`), `/p` (`/plot`), `/res` (`/resident`), `/n` (`/nation`).

## Comandos generales

Aquí se muestran los comandos más generales del towny.

| Comando | | Descripción |
| :--- | :---: | :--- |
| `/towny` | | Muestra los comandos básicos de Towny. |
| `/towny ?` | | Muestra más comandos del Towny. |
| `/towny map` | | Con ello te muestra el mapa de la ciudad. |
| `/towny prices` | | Muestra los costes asociados a cada aspecto de una ciudad (claim de un plot, impuestos, etc…). |
| `/towny time` | | Muestra el tiempo restante para que se cobren los impuestos a las ciudades. |
| `/towny top residents <all/town/nation>` | | Muestra un top de los residentes. |
| `/towny top land <all/resident/town>` | | Muestra un top de los dueños con mayores terrenos. |
| `/towny tree` | | Muestra muchas opciones del Towny. |
| `/towny universe` | | Muestra con todo detalle las estadísticas globales del Towny, así como los homeblocks creados, etcétera. |

## Comandos de parcelas
Tu trocito de terreno es tuyo, y como propiedad , querrás tener todos los factores de seguridad y administración en orden. estos son comandos plugin towny que tienes que saber para tu porción de tierra en Minexilon.

| Comando | | Descripción |
| :--- | :---: | :--- |
| `/plot` | | Muestra todos los comandos relacionados con los plots. |
| `/plot claim [auto]` | | Comando para el residente de una ciudad para comprar una parcela que está a la venta. El `auto` compra un área de parcelas alrededor. |
| `/plot unclaim [circle/rect] [area]` | | Comando para el residente de una ciudad para abandonar una parcela que le pertenecía. Puedes especificar una forma `circle/rect` y su radio para abandonar varios. |
| `/plot forsale [circle/rect] [area]` | | Pon una parcela a la venta. Puedes especificar una forma `circle/rect` y su radio para poner varios a la venta. |
| `/plot forsale <precio> [circle/rect] [area]` | | Pon el precio a una parcela o conjunto de parcelas que estén a la venta. |
| `/plot notforsale [circle/rect] [area]` | | Desactiva las parcelas que estén a la venta. Puedes especificar una forma `circle/rect` y su radio para desactivar varias parcelas. |
| `/plot perm` | | Muestra los permisos de la parcela en el que esté posicionado. |
| `/plot perm hud` | | Activa/desactiva la interfaz de permisos en una scoreboard con información más relevante. |
| `/plot set reset` | | Vuelve a reestablecer una parcela de cualquier tipo a una normal. |
| `/plot set shop` | | Cambia la parcela a una de tipo tienda (sólo lo podrán realizar aquellos alcaldes/asistentes que sean de veteranía igual o superior a <span class="tag-vet-6"></span>). |
| `/plot set embassy` | | Cambia la parcela a una de tipo embajada (sólo lo podrán realizar aquellos alcaldes/asistentes que sean de veteranía igual o superior a <span class="tag-vet-17"></span>). |
| `/plot set arena` | | Cambia la parcela a una de tipo arena (siempre tendrá habilitado el PVP y el fuego amigo; aparte regeneraciones de vida de la propia ciudad no actuarán en dichas parcelas). |
| `/plot set wilds` | | Cambia la parcela a una de tipo salvaje. |
| `/plot set inn` | | Cambia la parcela a una de tipo posada (el residente podrá emplear la cama sin pertenecer a la ciudad y si no está identificado como enemigo). |
| `/plot set jail` | | Cambia la parcela a una de tipo cárcel (en ella podrás definir el punto de spawn de aquellos residnetes que se envíen ahí). |
| `/plot set farm` | | Cambia la parcela a una de tipo granja (en ella podrás cosechar y que los residentes recojan la comida o incluso la puedan replantar). |
| `/plot set name` | | Permite al alcalde o al dueño de la parcela cambiar el nombre a una parcela. Si ambos ponen nombre se muestran los dos (el colocado por el alcalde y el colocado por el dueño de la parcela). |
| `/plot set perm <resident/ally/outsider> <on/off>` | | |
| `/plot set perm <build/destroy/switch/itemuse> <on/off>` | | |
| `/plot set perm <resident/ally/outsider> <build/destroy/switch/itemuse> <on/off>` | | |
| `/plot set perm reset` | | Reestablece los permisos de la parcela a las de por defecto del plot (si ha pertenecido a un dueño) o a las de la ciudad (si sólo pertenecía a la ciudad). |
| `/plot toggle fire` | | Habilita/deshabilita la propagación del fuego en la parcela. |
| `/plot toggle pvp` | | Habilita/deshabilita el pvp en la parcela. |
| `/plot toggle explosion` | | Habilita/deshabilita las explosiones en la parcela. |
| `/plot toggle mobs` | | Habilita/deshabilita el spawneo de mobs dentro de la parcela. |

## Comandos de residentes
Independientemente de parcelas, ciudades y embajadas; tu eres un individuo. Como residente tambien tienes que tener en cuenta estos comandos plugin towny. Afectan mucho y ya sea para hacer amigos y gestionar sus permisos o simplemente para saber la info de residente conviene saberlos.

| Comando | | Descripción |
| :--- | :---: | :--- |
| `/res` | | Muestra tu propio perfil de residente. |
| `/res ?` | | Muestra los comandos de los residentes. |
| `/res <residente>` | | Muestra el perfil de cierto residente. |
| `/res friend add <residente> [residente2...]` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Agrega a tu lista de amigos a uno o varios residentes a la vez que estén online. *Si agregas a alguien a tu lista de amigos le permites destruir/construir en tus propiedades si lo tienes activado por defecto en tus perms!* |
| `/res friend add+ <residente> [residente2...]` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Agrega a tu lista de amigos a uno o varios residentes a la vez que estén offline. *Si agregas a alguien a tu lista de amigos le permites destruir/construir en tus propiedades si lo tienes activado por defecto en tus perms!* |
| `/res friend remove <residente> [residente2...]` | | Elimina de tu lista de amigos a uno o varios residentes a la vez que estén online. |
| `/res friend remove+ <residente> [residente2...]` | | Elimina de tu lista de amigos a uno o varios residentes a la vez que estén offline. |
| `/res friend clearlist` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Elimina a toda la lista de amigos. |
| `/res list` | | Muestra los residentes que están online de la ciudad a la que pertenezcas. |
| `/res jail paybail` | | Permites a un residente encarcelado a pagar un precio para salir de la cárcel. El dinero va directamente al banco de la ciudad. |
| `/res spawn` | | Si el residente tiene una cama como lugar de spawn, se teletransportará directamente a ese punto. |
| `/res toggle map` | | Activa/desactiva un mapa en el chat que se va actualizando conforme te muevas de una parcela a otra. |
| `/res toggle townclaim` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Activa/desactiva el modo de autoclaim en el que conforme de muevas por los bordes de la ciudad te va claimeando las parcelas automáticamente. |
| `/res toggle plotborder` | | Activa/desactiva las delimitaciones de las parcelas a través de un humo que sale en los bordes al cambiar de una parcela a otra. |
| `/res toggle reset` | | Desactiva todas las opciones activadas. |
| `/res set perm <resident/ally/outsider> <on/off>` | | |
| `/res set perm <build/destroy/switch/itemuse> <on/off>` | | |
| `/res set perm <resident/ally/outsider> <build/destroy/switch/itemuse> <on/off>` | | |
| `/res set perm reset` | | Reinicia todos los permisos establecidos a los de por defecto. |
| `/res tax` | | Muestra los impuestos que pagas. |

## Comandos de ciudades
Si eres alcalde de una ciudad en el servidor o un asistente, estos comandos te ayudarán a comprobar y administrar la ciudad y tener todos los permisos en cuenta para que no tengas problemas de seguridad.

| Comando | | Descripción |
| :--- | :---: | :--- |
| `/town` | | Muestra toda la información de la ciudad a la que perteneces. |
| `/town ?` | | Muestra los comandos disponibles para las ciudades. |
| `/town <ciudad>` | | Muestra la información de la ciudad indicada. |
| `/town here` | | Muestra la información de la ciudad en el que te encuentres. |
| `/town leave` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Abandonas la ciudad. |
| `/town list [página]` | | Muestra la lista de las ciudades creadas. |
| `/town online` | | Muestra la cantidad de residentes de tu ciudad que se encuentran online. |
| `/town plots <ciudad>` | | Muestra una lista de las parcelas que tiene la ciudad y del tipo que son o el precio de venta que tienen. |
| `/town <new/create> <ciudad>` | | Crea una nueva ciudad. __Cuesta__ <span class="tag-econ-dracmas">1.000.000</span> |
| `/town add <residente> [residente2...]` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Agrega a usuarios a tu ciudad (siendo alcalde/asistente). |
| `/town kick <residente> [residente2...]` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Expulsa a ciertos residentes de tu ciudad (siendo alcalde/asistente). |
| `/town spawn` | | Te teletransporta al spawn de tu ciudad. |
| `/town spawn <ciudad>` | | Te teletransporta al spawn de la ciudad indicada. __Cuesta__ <span class="tag-econ-dracmas">10</span> |
| `/town claim` | | Apropia un terreno como parcela de la ciudad (siendo alcalde o asistente). __Cuesta__ <span class="tag-econ-dracmas">5.000</span> __Elevación de impuestos diarios de ciudad:__ <span class="tag-econ-dracmas">+50</span> __por plot.__ |
| `/town claim outpost` | |  Claimea una zona externa a tu ciudad. __Cuesta__ <span class="tag-econ-dracmas">500.000</span> __el primer plot de outpost.__ |
| `/town claim [radio/auto]` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Claimea un área de plots alrededor tuyo o usa `auto` para claimearlos de forma automática. |
| `/town unclaim [radio]` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Despropia cierta parcela o un área de parcelas de la ciudad. |
| `/town unclaim all` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | La ciudad se despropia de todas las parcelas claimeadas. |
| `/town unclaim outpost` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Se emplea para despropiar terrenos anexos de una ciudad que se encuentren glitcheados. |
| `/town withdraw <dracmas>` | | Aporta al alcalde cierta cantidad del banco (sólo lo puede emplear el alcalde). |
| `/town deposit <dracmas>` | | Agrega cierta cantidad de dracmas al banco de la ciudad. |
| `/town buy bonus <cantidad>` | | Compra la cantidad deseada de parcelas bonus para la ciudad. __Cuesta__ <span class="tag-econ-dracmas">20.000</span> __Cantidad disponible: 50 bonus plot.__ |
| `/town delete <ciudad>` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Elimina la ciudad (sólo lo puede realizar el alcalde). |
| `/town outlawlist <ciudad>` | | Muestra los enemigos listados de una ciudad. |
| `/town outlaw <add/remove> <ciudad>` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Agrega o elimina a un usuario enemigo a tu lista de la ciudad. (Al agregarlo se expulsa automáticamente de la ciudad si era residente de la misma). |
| `/town outpost <número/list>` | | Te teletransporta a un lugar anexo de la ciudad o te muestra una lista de las áreas anexas de la ciudad. |
| `/town ranklist` | | Te muestra los residentes y sus rangos definidos en la ciudad. |
| `/town rank <add/remove> <usuario> <rango>` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Agrega o elimina a un residente de cierto rango de la ciudad. [Consulta los rangos](#rangos-de-ciudades) |
| `/town reslist <ciudad>` | | Muestra una lista completa de todos los residentes de una ciudad. |
| `/town say <mensaje>` | | Emite un mensaje a todos los miembros de la ciudad. |
| `/town set board <mensaje>` | | Muestra un mensaje de la ciudad cuando un residente entra. |
| `/town set mayor <usuario>` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Comando que puede poner el alcalde para nombrar a otro residente como alcalde de dicha ciudad. |
| `/town homeblock` | | Pone dicha parcela como homeblock de la ciudad y la ubicación como spawn de la ciudad. |
| `/town spawn` | | Pone la ubicación en la que se ejecuta como spawn de la ciudad. (Debe ser dentro del homeblock). |
| `/town name <nombre>` | | Cambia el nombre de la ciudad. |
| `/town outpost` | | Reemplaza el lugar de spawn de una zona anexa a la ciudad a la localización del jugador correspondiente. (Debe estar dentro de un plot de esa zona anexa). |
| `/town jail` | | Reemplaza el lugar de spawn de una parcela tipo cárcel a la localización del jugador. |
| `/town set perm <resident/ally/outsider> <on/off>` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | |
| `/town set perm <build/destroy/switch/itemuse> <on/off>` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | |
| `/town set perm <resident/ally/outsider> <build/destroy/switch/itemuse> <on/off>` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | |
| `/town set perm reset` | | Reinicia todos los permisos establecidos a los de por defecto. |
| `/town set tag <tag>` | | Define el tag de la ciudad. *Se permiten hasta 4 letras.* |
| `/town set tag clear` | | Elimina el tag de la ciudad. |
| `/town set taxes <dracmas>` | | Configura los impuestos diarios que se cobrarán a los residentes. También se pueden poner porcentajes. __Impuestos máximos diarios que se pueden poner a un residente:__ <span class="tag-econ-dracmas">100</span> __ó 25%.__ |
| `/town set plottax <dracmas>` | | Configura los impuestos diarios por plot que tengan los residentes. |
| `/town set plotprice <dracmas>` | | Define un precio estándar para todos los plots que se pongan a la venta. |
| `/town set shopprice <dracmas>` | | Define un precio estándar para todos los plots tipo tienda que se pongan a la venta. |
| `/town set shoptax <dracmas>` | | Configura los impuestos diarios por plot tipo tienda que tengan los residentes. |
| `/town set embassyprice <dracmas>` | | Define un precio estándar para todos los plots tipo embajada que se pongan a la venta. |
| `/town set embassytax <dracmas>` | | Configura los impuestos diarios por plot tipo embajada que tengan los residentes. |
| `/town toggle explosion` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Habilita/deshabilita explosiones en la ciudad. |
| `/town toggle fire` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Habilita/deshabilita la propagación del fuego en al ciudad. |
| `/town toggle mobs` | | Habilita/deshabilita la aparición de mobs dentro de la ciudad. |
| `/town toggle public` | | Habilita/deshabilita que los usuarios puedan acceder con /t spawn a la ciudad o ver las coordenadas en el perfil de la ciudad. |
| `/town toggle pvp` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Habilita/deshabilita el pvp en la ciudad. |
| `/town toggle taxpercent` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Habilita/deshabilita los impuestos porcentuales de los terrenos. |
| `/town toggle open` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Habilita/deshabilita las entradas abiertas de los residentes a tu ciudad (es decir, que se pueden meter solos a la ciudad sin necesidad de invite). |
| `/town toggle jail <número> <residente>` | | Envia a un residente de tu ciudad a la cárcel indicada con dicho número. |
| `/town join <ciudad>` | | Comando para pertenecer a una ciudad que no requiera de invitación por parte del staff de la ciudad (es decir, que esté open). |

### Rangos de ciudades
- __Reclutador__: Sólo tiene permisos para invitar a usuarios a tu ciudad.
- __Carcelero__: Tiene permisos para enviar a alguien a la cárcel de la ciudad; y expulsar a un usuario de la ciudad y catalogarlo como enemigo.
- <span style="color:red">:lucide-circle-alert:</span> __Constructor__: Puede construir en cualquier plot perteneciente a la ciudad, sea o no de un usuario. También puede abrir los cofres que no estén privatizados en cualquier zona de la ciudad.
- <span style="color:red">:lucide-circle-alert:</span> __Ayudante__: Gestiona la parte del reclutador y los permisos de los plots de la ciudad. Puede poner/quitar plots que estén a la venta y cambiar sus permisos y configuraciones en cualquier aspecto.
- <span style="color:red">:lucide-circle-alert:</span> __Asistente__ (assistant debes poner en este caso): Tiene todos los permisos de gestión y construcción excepto la retirada de dracmas de la ciudad que sólo lo podrá realizar el alcalde.

## Comandos de nación
La unión es más poderosa. Creando una nación de varias ciudades puedes fortalecer ciertas relaciones entre las mismas. Infórmate bien con los siguientes comandos.

| Comando | | Descripción |
| :--- | :---: | :--- |
| `/nation` | | Muestra el perfil de la nación a la que pertenezca tu ciudad. |
| `/nation ?` | | Te muestra los comandos de nación. |
| `/nation list [página]` | | Lista de las naciones creadas en el servidor. |
| `/nation online` | | Muestra los jugadores que están online de tu nación. |
| `/nation <nación>` | | Te muestra el perfil de la nación indicada. |
| `/nation leave` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Siendo alcalde, eliminas la ciudad de la nación la que pertenece. |
| `/nation withdraw <dracmas>` | | El rey de la nación puede retirar cierta cantidad de dracmas de las arcas de la nación. |
| `/nation deposit <dracmas>` | | El rey de la nación puede depositar cierta cantidad de dracmas a las arcas de la nación. |
| `/nation <new/create> <nación>` | | Comando a ejecutar por un alcalde para crear una nación. Debes ser de una veteranía igual o superior a <span class="tag-vet-20"></span>. __Cuesta__ <span class="tag-econ-dracmas">500.000</span> |
| `/nation rank` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Comando para mostrar/definir rangos para la nación. |
| `/nation add <ciudad> [ciudad2...]` | | Invitas/agregas una ciudad o varias a la nación (debe realizarlo el rey o asistentes de la nación). |
| `/nation remove <ciudad> [ciudad2...]` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Expulsas una ciudad o varias de la nación (debe realizarlo el rey o asistentes de la nación). |
| `/nation delete <nación>` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Elimina tu nación (debe realizarlo el rey o asistentes de la nación). |
| `/nation ally <add/remove> <nación> [nación2...]` | | Agrega o elimina una nación de tu lista de naciones aliadas. |
| `/nation enemy <add/remove> <nación> [nación2...]` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Agrega o elimina una nación de tu lista de naciones enemigas. |
| `/nation rank <add/remove> <usuario> <rango>` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Agrega o elimina a un jugador de cierto rango de la nación. |
| `/nation say <mensaje>` | | Emite un mensaje a todos los miembros de la nación. |
| `/nation set king <residente>` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Comando que debe poner el rey para ceder su legado a otro residente que se proclama rey. |
| `/nation set capital <ciudad>` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Comando para que el rey defina la ciudad capital de la nación. |
| `/nation set taxes <dracmas>` | <span style="font-size:20px; color:red">:lucide-circle-alert:</span> | Define los impuestos diarios que deben aportar las ciudades. |
| `/nation set name <nombre>` | | Cambia el nombre de la nación. |
| `/nation set title <residente> <título>` | | Comando del rey para otorgar un título nobiliario a algún residente. |
| `/nation set surname <residente> <sufijo>` | | Comando del rey para otorgar un sufijo a algún residente. |
| `/nation set tag <tag>` | | Define/modifica el tag de la nación. |
| `/nation set tag clear` | | Elimina el tag de la nación. *Se permiten hasta 4 letras.* |
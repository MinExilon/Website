---
icon: lucide/book-user
---
# La Guía del Buen Alcalde

En esta guía se tiene como objetivo aclarar ciertos procedimientos (entre ellos comandos y algunas indicaciones para preparar diversos tipos de zonas públicas) y asegurar que tu ciudad avance en buen camino priorizando los impuestos y especificando las funciones de cada rango de staff para que haya la máxima seguridad y coordinación posible.

## Distribución de la guía y consejos
La guía se organiza en tres temas principales: __impuestos__, __rangos__ y __tipos de parcelas__. La guía está centrada sobre todo para vicealcaldes y alcaldes ya que varios permisos sólo lo pueden ejecutar ellos.

!!! info "Se aconseja leer e informarse adecuadamente de todos los permisos que envuelven a la ciudad y a las parcelas con la [Guía de Comandos Towny](./comandos.md)"

## Los impuestos
> *"La manera más segura de doblar tu dinero es unir los dos extremos del billete y guardarlo en tu bolsillo."* – Kin Hubbard.

### El impuesto diario de mundo Exilon
Lo más importante es garantizar que la ciudad se mantenga en pie, ya que cada día hay un impuesto que se cobra a todas las ciudades. Ese impuesto depende de la cantidad de plots que tenga la ciudad, es decir, cada plot aumenta el impuesto diario <span class="tag-econ-dracmas">50</span>.

Ejemplo: una ciudad con 15 plots tendrá un impuesto diario de 15 · <span class="tag-econ-dracmas">50</span> = <span class="tag-econ-dracmas">750</span>

!!! tip "Vía `/t <ciudad>` puedes ver la información de los impuestos diarios que actualmente se cobran de tu ciudad cada día y la cantidad de plots que tiene."

### Agregar dinero al banco de la ciudad
Los impuestos se cobran vía el banco de la ciudad. Para meter dinero al banco de la ciudad debes poner `/t deposit <dracmas>`.

Esta acción la pueden realizar todos los residentes de la ciudad por lo que sería bastante bueno incentivarlos a que depositen el dinero que puedan, para que la ciudad aguante!

!!! danger "Asegura que la ciudad tenga margen en el banco ya que, en caso de que el banco de quede a <span class="tag-econ-dracmas">0</span>, la ciudad pasará a un estado de Bancarrota."

### Imponer un impuesto diario a los residentes
Este método tiene cierto riesgo aparte de poder causar cierto descontento a los residentes de tu ciudad; pero es una vía para garantizar ciertos ingresos que automáticamente pasan al banco de la ciudad para hacer frente a los impuestos diarios.

!!! danger "¡Este tipo de impuesto puede expulsar residentes!"
    Si un residente no puede pagar los impuestos de la ciudad se expulsa automáticamente de la misma, por lo que mucho cuidado con establecer este método!!

Existen __dos tipos de impuestos__ que se le puede retirar a un usuario. A continuación se explican los pasos a realizar para configurarlo en el modo deseado.

<div class="grid cards" markdown>

-   :lucide-banknote:{ .lg .middle } &nbsp; __Impuesto fijo__

    ---

    1. Deshabilita el formato porcentual usando `/t toggle taxpercent`. Revisa en el chat el modo y usa de nuevo el comando si ves que te indica otro.
    2. Define el impuesto fijo diario vía `/t set taxes <dracmas>` (como máximo están capados a <span class="tag-econ-dracmas">100</span> para evitar abusos).
    3. Verifica que se haya colocado correctamente mirando la información en `/t <ciudad>`

-   :lucide-banknote-arrow-up:{ .lg .middle } &nbsp; __Impuesto porcentual__

    ---

    1. Habilita el formato porcentual usando `/t toggle taxpercent`. Revisa en el chat el modo y usa de nuevo el comando si ves que te indica otro.
    2. Define el impuesto porcentual diario vía `/t set taxes <porcentaje SIN el símbolo %>` (como máximo están capados a un 5% del dinero de los residentes y <span class="tag-econ-dracmas">100</span> para evitar abusos).
    3. Verifica que se haya colocado correctamente mirando la información en `/t <ciudad>`

</div>

### Consecuencias de ser un moroso
Si al momento de cobrar los impuestos tu ciudad no alcanza a pagarlo, la ciudad automáticamente queda en estado de Bancarrota.

#### Estado de Bancarrota
Si tu ciudad está en Bancarrota, tu saldo de la ciudad comenzará a acumularse en números negativos, es decir, deudas.

Las deudas las puedes resolver depositando en el banco de la ciudad una cantidad de dracmas que vuelva a poner tu saldo en números positivos, por ejemplo: si tu ciudad está en <span class="tag-econ-dracmas">-3.400</span>, podrás saldar la deuda haciendo un depósito de <span class="tag-econ-dracmas">3.401</span>.

Dependiendo del nivel de la ciudad, el margen de deudas hasta que la ciudad quiebre varía, siendo inicialmente de 1 millón de dracmas.

Si tu ciudad supera el margen de deudas, la ciudad quiebra y se desvanece retirando todas las protecciones y parcelas.

#### Quiebre de la ciudad

!!! info "Apartado en construcción"

<!-- Aquí pueden suceder tres cosas:

1. __El alcalde de la ciudad sea un usuario activo y hubo un despiste o falta de dinero puntual.__ En este caso se le proporciona la cantidad de dracmas para que vuelva a crear la ciudad (el homeblock). El resto de plots deberá de volver a claimearlo y recuperarlo el propio alcalde.
    - Sólo se le restaura 1 vez.
2. __La ciudad tiene riesgo de caída y su staff solicita la inhabilitación de la ciudad ya que no puede hacer frente a los impuestos.__ En este caso el mando de la ciudad pasa a manos de un NPC y se retira a todo el staff sus respectivos rangos hasta que lo soliciten de vuelta.
    - Para retomar la ciudad deben pagar una multa equivalente a la siguiente ecuación: Multa = {días inhabilitados} · {impuesto diario} + 250.000 dracmas
    - Si no retoman la ciudad en un plazo de 30 días se pondrá a subasta vía el foro. Si nadie puja por ella se pasará a regenerar la zona completamente, eliminando la ciudad.
    - Una ciudad sólo tendrá 1 posibilidad de solicitar el NPC. NO se resetea la solicitud del NPC al subastar la ciudad.
3. __No se trata de ninguna de las 2 situaciones anteriores.__ En este caso la ciudad pasará a estas en manos del staff 3-4 días antes de caer. Según el historial, la decisión del staff o el interés de los usuarios se procederá a ponerlo en subasta. En caso contrario se procede a regenerar la zona desahuciando a todos los residentes que tenían plots en dicha ciudad. -->

## Los Rangos de la ciudad
> *"Si dos cabalgan en un caballo, uno debe ir detrás."* – William Shakespeare.

En este apartado se definirá de forma concreta a qué comandos puede acceder el usuario en cierto rango de la ciudad para que los alcaldes puedan asegurar que la función asignada al usuario es el correcto. Se irá describiendo de menor a mayor importancia y riesgo.

!!! question "Asigna o elimina a un usuario del rango deseado con `/town rank <add/remove> <residente> <rango>`"

!!! warning "No asignes los rangos a usuarios que no conozcas o que sean irresponsables!"
    Hay rangos que permiten modificar permisos en parcelas y romper bloques, por lo que puedes tener riesgo a que destruya la ciudad.

<div class="grid cards" markdown>

-   ### :lucide-user-search:{ .lg .middle } &nbsp; __Rango Reclutador__

    ---

    Invitar a usuarios a la ciudad: `/t add <usuario>`

-   ### :lucide-user-lock:{ .lg .middle } &nbsp; __Rango Carcelero__

    ---

    - Cambiar/renombrar el punto de spawn en un plot cárcel: `/t set jail <número>`
    - Agregar o eliminar a un usuario como enemigo de la ciudad: `/t outlaw <add/remove> <usuario>`
    - Enviar a residentes a la cárcel: `/t toggle jail <número> <usuario>`

-   ### :lucide-user-cog:{ .lg .middle } &nbsp; __Rango Constructor__

    ---

    !!! warning "Puede construir y destruir bloques en cualquier zona de la ciudad"

    - Cambiar los permisos de globales de la ciudad: `/t set perm <resident/ally/outsider> <build/destroy/switch/itemuse> <on/off>`
    - Construir y destruir bloques en cualquier zona de la ciudad, las parcelas de los usuarios inclusive.

    !!! danger "Puede abrir cofres desprivatizados en cualquier parte de la ciudad."

-   ### :lucide-user-plus:{ .lg .middle } &nbsp; __Rango Ayudante__

    ---

    !!! warning "Puede construir y destruir bloques en cualquier zona de la ciudad"

    - Permisos de :lucide-user-search:{ .middle } __Rango Reclutador__
    - Permisos de :lucide-user-cog:{ .middle } __Rango Constructor__
    - Activar/desactivar aspectos en cualquier parcela: `/plot toggle <fire/pvp/explosion/mobs>`
    - Poder retirar parcelas de un residente y dejarlas como terreno de ciudad: `/plot evict`
    - Poner a la venta parcelas o retirarlas de venta: `/plot fs {dracmas}` y `/plot nfs`

-   ### :lucide-user-pen:{ .lg .middle } &nbsp; __Rango Asistente__

    ---

    !!! warning "Puede construir y destruir bloques en cualquier zona de la ciudad"

    - Permisos de :lucide-user-plus:{ .middle } __Rango Ayudante__
    - Puede asignar los rangos ayudante, carcelero y constructor a otros ciudadanos.
    - Plena gestión de parcelas: `/plot ?`
    - Inmune a los impuestos que la ciudad cobra a sus ciudadanos.
    - Puede activar/desactivar que la ciudad sea pública o no (es decir, que puedan acceder vía `/t spawn` o verlo en `/t list`): `/t toggle public`
    - Puede usar todos los objetos posibles en cualquier parcela de la ciudad.
    - Puede claimear terreno externo a la ciudad: `/t claim`

-   ### :lucide-user:{ .lg .middle } &nbsp; __Rango Vicealcalde__

    ---

    !!! warning "Puede construir y destruir bloques en cualquier zona de la ciudad"

    - Permisos de :lucide-user-pen:{ .middle } __Rango Asistente__
    - Plena gestión de parcelas: `/plot ?`
    - Plena gestión de la ciudad: `/town ?`
        - Excepto cambiar el alcalde, el nombre de la ciudad y eliminar la ciudad.
    - Inmune a los impuestos que la ciudad cobra a sus ciudadanos.
    - Construir y destruir bloques en cualquier zona de la ciudad, las parcelas de los usuarios inclusive.
    - Puede usar todos los objetos posibles en cualquier parcela de la ciudad.

</div>

## Tipos de parcelas
> *"La innovación es lo que distingue a un líder de los demás."* - Steve Jobs

### Parcela tipo __inn__
> ¡Crea un hotel!

<figure markdown="span">
  ![Parcela inn](https://dummyimage.com/1080x650/555/fff&text=imagen pendiente)
  <figcaption>Parcela tipo inn</figcaption>
</figure>

Con la parcela en esta configuración puedes dejar a cualquier usuario usar las camas que haya dentro de ella para guardar su spawn (`/res spawn`) donde aparecerán al morir.

__Pasos para hacer un hotel__

1. Asigna este tipo de plot a aquella zona donde quieres hacer el hotel, poniéndote en los plots y escribiendo `/plot set inn`
2. Para que puedan usar __cofres__ asígnales el permiso a dichas parcelas vía `/plot set perm <resident/outsider> switch on`
    - `resident` – Si les quieres dar ese permiso a alguien que debe unirse a la ciudad.
    - `outsider` – Si les quieres dar ese permiso a usuarios que no pertenezcan a la ciudad.
3. Para evitar que en las habitaciones vacías puedan usar los cofres se recomienda colocar puertas de hierro sin palancas/botones (ya que no podrán colocar ítems en dichos plots, pero sí usar los botones y placas de presión).
4. Cuando haya un interesado en tener una habitación de hotel se le cambia la puerta por una de madera que pueda abrir el huésped y se le debe recomendar que use su `/c private` en el cofre para evitar que le roben otros usuarios.

### Parcela tipo __arena__
> Crea un campo de batalla

<figure markdown="span">
  ![Parcela arena](https://dummyimage.com/1080x650/555/fff&text=imagen pendiente)
  <figcaption>Parcela tipo arena</figcaption>
</figure>

Con la parcela en esta configuración el PVP siempre estará activo, aparte del fuego amigo. La regeneración de vida que tenga la ciudad para los residentes, no funcionará en estas parcelas.

__Pasos para hacer un campo de batalla__

1. Asigna este tipo de plot a aquella zona donde se realizan las luchas, poniéndote en los plots y escribiendo `/plot set arena`
2. Puedes agregar permisos adicionales en las parcelas dependiendo si deseas que salgan mobs, que pulsen botones o placas de presión, etc… vía `/plot set perm <resident/outsider> <build/destroy/switch/itemuse> <on/off>` y `/plot toggle <fire/pvp/explosion/mobs>`
    - `resident` – Para que ese permiso afecte a los usuarios que pertenezcan a la ciudad.
    - `outsider` – Para que ese permiso afecte a los usuarios que no pertenezcan a la ciudad.
!!! tip "No metas las gradas en esos plots porque los espectadores también tendrán pvp activado y sería un caos!"

### Parcela tipo __wild__
> ¡Pon zonas de libre uso!

<figure markdown="span">
  ![Parcela wild](https://dummyimage.com/1080x650/555/fff&text=imagen pendiente)
  <figcaption>Parcela tipo wild</figcaption>
</figure>

Con la parcela en esta configuración los residentes de la ciudad tendrán los mismos permisos que tienen en wilderness (podrán romper, colocar, usar elementos de redstone, usar azadas y otros elementos; no podrán romper cofres).

Dependiendo de la educación y los comportamientos de tus residentes es aconsejable o no colocar estos tipos de parcelas. Sobre todo son útiles para agregar zonas de talar árboles, cultivo de setas, etc… sin muchas complicaciones de permisos.

__Pasos para hacer una zona de libre uso__

1. Asigna este tipo de plot a aquella zona donde deseas que sea de libre uso vía /plot set wilds
2. Puedes agregar/quitar permisos adicionales en las parcelas dependiendo si deseas que salgan mobs, que pulsen botones o placas de presión, etc… vía `/plot set perm resident <build/destroy/switch/itemuse> <on/off>` y `/plot toggle <fire/pvp/explosion/mobs>`

Si quieres hacer zonas de libre uso por una vía más segura, hazlo de la siguiente manera:

1. Deja el plot en su configuración por defecto. Para asegurar colócate encima y pon `/plot set reset`
2. Para tener pleno control sobre los permisos habilita o deshabilita los permisos deseados vía `/plot set perm <resident/outsider> <build/destroy/switch/itemuse> <on/off>`
    - `resident` – Para que ese permiso afecte a los usuarios que pertenezcan a la ciudad.
    - `outsider` – Para que ese permiso afecte a los usuarios que no pertenezcan a la ciudad.

### Parcela tipo __jail__
> ¿Quieres montar una cárcel?

<figure markdown="span">
  ![Parcela jail](https://dummyimage.com/1080x650/555/fff&text=imagen pendiente)
  <figcaption>Parcela tipo jail</figcaption>
</figure>

Con la parcela en esta configuración los presos tendrán las siguientes limitaciones:

- No podrán teletransportarse a otros sitios.
- No podrán usar perlas de ender.
- Si mueren vuelven a ser teletransportados a la celda asignada.
- No aportan fondos monetarios a la ciudad si mueren.
- Los presos tendrán información de dónde están presos en su perfil de /res {residente}

!!! question "Cómo librarse de una celda"
    - Abandonar la ciudad vía `/t leave`
    - El carcelero, asistente, vicealcalde o alcalde te libre de la celda.
    - Pagando una multa de <span class="tag-econ-dracmas">1.000</span> a la ciudad vía `/resident jail paybail`
    - Encontrar la manera de escaparse de la celda y salir de la ciudad íntegramente (es decir, estar en wilderness).

__Pasos para hacer una celda__

1. Asigna este tipo de plot a aquella zona donde deseas que haya una celda /plot set jail
2. Colócate dentro de un plot tipo cárcel designado previamente y define ese punto como spawn a dicha celda vía `/t set jail <número>`
    - Sólo se permite una zona de aparición por parcela tipo cárcel, por lo que debes diseñar la cárcel de forma correcta para que cada celda tenga su lugar de aparición en parcelas distintas.
3. Para enviar a un residente a dicha cárcel pon `/t toggle jail <residente> <número>`
4. Puedes agregar permisos adicionales en las parcelas dependiendo si deseas que salgan mobs, que pulsen botones o placas de presión, etc… vía `/plot set perm resident <build/destroy/switch/itemuse> <on/off>` y `/plot toggle <fire/pvp/explosion/mobs>`

### Parcela tipo __farm__
> Monta granjas en tu ciudad

<figure markdown="span">
  ![Parcela farm](https://dummyimage.com/1080x650/555/fff&text=imagen pendiente)
  <figcaption>Parcela tipo farm</figcaption>
</figure>

Con la parcela en esta configuración los residentes tendrán los siguientes permisos:

- Podrán colocar y destruir los siguientes bloques: hierba alta, flores de doble altura, flores amarillas, rosas, raíz de calabaza, raíz de sandía, remolacha, zanahoria, patata, trigo, bloque de sandía y bloque de calabaza.
- Podrán matar los siguientes animales: cerdos, vacas, gallinas, ovejas y champivacas.

__Pasos para hacer una granja__

1. Asigna este tipo de plot a aquella zona donde deseas que puedan farmear `/plot set farm`
2. Para que los residentes puedan recolectar y plantar debes dar permisos de poner y rompres bloques vía `/plot set perm resident build on` y `/plot set perm resident destroy on`
3. Si quieres que los residentes puedan usar su azada en las parcelas para arar el suelo pon `/plot set perm resident itemuse on`
4. Puedes agregar permisos adicionales en las parcelas dependiendo de lo que desees vía `/plot set perm resident <build/destroy/switch/itemuse> <on/off>`
5. Si quieres que sean granjas públicas para que los que no pertenezcan a la ciudad también los puedan usar debes asegurar que tengan permisos de poner y romper bloques en `/plot perm` (que aparcezca `B=rao`, si aparece `B=r–` sólo los residentes puedes usarlo) vía `/plot set perm outsider <build/destroy/switch/itemuse> <on/off>`

### Parcela tipo __shop__
> Construye tiendas y mercados

<figure markdown="span">
  ![Parcela shop](https://dummyimage.com/1080x650/555/fff&text=imagen pendiente)
  <figcaption>Parcela tipo shop</figcaption>
</figure>

Con la parcela en esta configuración los usuarios podrán colocar cofres tienda en ella y vender ítems a residentes y usuarios que no pertenezcan a la ciudad.

__Pasos para hacer una tienda__

!!! info "Se requiere ser <span class="tag-vet-6"></span> o superior."

!!! info "Apartado en construcción"

### Parcela tipo __embassy__
> ¡Vende parcelas a otro nivel!

<figure markdown="span">
  ![Parcela embassy](https://dummyimage.com/1080x650/555/fff&text=imagen pendiente)
  <figcaption>Parcela tipo embassy</figcaption>
</figure>

Con la parcela en esta configuración los usuarios que no pertenezcan a la ciudad podrán comprar y utilizar esa parcela. Si los usuarios abandonan la ciudad pierden las parcelas normales, pero las parcelas tipo embajada permanecen siendo de su propiedad.

__Pasos para hacer una embajada__

!!! info "Se requiere ser <span class="tag-vet-17"></span> o superior."

1. Asigna este tipo de plot a aquella parcela deseada vía /plot set embassy
2. Para venderle dicho plot a un usuario ponlo a la venta vía /plot fs {dracmas}
    - El comprador debe poner /plot claim
    - Puedes poner un precio de venta a las embajadas de forma que cuando ejecutes el comando /plot fs no tengas que poner todo el rato el precio. Define el precio de venta por defecto de embajadas vía /t set embassyprice {dracmas}
3. Puedes agregarle impuestos diarios adicionales a los usuarios que tengan embajadas vía /t set embassytax {dracmas}

!!! warning "Si el dueño de la embajada se queda sin suficientes <span class="tag-econ-dracmas">dracmas</span> la pierde."

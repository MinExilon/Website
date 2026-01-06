---
icon: lucide/luggage
status: new
---
# Procedimiento de Desahucios

Un desahucio se realiza cuando el staff de una ciudad quiere retirar un plot que pertenece a un particular.
La ciudad no puede destruir las pertenencias de un usuario hasta que no se haya emitido y aceptado una petición de desahucio de la parcela afectada.

De esta manera, se garantiza que el usuario tenga consigo sus objetos almacenados, que podrá recuperar mediante comando.

## Proceso de petición de desahucio

Para solicitar un desahucio, debes ir a nuestro discord y crear un tícket en el canal de chat `#desahucios`, cumplimentando la siguiente información:

- **Nombre de la ciudad** que emite la petición.
- **Usuario desahuciado.**
- **Motivo del desahucio.** Revisa los motivos a continuación.
- **Número de plots** a desahuciar.
- **Coordenadas `x,y,z`** de cada plot a desahuciar.
- **Información adicional**, dependiendo del motivo. Revisa los motivos a continuación.

[:fontawesome-brands-discord:{ .lg .middle } &nbsp; Unirse a Discord](https://discord.com/invite/fxEqfnT){ .md-button .md-button--secondary }

Puedes **copiar la plantilla** a continuación para pegarla y rellenarla en discord rápidamente:

```
- **Nombre de la ciudad**: ciudad
- **Usuario desahuciado**: nickname
- **Motivo del desahucio**: motivo
- **Número de plots**: cantidad
- **Coordenadas de plots**: x,y,z
- **Información adicional**: rellenar dependiendo del motivo
```

## Motivos de desahucio

En todos los casos es necesario colocar en el plot del usuario, en un **lugar visible**, un cartel en el que se indique lo siguiente:

1. Debe quedar claro **su fecha de desahucio**.
2. Debe quedar claro **el motivo del desahucio**.
Este cartel debe estar presente los últimos 7 días, antes de su fecha de desahucio.

!!! info "Esto no es obligatorio si se trata de un [motivo excepcional](#motivos-excepcionales-de-desahucio)."

### Inactividad
Tiene que haber pasado mínimo 1 mes inactivo. Puedes consultarlo en `/res <usuario>`.

Cada ciudad puede tener su propia normativa de desahucio de inactividad a un período más largo, pero no uno más corto.

### Baneo temporal o permanente
Cuando se quiera desahuciar a un baneado temporal o permanente, se tendrá que esperar 7 días antes de hacer el desahucio por si el baneado quiere apelar y se le retira el ban.

En el caso de un ban temporal, debe ser de 30 días mínimo para aceptar su desahucio por este motivo.

### Incumplimiento de normas
Si el usuario ha incumplido una norma de la ciudad, **se debe añadir** en la petición lo siguiente:

```
- **Norma incumplida**: texto de la norma
- **Coordenadas de la normativa**: x,y,z
```

!!! warning "No se aceptarán desahucios si el usuario es inactivo"
    Si la ciudad intenta desahuciar a un usuario inactivo por algún incumplimiento de norma de la ciudad, queda rechazada porque no es el motivo principal de dicho usuario.
    
    Se debe solicitar como situación de inactividad (debiendo cumplir esas condiciones).

## Motivos excepcionales de desahucio
Son motivos en los que no son necesarios dar un margen de 7 días o más para desahuciar al jugador.
Aún así, se debe seguir **emitiendo un tícket de solicitud de desahucio** para que quede constancia y el staff pueda ayudar en cada caso.

### Abandono de la ciudad
Si un usuario abandona la ciudad dejando cofres en esta.

### Expulsión de la ciudad
Por motivos ajenos a la normativa del servidor y de la ciudad, el staff de la ciudad puede expulsar a un residente de la ciudad. Se debe indicar lo siguiente en el tícket de desahucio:

```
**Motivo de expulsión**: motivo
```

### Otros
Cualquier situación particular. Especificar en el tícket de desahucio la situación para que el staff pueda ayudarte y solucionarlo lo antes posible.

```
**Situación excepcional**: situación
```

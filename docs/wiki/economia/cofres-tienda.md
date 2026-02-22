---
icon: lucide/inbox
status: new
---
# Cofres de compra y venta de objetos

Al alcanzar la [veteranía](../basico/rangos.md#rangos-de-veterania) <span class="tag-vet-6"></span> desbloqueas los **cofres tienda**.
Estos cofres te permiten comprar y vender objetos en [parcelas de tipo tienda](../ciudades/buen-alcalde.md#parcela-tipo-shop) de una ciudad.

## Cómo crear un cofre tienda

Primero coloca uno de los siguientes cofres en una parcela tipo tienda:

- [x] Cofre normal o de redstone
- [x] Barril

Después, **ten el objeto del cofre tienda en la mano**, apunta al cofre y pon el siguiente comando:

```
/qs create <dracmas>
```

Este comando te cobra <span class="tag-econ-dracmas">2.500</span> y crea el cofre tienda.

Te saldrá un mensaje de confirmación y ya podrás llenarlo de ese objeto para venderlo!

También puedes configurar el cofre tienda para comprar ese objeto a cambio de tus <span class="tag-econ-dracmas">dracmas</span>. Consulta el apartado [Modo venta o compra](#modo-venta-o-compra).

## Gestión del cofre tienda

### Modificar el precio

Puedes modificar el precio del cofre tienda cuando quieras, utilizando el siguiente comando:

```
/qs price <dracmas>
```

!!! info "Se te cobran <span class="tag-econ-dracmas">50</span> por cambio."

### Modo venta o compra

Por defecto al crear un cofre tienda, se configura para **vender** el objeto que introduzcas en el cofre. También es posible configurarlo para **comprar** el objeto, a cambio de tus <span class="tag-econ-dracmas">dracmas</span>

<div class="grid cards" markdown>

-   **Modo venta**

    ```
    /qs sell
    ```

    Los usuarios compran el objeto de tu cofre tienda, recibiendo sus <span class="tag-econ-dracmas"></span>
    
    !!! note "Debes ir reponiendo el cofre de objetos."

-   **Modo compra**

    ```
    /qs buy
    ```

    Los usuarios pueden venderte el objeto que solicitas, cobrándote tus <span class="tag-econ-dracmas"></span>
    
    !!! note "Debes vigilar tus <span class="tag-econ-dracmas"></span> y el espacio!"

</div>

### Eliminar un cofre tienda

Para eliminar un cofre tienda, apunta al cofre y pon el siguiente comando:

```
/qs remove
```

Esto hará que el cofre ya no tenga el aspecto de cofre tienda, actuando como un cofre cualquiera.

### Otros comandos útiles

Existe una forma para buscar si se vende o compra un objeto en un radio de 45 bloques desde donde estás, utilizando el siguiente comando:

```
/qs quicksearch <item>
```

!!! info "El `item` debe indicarse en inglés."
---
date:
  created: 2021-11-15
authors:
  - tblacknight
categories:
  - Tutoriales
tags:
  - minecraft 1.17
  - java
  - java 16
  - instalación
---

# Instalar Minecraft 1.17 con Java 16 para 32 y 64 bits

<figure markdown="span">
  ![Portada](https://img.minexilon.com/blog/2021/portada_java16.webp){ width="100%" }
</figure>

Para jugar la 1.17 es necesario que instales Java 16. En este post se detalla todos los pasos para descargar la versión de Java, dependiendo del launcher en el que juegues.

<!-- more -->

## Instalación de Java 16

!!! info "¿Cómo sé si mi PC es de 32 o 64 bits?"
    Pulsa ++win++ o ++cmd++ y escribe `Acerda de tu PC`. En el panel busca algún apartado de __Tipo de Sistema__, ahí te indica si es un sistema operativo de 64 o 32 bits.

    En la actualidad, los ordenadores son de 64 bits.

### Si tienes Windows de 64 bits

Puedes descargarlo de la pagina oficial de oracle: [Java 16](https://www.oracle.com/java/technologies/downloads/#java16-windows)

Bajas hasta las descargas y das click a windows y luego a `jdk-16.0.2`

![Selección del JDK](https://i.imgur.com/hjz1DOp.jpeg)

Al finalizar, sigue los pasos basicamente Siguiente, siguiente, siguiente...

### Si tienes Windows de 32 bits

En ese caso, no podrás instalar el JDK oficial de Oracle. Tendrás que hacer lo siguiente: [Descarga Esta version de Java 16 para 32 Bits](https://download.bell-sw.com/java/16.0.2+7/bellsoft-jdk16.0.2+7-windows-i586.msi)

Ya que lo hayas descargado, da doble clic para iniciar el proceso de instalación. Como con cualquier instalación, solo debemos dar clic al botón que dice Siguiente o Next.

Una vez finalizada la instalación, ya podrás ejecutar tu launcher y bajar la versión 1.17.1, si no sigue las instrucciones abajo.

## Selección de la versión de Java en el Launcher

### Con el launcher oficial
Abre el launcher y ve a Instalaciones.

Seleccionas la version 1.17.1 das click

Le das a Más Opciones y donde va el Java Executable pones la ruta de Java

=== "64 bits"

    ```
    C:\Archivos de Programa\Java\jdk-16.0.2\bin\javaw.exe
    ```

=== "32 bits"

    ```
    C:\Program Files\BellSoft\LibericaJDK-16\bin\javaw.exe
    ```

![Ruta al ejecutable de java](https://i.imgur.com/2kEfLFv.jpeg)

### Launcher Fenix
Debemos ir a la opción Editar Perfil, lo que nos abrirá la siguiente ventana. Damos clic a la casilla del lado izquierdo de Ejecutable y se nos activará la casilla. Finalmente le damos a los 3 puntitos marcados en la imagen. Y buscamos en la ruta:

=== "64 bits"

    ```
    C:\Archivos de Programa\Java\jdk-16.0.2\bin\javaw.exe
    ```

=== "32 bits"

    ```
    C:\Program Files\BellSoft\LibericaJDK-16\bin\javaw.exe
    ```

![Editor de Perfil](https://i.imgur.com/LIpqRN6.jpeg)

### TLauncher o ATLauncher

Con TLauncher, nos dirá algo así después de instalar:

![Instalación TLauncher](https://i.imgur.com/XFJqtND.png)

Esto se debe a que este launcher no tiene soporte para Java 1.16. Por lo que te pedirá que instales Java 8.

Al iniciarlo, darás al engranaje en la esquina inferior derecha y luego en Configuraciones. En la opción Directorio deberás darle al botón Resumen y deberás buscar la ruta:

=== "64 bits"

    ```
    C:\Archivos de Programa\Java\jdk-16.0.2\bin\javaw.exe
    ```

=== "32 bits"

    ```
    C:\Program Files\BellSoft\LibericaJDK-16\bin\javaw.exe
    ```

En caso de no funcionar, por favor, usa otro launcher como [ATLauncher](http://tlaun.ch/dl/mcl/exe).

!!! note "Aviso de virus"
    Si te salta que tiene virus ignoralo. Si no estás seguro, utiliza otro de los launchers arriba mencionados.

Si ya tenías descargado java16 pero no inicia, verifica la ruta sea correcta.

```
C:\Program Files\BellSoft\LibericaJDK-16\bin\javaw.exe
C:\Program Files\Java\jdk-16.0.1\bin\javaw.exe
C:\Program Files\Java\jdk-16.0.2\bin\javaw.exe
```

## Error de OpenGL
El error __GLFW error 65542 WGL: the driver does not appear to support OpenGL__ se debe a que tu chip o tarjeta de vídeo o sistema operativo no están usando OpenGL en la versión que Minecraft 1.17 necesita. Y esto es debido a que tu chip o tarjeta de vídeo o sistema operativo no son compatibles.

Para solucionar esto debes descargar el comprimido: [32 bits](https://minexilon.com/descargas/MesaForWindows-20.1.8.7z) o [64 bits](https://minexilon.com/descargas/MesaForWindows-x64-20.1.8.7z)

Abres con [7-Zip](https://www.7-zip.org/a/7z1900.msi) o cualquier descompresor que tengas y copias el `OpenGL32.dll` y lo pegas en la ruta:

=== "64 bits"

    ```
    C:\Archivos de Programa\Java\jdk-16.0.2\bin\javaw.exe
    ```

=== "32 bits"

    ```
    C:\Program Files\BellSoft\LibericaJDK-16\bin\javaw.exe
    ```

Con esto es posible que se solucione el error.
FROM python:3.12-slim

# Instala dependencias del sistema necesarias para MkDocs
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Instala MkDocs con el tema Material
RUN pip install --no-cache-dir mkdocs-material

# Establece el directorio de trabajo
WORKDIR /docs

# Expone el puerto 8000 para desarrollo
EXPOSE 8000

# Comando por defecto al iniciar el contenedor
# CMD ["mkdocs", "serve", "-a", "0.0.0.0:8000"]
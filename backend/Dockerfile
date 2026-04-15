# Usamos una imagen base con node instalado
FROM  node:22

# Creamos carpeta dentro del contenedor
WORKDIR /app

# Copiamos  todas las dependencias (package.json)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos todo el proyecto
COPY . .

# Exponemos el puerto (tu backend usa 3000)
EXPOSE 3000

# EJECUTAMOS EL SERVIDOR 
CMD ["npm", "run", "dev"]
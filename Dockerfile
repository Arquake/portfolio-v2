FROM node:22

# Répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json yarn.lock ./

# Activer Yarn et installer les dépendances
RUN corepack enable && yarn install

# Copier le reste du code
COPY . .

# Définir le répertoire de travail par défaut
CMD [ "bash" ]

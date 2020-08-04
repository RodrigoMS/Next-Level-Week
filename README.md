# Ecoleta

<p>🇱🇷 &nbsp; &nbsp; The theme of the project comes from the need to help people to find recyclable waste collection points efficiently.</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Developed during the Rocketseat - Next Level Week event from June 1-7, 2020.</p>
<p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Encoded with NodeJS, React and React Native.</p>

#

<p>🇧🇷  &nbsp;&nbsp; O tema do projeto vem da necessidade de ajudar as pessoas a encontrar pontos de coleta de lixo reciclável com eficiência.</p>
<p> &nbsp;&nbsp;&nbsp; Desenvolvido durante o evento Rocketseat - Next Level Week de 1 a 7 de junho de 2020.</p>
<p> &nbsp;&nbsp;&nbsp; Codificado com NodeJS, React e React Native.</p>

#

### Start Back-end


<p> 🇱🇷 &nbsp; &nbsp; In the PointsController.ts file located in server / src / controllers, replace image_URL (line 31) with the machine's IP (server).</p>
<p>&nbsp;&nbsp;&nbsp; In the ItemsController.ts file located in server / src / controllers, replace image_URL (line 17) with the machine's IP (server).</p>

#

<p>🇧🇷 &nbsp; &nbsp; No arquivo PointsController.ts localizado em server/src/controllers troque image_URL (linha 31) pelo IP da máquina  (servidor).</p>
<p>&nbsp;&nbsp;&nbsp; No arquivo ItemsController.ts localizado em server/src/controllers troque image_URL (linha 17) pelo IP da máquina  (servidor).</p>

```bash
# ------------------ Primeira execução ----------------------

# Instalação das dependências do projeto.
$ npm install   ou   npm i

# Realizar uma migração do banco de dados.
$ npm run knex:migrate

# Realizar a migração dos dados da tabela seed que contem os
# itens pre estabelecidos para popular o banco de dados.
$ npm run knex:seed

# ----------------- Iniciar o projeto -----------------------

# Inicie o back-end no terminal dentro da pasta server
$ npm run dev
```

### Start Front-end


<p>🇱🇷 &nbsp; &nbsp; In the api.ts file located at web / src / services, change baseURL (line 4) with the machine's IP (server).</p>

#

<p>🇧🇷 &nbsp; &nbsp; No arquivo api.ts localizado em web/src/services troque baseURL (linha 4) pelo IP da máquina (servidor).</p>

```bash
# Inicie o Front-end no terminal dentro da pasta web.
$ npm run start
```


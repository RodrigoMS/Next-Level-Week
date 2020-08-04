#/bin/bash

## ----------------------------- Aviso ------------------------------- ##

## Marcado com 1 e da primeira aula
## Marcado com 2 e da segunda aula
## Marcado com 5 e da quinta aula

## ------------------------------------------------------------------- ##

## 1- Cria a pasta do projeto.
mkdir nlw

## 1- Entra na pasta.
cd nlw

## Cria a pasta do backend.
mkdir server

## 1- Entra na pasta server.
cd server

## 1- Inicie a aplicação, com todos os valores default.
npm init -y

## 1- Instala o express que é um micro frame para lidar com rotas.
npm install express

## 1- Definição de tipo type ("-D" - dependência de desenvolvimento)
npm install @types/express -D

## 1- Instalação do ts-node que converte convertendo o type em java
npm install ts-node -D

## 1- Instalação do type
npm install type -D

## 1- Criar arquivo de configuração do type
npx tsc --init

## 1- Instalação do node-dev para não ficar parando e iniciando o servidor toda vez que o código é alterado
npm install ts-node-dev -D

## 2- Instalação do knexjs que e um query build para o banco de dados - http://knexjs.org 
## Permite escrever todas as consultas em forma de java.
## Vantagem de utilizar querys escritas em java com o knexjs e o fato 
## de se adaptar a qualquer banco de dados.
npm install knex

## 2- Instalação do client do banco de dados.
## Clientes suportados pelo knex
## npm install pg
npm install sqlite3
## npm install mysql
## npm install mysql2
## npm install oracledb
## npm install mssql

## Cross-orage Resource Sharing - Define quais endereços externos terão acesso a aplicação
npm install cors

## Definicao do type para o cors instalado como dependência de desenvolvimento.
npm install @types/cors -D

## 5- Multer - Upload de arquivos
npm install multer

## 5- Instalacao do Type para o Multer
npm install @types/multer -D

## 5- Validacao de formularios
## Buscar saber sobre o yup - http://github.com/jquense/yup
## Para backend utilize o celebrate que e baseado no "joi schema validation"
## O celebrate funciona muito bem com o express.
## 5- Instalacao do Celebrate para validacoes.
npm install celebrate

## 5- Type para o celebrate
## Como não se pode ter dois @ em uma instrução de instalação
## ele e substituído por __.
npm install @types/hapi__joi -D

## 1- Cria o diretório src onde ficará os arquivos da aplicação
mkdir src

cd src

## 1- Cria o primeiro arquivo da aula
touch server.ts

## 2- Cria o arquivo de rotas da aplicação
touch routes.ts

## 2- Cria o diretório onde ficara a conexão com o banco de dados
## e arquivos relacionados a banco de dados.
mkdir database

## 5- Pasta de configuração do multer
mkdir config

## 5- Entra na pasta config
cd config

## Cria o arquivo multer.ts - Onde ficara as configurações do multer.
touch multer.ts

## 2- Entra na pasta database
cd database

## 

## 2- Cria o arquivo responsável pela conexão com o banco
touch connection.ts

## 2- Cria a pasta migrations que armazenara os histo rios (Controle de versão) do banco de dados.
mkdir migrations

## 2- Criar a pasta seeds para armazenar itens pre estabelecidos no banco de dados para a aplicação
mkdir seeds

## 2- Entra na pasta seeds
cd seeds

##------------------------------- Muda conforme 0 projeto -------------------------------------##

## 2- Cria o arquivo create_items.ts
touch create_items.ts

##------------------------------- Fim muda conforme 0 projeto ---------------------------------##

## 2- Sai da pasta seeds
cd ..

## 2- Entra na pasta migrations
cd migrations

##------------------------------- Muda  conforme 0 projeto ------------------------------------##

## 2- Cria os arquivos de migração para cada tabela do banco de dados
## 2- Tabela de pontos de coleta
touch 00_create_points.ts

## 2- Tabela de itens da coleta
touch 01_create_items.ts

## 2- Tabela de relacionamento N..N (muitos para muitos),
## que guarda os itens que cada ponto de coleta recebe.
touch 02_create_point_items.ts

##------------------------------- Fim muda conforme o projeto --------------------------------##

## 2- Sai da pasta migrations
cd ..

## 2- Sai da pasta database
cd ..

## 2- Cria a pasta controllers para realizar a abstração do projeto, 
## desacoplando o código da aplicação
mkdir controllers

##------------------------------- Muda  conforme 0 projeto ------------------------------------##

## Cria o arquivo ItemsController - Todas as funcionalidades que manipulam Items.
touch ItemsController.ts

## Cria o arquivo PointsController - Todas as funcionalidades que manipulam Points.
touch PointsController.ts

##------------------------------- Fim muda conforme o projeto --------------------------------##

## 1- Sai da pasta src
cd ..

## 2- Cria o arquivo knexfiles - que executa as migrations.
touch knexfile.ts

## 2- Cria a pasta uploads - aonde ficara todas as imagens da aplicação
mkdir uploads

## 2- Criar o banco e identificar as migrações
#npx knex migrate:latest --knexfile knexfile.ts migrate:latest

## 1- Sai da pasta server
cd ..


## 1- Cria a pasta web para o front-end com react
## npx create-react-app web --template=type

## Após executar o shell, altere o arquivo "package.json" trocando a linha
## "test": "echo \"Error: no test specified\" && exit 1" para
## "dev": "ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts",
## Obs: O --ignore-watch node_modules - serve para que durante a execução o mesmo não 
## fique observando dentro da pasta node_modules, tornado a execução mais rápida.

## Adicione logo apos esta linha o  para as migrações do banco de dados
## "knex:migrate": "knex migrate:latest --knexfile knexfile.ts migrate:latest"
## e para a migração dos itens pre estabelecidos no banco de dados para a aplicação
## "knex:seed": "knex --knexfile knexfile.ts seed:run",

## 1- Ambiente configurado, basta colocar o código da aplicação em src/server.ts
## 1- Inicie o back-end no terminal dentro da pasta server com o comando "npm run dev"

## 2- Para realizar uma migração do banco de dados utilize "npm run knex:migrate"

## 2- Para realizar a migração dos dados da tabela seed que contem os itens pre 
## estabelecidos para popular o banco de dados utilizando "npm run knex:seed"

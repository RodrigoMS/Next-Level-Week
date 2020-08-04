#/bin/bash

## Para liberar observadores no Ubuntu
## Aumentar o numero de observadores de arquivo no Ubuntu.
## echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf  && sudo sysctl -p

## Cria a pasta web para o front-end com react.
## npx create-react-app web --template=type

## Pacote de icones.
npm install react-icons

## Pacote de roteamento do react.
npm install react-router-dom

## Pacote de tipagem do react-router-dom
npm install @types/react-router-dom -D

## Realizar requisicaos para o back-end node
npm install axios

## ------------------- Opcional para cada projeto ---------------- ##

## Mapa para aplicacao
## Leaflet - https://leafletjs.com/
## React Leaflet - https://react-leaflet.js.org/
npm install leaflet react-leaflet

npm install @types/react-leaflet -D

## Dropzone - Cria uma caiza arrasta solta para upload
## http://github.com/react-dropzone/react-dropzone
npm install react-dropzone

## --------------- Fim opcional para cada projeto ---------------- ##


## Entrar na pasta web.
cd web

## ------------------------- Inicio Limpeza ---------------------- ##

## Remover README.md
rm README.md

## Entrar na pasta public.
cd public

## Deletar arquivos desnecessarios.
rm favicon.ico
rm logo192.png
rm logo512.png
rm manifest.json
rm robots.txt

## Sair da pasta public
cd ..

## Entrar na pasta src
cd src

## 5- criar pasta components
mkdir components

## 5- Entra na pasta components
cd components

## 5- Cria a pasta Dropzone
mkdir Dropzone

## Entra na pasta Dropzone
cd Dropzone

## Cria o arquivo index.tsx
touch index.tsx

## Sai da Pasta Drozone
cd ..

## Sai da pasta componets
cd ..

## Deletar arquivos desnecessarios.
rm App.test.tsx
rm index.css
rm logo.svg
rm setupTests.ts
rm serviceWorker.ts

## Remover linhas do arquivo public/index.hmtl
## <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

## <meta
##   name="deion"
##   content="Web site created using create-react-app"
## />
## <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
##    <!--
##      manifest.json provides metadata used when your web app is installed on a
##      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
##    -->
## <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
##    <!--
##      Notice the use of %PUBLIC_URL% in the tags above.
##      It will be replaced with the URL of the `public` folder during the build.
##      Only files inside the `public` folder can be referenced from the HTML.
##
##      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
##      work correctly both with client-side routing and a non-root public URL.
##      Learn how to configure a non-root public URL by running `npm run build`.
##    -->

##    <!--
##      This HTML file is a template.
##      If you open it directly in the browser, you will see an empty page.
##
##      You can add webfonts, meta tags, or analytics to this file.
##      The build step will place the bundled s into the <body> tag.
##
##      To begin the development, run `npm start` or `yarn start`.
##      To create a production bundle, use `npm run build` or `yarn build`.
##    -->

## Em src/index.tsx remover
##  import './index.css';

## import * as serviceWorker from './serviceWorker';

## If you want your app to work offline and load faster, you can change
## unregister() to register() below. Note this comes with some pitfalls.
## Learn more about service workers: https://bit.ly/CRA-PWA
## serviceWorker.unregister();

## Em src/App.tsx
## import logo from './logo.svg';
## <img src={logo} className="App-logo" alt="logo" />

##    <div className="App">
##      <header className="App-header">
##        <p>
##          Edit <code>src/App.tsx</code> and save to reload.
##        </p>
##        <a
##          className="App-link"
##          href="https://reactjs.org"
##          target="_blank"
##          rel="noopener noreferrer"
##        >
##          Learn React
##        </a>
##      </header>
##    </div>

## Colocar no lugar do codigo html acima
## <h1>Hello World</h1>

## Tudo o src/App.css

## ------------------------- Fim Limpeza ---------------------- ##



## Criar o arquivo Header.tsx
#touch Header.tsx

mkdir pages

cd pages

mkdir Home

cd Home

touch index.tsx

touch styles.css

cd ..

mkdir CreatePoint

touch index.tsx

touch styles.css

cd ..

mkdir assets

touch routes.tsx

mkdir services

cd services

touch api.ts


## Para iniciar a aplicacao
## npm start

## Ctrl + Shift + p - procure por json - Preferences:Open Settings(JSON)
## div#app>ul>li*5 - cria estrutura no VSCode  

// Necessario definir o tipo.
import express from 'express'
import cors from 'cors'

// une caminhos para padrinizar locais em diversos sistemas operacionais.
import path from 'path' 

// Arquivos da aplicacao.
import routes from './routes'

// Validacao de formularios.
// errors - Lidar automaticamente com a forma que e retornado os erros do front-end.
import { errors } from 'celebrate'

const app = express()

// Cross-orage Resource Sharing - Define quais enderecos externos terao acesso a aplicacao
// dentro dele vai o dominio da aplicacao em origin.
/*app.use(cors({
    //origin:'www.'
})
)*/
app.use(cors())

// Permite que o express leia json.
// Como se coloca-se um plugin no express dele mesmo.
app.use(express.json())

// Acessar as rotas da aplicacao.
app.use(routes)

// Acessar arquivos da pasta /uploads.
// static - serve arquivos estaticos (acessados de forma direta) deuma pasta especifica.
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

// Lidar automaticamente com a forma que e retornado os erros do front-end.
app.use(errors())

// Utiliza o ip ou localhost na porta 3333.
app.listen(3333)
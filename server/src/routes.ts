// Desacoplar as rotas do arquivo principal
import express, { Router } from 'express'
import {celebrate, Joi} from 'celebrate'

import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const upload = multer(multerConfig)

const pointsController = new PointsController()
const itemsController = new ItemsController()

// Toda ves que usar await - que espera a execucao do comando acabar para continuar
// e necessario adicionar o async na funcao.
routes.get('/items', itemsController.index)

routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

// Caso queira enviar muitos uploads use "upload.array".
routes.post(
    '/points', 
    upload.single('image'), 
    // Validacao do formulario.
    celebrate ({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required(),
            whatsapp: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            // regex() - verifica se possui apenas numeros e virgulas.
            // logo apos string() como um metodo.
            items: Joi.string().required()
        })
    }, {
        // Realiza todas as validacoes ao mesmo tempo.
        abortEarly: false
    }),
    pointsController.create)

// Padrao:
// index = todos
// show = um so
// create = criar
// update = atualizar
// delete = deletar

// Exporta as rotas para serem utilizadas em outro(s) arquivos
export default routes

// Perquisar por:
// Service Pattern
// Repository Pattern (Data Mapper)

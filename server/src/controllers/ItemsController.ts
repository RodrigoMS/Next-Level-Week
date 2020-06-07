// Request e o Response estao com letra maiuscula para indicar que esta sendo 
// importado o seu tipo de express para ser definido no typescript.
import { Request, Response } from 'express'

import knex from '../database/connection'

class ItemsController {
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*')
    
        // Serializacoa de dados - transformar os dados para um novo formato a qual sera
        // mais acessivel para quem esta requisitando as informacoes.
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.127.130:3333/uploads/${item.image}`
            }
        })
    
        return response.json(serializedItems)
    }
}

export default ItemsController

//Parou em 1:39
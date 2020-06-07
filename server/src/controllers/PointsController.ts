// Request e o Response estao com letra maiuscula para indicar que esta sendo 
// importado o seu tipo de express para ser definido no typescript.
import { Request, Response } from 'express'

import knex from '../database/connection'

class PointsController {
    async index(request: Request, response: Response) {
        // E utilizado Query Params para filtros e paginacao
        const { city, uf, items } = request.query 

        // split - separa os items em um array apartir da ","
        // trin - remove espasamento da direita e da esquerda
        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()))

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*')

        // Serializacoa de dados - transformar os dados para um novo formato a qual sera
        // mais acessivel para quem esta requisitando as informacoes.
        const serializedPoints = points.map(point => {
            return {
                ...point,
                image_url: `http://192.168.127.130:3333/uploads/${point.image}`
            }
        })

        return response.json(serializedPoints)
    }

    async show(request: Request, response: Response) {
        // Os request params e usado para criacao e edicao
        // const id = request.params.id
        // desentruturacao - como a variavel tem o mesnom nome do
        // parametro posso omiti-lo
        const { id } = request.params

        // first() - Como a query sql retorna um array, com o metodo first 
        // e retornado apenas um valor e nao um array.
        const point = await knex('points').where('id', id).first()

        // Se nao encontrar o ponto retorna um status de erro ao uso da aplicacao
        // e uma mensagem de erro
        if(!point){
            return response.status(400).json({message: 'Point not found.'})
        }

        // Serializacoa de dados - transformar os dados para um novo formato a qual sera
        // mais acessivel para quem esta requisitando as informacoes.
        const serializedPoint = {
            ...point,
            image_url: `http://192.168.127.130:3333/uploads/${point.image}`
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title')
            //Obs: para exibit todas as informacoes retire o .select('items.title')

        return response.json({ point:serializedPoint, items})
    }


    async create(request: Request, response: Response) {

        // Recurso de desestruturacao do javascript
        // que e quando se escreve o objeto do lado esquerdo do =
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body
    
        // Criar um transaction - Quando uma das querys do banco falhar
        // nenhuma das duas executa.
        const trx = await knex.transaction()

        const point = {
            image: request.file.filename,
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }
    
        // Xort sintax que pode ser utilizada quando o nome da propriedade 
        // e igual a da variavel possibilitando omitir a reescrita dele.
        // O insert do knex retorna o id do item recem cadastrado, sendo 
        // colocado na constant ids que e um array.
        const insertedIds = await trx('points').insert(point)
    
        const point_id = insertedIds[0]
    
        // map - retrona cada um dos items 
        const pointItens = items
            .split(',')
            .map((item: string) => Number(item.trim()))
            .map((item_id: number) => {
            return {
                item_id,
                point_id
            }
        })
    
        await trx('point_items').insert(pointItens)

        // Vai realizar os inserts no banco de dados.
        await trx.commit()
    
        // Spress populeitor ( ...point )- coloca todas as informacoes de um objeto
        // e retornar dentro de outro
        return response.json({
            id: point_id,
            ... point
        })
    }
}

export default PointsController
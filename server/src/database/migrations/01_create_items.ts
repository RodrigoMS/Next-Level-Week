// Knex esta com letra maiuscula para indicar que esta sendo 
// importado o tipo Knex para ser definido no typescript.
import Knex from 'knex' 

// Criar a tabela
export async function up(knex: Knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('title').notNullable()
    })
}

// Voltar atras (deletar a tabela)
export async function down(knex: Knex) {
   return knex.schema.dropTable('items')
}

//npx knex --knexfile knexfile.ts migrate:latest


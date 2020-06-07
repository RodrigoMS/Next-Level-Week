// Knex esta com letra maiuscula para indicar que esta sendo 
// importado o tipo Knex para ser definido no typescript.
import Knex from 'knex' 

// Criar a tabela
export async function up(knex: Knex) {
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary()

        // Chave estrangeira na tabela point usando como referencia o id.
        table.string('point_id')
            .notNullable()
            .references('id')
            .inTable('point') 

        // Chave estrangeira na tabela items usando como referencia o id.
        table.string('item_id')
            .notNullable()
            .references('id')
            .inTable('items')
    })
}

// Voltar atras (deletar a tabela)
export async function down(knex: Knex) {
   return knex.schema.dropTable('point_items')
}

//npx knex --knexfile knexfile.ts migrate:latest


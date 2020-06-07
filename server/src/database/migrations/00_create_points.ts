// Knex esta com letra maiuscula para indicar que esta sendo 
// importado o tipo Knex para ser definido no typescript.
import Knex from 'knex' 

// Criar a tabela
export async function up(knex: Knex) {
    return knex.schema.createTable('points', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.decimal('latitude').notNullable()
        table.decimal('longitude').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable() // Recebe apenas 2 caracteres.
    })
}

// Voltar atras (deletar a tabela)
export async function down(knex: Knex) {
   return knex.schema.dropTable('points')
}

//npx knex --knexfile knexfile.ts migrate:latest


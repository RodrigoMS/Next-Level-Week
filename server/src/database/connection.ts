import knex from 'knex' // query build para banco de dados 
import path from 'path' // une caminhos para padrinizar locais em diversos sistemas operacionais

// Cliente do banco de dados sqlite3
const connection = knex({
    client:'sqlite3',
    connection: {

        // __dirname - retorna o local onde esta sendo executado o resolver.
        filename: path.resolve(__dirname, 'database.sqlite')
    },

    // Valores padroes em campos nao preenchiddos.
    // Vai usar "null" nos campos vazios.
    useNullAsDefault: true,
})

export default connection

// Micrations - (Historico) Controle de versao do banco de dados.


// Necessario definir o tipo
import express from 'express'

const app = express()

// Permite que o express leia json
// Como se coloca-se um plugin no express dele mesmo
app.use(express.json())

const users = [
	"Diego", // 0
	"Cleiton", // 1
	"Rodson", // 2
	"Rodrigo" // 3
]

app.get('/users', (request, response) => {
	// Utilizacao do query param
	// Ex: http://localhost:3333/users?search=on
	const search = String(request.query.search)


	// Realiza uma fultragem para retornar apesquisa
	// Utilizacao de um if ternario - se search (search ?) nao existir retorne todos os usuarios (: users)
	const filteredUsers = search ? users.filter(user => user.includes(search)) : users
	
	//response.send('Hello World')

	// Pode ser utilizado para retornar um único dado ou um array. 
	return response.json(filteredUsers)
})

app.get('/users/:id', (request, response) => {
	const id = Number(request.params.id)

	const user = users[id]

	return response.json(user)
})

// Acessando atraves do metodo post
app.post('/users', (request, response) => {
	const data = request.body
	
	const user = {
		name: data.name,
		email: data.email
	}

	return response.json(user)
})

app.listen(3333)

//parou em 50:00
//https://nextlevelweek.com/aulas/booster/1/edicao/1
//http://dontpad.com/RMS123456789NLW
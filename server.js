const express = require('express') /*Chamar o express*/
const server = express() /*Criando o server (createserver do outro)*/

var bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({
	extended : true
}))

server.post('/reajusta', (req, res)=>{
	var nome = req.body.nome
	var cargo = req.body.cargo
	var salario = req.body.salario
	salario = parseFloat(salario)
	//if(cargo == 'operador')
	var porcentagem = req.body.porcentagem
	porcentagem = parseInt(porcentagem)
	porcentagem = porcentagem / 100
	salario = salario + (salario * porcentagem)
	res.send('<h1>Seja bem vindo(a): ' +nome +'! <br></h1> <h2>Cargo: ' +cargo +' </h2> <h2>Novo salario apos reajuste: ' +salario +'</h2>')
})

server.get('/', (req, res) => {
	res.send(`
			<h1>Reajuste de Salários</h1>

			<form action ="/reajusta" method="POST">
			<p> Digite a seguir o seu nome, salário, cargo e porcentagem para calcular o reajuste: </p>
				<label for="nome"> Nome:</label>
				<input type="nome" name="nome" id="nome">
				<br>
				<label for="salario"> Salario:</label>
				<input type="salario" name="salario" id="salario">
				<br>
				<label for="cargo"> Cargo:</label>
				<input type="cargo" name="cargo" id="cargo">
				<br>
				<label for="porcentagem"> Porcentagem:</label>
				<input type="porcentagem" name="porcentagem" id="porcentagem">
				<br><br>
				<input type="submit" value="Calcular Reajuste">
			</form>
		`)
})

server.listen(3001, () =>{/*Colocar servidor em funcionamento*/
	console.log('Servidor em funcionamento em: http://localhost:3001')
	console.log('Para finalizar: pressione Ctrl+C')
})
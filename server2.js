const express = require('express') /*Chamar o express*/
const server = express() /*Criando o server (createserver do outro)*/

var bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({
	extended : true
}))

server.post('/reajusta', (req, res)=>{
	var nome = req.body.nome
	var sexo = req.body.sexo
	var idade = req.body.idade
	idade = +idade
	if(sexo == 'masculino'){
		if(idade >= 18){
			res.send('<h1>Sexo Masculino. <br> O usuario ' +nome +' eh Maior de idade</h1>')
		}else{
			res.send('<h1>Sexo Masculino. <br> O usuario ' +nome +' eh Menor de idade</h1>')
		}
	}else if(sexo == 'feminino'){
		if(idade >= 21){
			res.send('<h1>Sexo Feminino. <br> O usuario ' +nome +' eh Maior de idade</h1>')
		}else{
			res.send('<h1>Sexo Feminino. <br> O usuario ' +nome +' eh Menor de idade</h1>')
		}
	}
	else{
		res.send('<h1>Sexo invalido. <br> Clique em retornar e insira novamente!</h1>')
	}
	})

server.get('/', (req, res) => {
	res.send(`
			<h1>Verifica maioridade</h1>

			<form action ="/reajusta" method="POST">
			<p> Digite a seguir o seu nome, sexo e idade: </p>
				<label for="nome"> Nome:</label>
				<input type="nome" name="nome" id="nome">
				<br>
				<label for="sexo"> Sexo:</label>
				<input type="sexo" name="sexo" id="sexo">
				<br>
				<label for="idade"> Idade:</label>
				<input type="idade" name="idade" id="idade">
				<br>
				<br><br>
				<input type="submit" value="Submeter">
			</form>
		`)
})

server.listen(3001, () =>{/*Colocar servidor em funcionamento*/
	console.log('Servidor em funcionamento em: http://localhost:3001')
	console.log('Para finalizar: pressione Ctrl+C')
})
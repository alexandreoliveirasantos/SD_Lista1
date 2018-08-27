const express = require('express') /*Chamar o express*/
const server = express() /*Criando o server (createserver do outro)*/

var bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({
	extended : true
}))

server.get('/', (req, res) => {
	res.send(`
			<h1 align="center">Primeira lista de Sistemas Distribuídos - 2018-2</h1>
			<div align="center">
				<a href="questao1"> Questao 1 </a> <br>
				<a href="questao2"> Questao 2 </a> <br>
				<a href="questao3"> Questao 3 </a> <br>
				<a href="questao4"> Questao 4 </a> <br>
				<a href="questao5"> Questao 5 </a> <br>
				<a href="questao5"> Questao 6 </a> <br>
				<a href="questao5"> Questao 7 </a> <br>
				<a href="questao5"> Questao 8 </a> <br>
				<a href="questao5"> Questao 9 </a> <br>
			<div>
		`)
})

server.get('/questao1', (req, res) => {
	res.send(`
			<h1>Questao #1: Reajuste de Salários</h1>
			<div align="center">
				<form action ="/reajusta" method="POST">
				<p> Digite a seguir o seu nome, salário e cargo para calculo do reajuste: </p>
					<label for="nome"> Nome:</label>
					<input type="nome" name="nome" id="nome">
					<br>
					<label for="salario"> Salario:</label>
					<input type="salario" name="salario" id="salario">
					<br>
					<label for="cargo"> Cargo:</label>
					<input type="cargo" name="cargo" id="cargo">
					<br><br>
					<input type="submit" value="Calcular Reajuste">
				</form>
			<div>
		`)
})

server.post('/reajusta', (req, res)=>{
	var nome = req.body.nome
	var cargo = req.body.cargo
	var salario = req.body.salario
	salario = parseFloat(salario)

	switch (cargo){
		case "operador": //recebe reajuste de 20%
			salario = salario + (salario * 0.20)
			break

		case "programador": //recebe reajuste de 18%
			salario = salario + (salario * 0.18)
			break
	}

	res.send('<h1>Seja bem vindo(a): ' +nome +'! <br></h1> <h2>Cargo: ' +cargo +' </h2> <h2>Seu novo salario apos reajuste: ' +salario +'</h2>')
})


server.get('/questao2', (req, res) => {
	res.send(`
			<h1>Questao #2: Verifica maioridade</h1>
			<div align="center">
				<form action ="/maiorMenor" method="POST">
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
			</div>
		`)
})

server.post('/maiorMenor', (req, res)=>{
	var nome = req.body.nome
	var sexo = req.body.sexo
	var idade = req.body.idade
	idade = +idade
	if(sexo == 'masculino'){
		if(idade >= 18){
			res.send('<h1>Sexo Masculino. <br> Nome usuario(a) ' +nome +'<br> Status: Maior de idade</h1>')
		}else{
			res.send('<h1>Sexo Masculino. <br> Nome usuario(a) ' +nome +'<br> Status: Menor de idade</h1>')
		}
	}else if(sexo == 'feminino'){
		if(idade >= 21){
			res.send('<h1>Sexo Feminino. <br> Nome usuario(a) ' +nome +'<br> Status: Maior de idade</h1>')
		}else{
			res.send('<h1>Sexo Feminino. <br> Nome usuario(a) ' +nome +'<br> Status: Menor de idade</h1>')
		}
	}
	else{
		res.send('<h1>Sexo invalido. <br> Clique em retornar e insira novamente!</h1>')
	}
	})

server.get('/questao3', (req, res) => {
	res.send(`
			<h1>Questao #3: Resultado - Notas</h1>
			<div align="center">
				<form action ="/resultadoNotas" method="POST">
				<p> Insira a seguir as notas N1, N2 e N3 (0 a 10): </p>
					<label for="nota1"> N1:</label>
					<input type="nota1" name="nota1" id="nota1">
					<br>
					<label for="nota2"> N2:</label>
					<input type="nota2" name="nota2" id="nota2">
					<br>
					<label for="nota3"> N3:</label>
					<input type="nota3" name="nota3" id="nota3">
					<br>
					<br><br>
					<input type="submit" value="Submeter">
				</form>
			</div>
		`)
})

server.post('/resultadoNotas', (req, res)=>{
	var nota1 = parseFloat(req.body.nota1)
	var nota2 = parseFloat(req.body.nota2)
	var nota3 = parseFloat(req.body.nota3)

	/*nota1 = parseFloat(nota1)
	nota2 = parseFloat(nota2)
	nota3 = parseFloat(nota3)*/

	var media = ((nota1+nota2)/2)
	var mediaFinal = ((media+nota3)/2)

	if(media >= 7){
		res.send('<h1>Resultado: '+media +'.<br> Estudante aprovado(a)!</h1>')
	}else if(mediaFinal > 5){
		res.send('<h1>Resultado: '+mediaFinal +'.<br> Estudante realizou exame N3 e foi aprovado(a)!</h1>')
	}else if(media > 3 && media < 7){
		res.send('<h1>Resultado: '+media +'.<br> Estudante devera realizar exame N3!</h1>')
	}else{
		res.send('<h1>Resultado: '+media +'.<br> Estudante reprovado(a)!</h1>')
	}
})

server.get('/questao4', (req, res) => {
	res.send(`
			<h1>Questao #3: Resultado - Notas</h1>
			<div align="center">
				<form action ="/resultadoNotas" method="POST">
				<p> Insira a seguir as notas N1, N2 e N3 (0 a 10): </p>
					<label for="nota1"> N1:</label>
					<input type="nota1" name="nota1" id="nota1">
					<br>
					<label for="nota2"> N2:</label>
					<input type="nota2" name="nota2" id="nota2">
					<br>
					<label for="nota3"> N3:</label>
					<input type="nota3" name="nota3" id="nota3">
					<br>
					<br><br>
					<input type="submit" value="Submeter">
				</form>
			</div>
		`)
})

server.listen(3001, () =>{/*Colocar servidor em funcionamento*/
	console.log('Servidor em funcionamento em: http://localhost:3001')
	console.log('Para finalizar: pressione Ctrl+C')
})
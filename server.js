const express = require('express') /*Chamar o express*/
const server = express() /*Criando o server (createserver do HTTP)*/

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
				<a href="questao6"> Questao 6 </a> <br>
				<a href="questao7"> Questao 7 </a> <br>
				<a href="questao8"> Questao 8 </a> <br>
				<a href="questao9"> Questao 9 </a> <br>
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
			<h1>Questao #4: Peso Ideal</h1>
			<div align="center">
				<form action ="/pesoIdeal" method="POST">
				<p> Insira a seguir sua altura e sexo (masculino ou feminino): </p>
					<label for="altura"> Altura:</label>
					<input type="altura" name="altura" id="altura">
					<br>
					<label for="sexo"> Sexo:</label>
					<input type="sexo" name="sexo" id="sexo">
					<br><br>
					<input type="submit" value="Calcular peso Ideal">
				</form>
			</div>
		`)
})

server.post('/pesoIdeal', (req, res)=>{
	var altura = parseFloat(req.body.altura)
	var sexo = req.body.sexo

	var peso = null

	switch(sexo){

		case "masculino":
			peso = ((72.7 * altura) - 58)
			res.send('<h1>Sexo: '+sexo +' | Altura: ' +altura +'<br> Peso ideal: ' +peso +'.</h1>')
		break

		case "feminino":
			peso = ((62.1 * altura) - 44.7)
			res.send('<h1>Sexo: '+sexo +' | Altura: ' +altura +'<br> Peso ideal: ' +peso +'.</h1>')
		break

		default:
			res.send('<h1>Verifique os dados inseridos e tente novamente!</h1>')
	}
})


server.get('/questao5', (req, res) => {
	res.send(`
			<h1>Questao #5: Categoria nadador</h1>
			<div align="center">
				<form action ="/categoriaNadador" method="POST">
					<p> Insira a seguir sua idade: </p>
					<label for="idade"> Idade:</label>
					<input type="idade" name="idade" id="idade">
					<br><br>
					<input type="submit" value="Verificar categoria">
				</form>
			</div>
		`)
})

server.post('/categoriaNadador', (req, res)=>{
	var idade = parseInt(req.body.idade)

	if(idade >= 5 && idade < 8){
		res.send('<h1>Idade: '+idade +'<br> Categoria: Infantil A</h1>')
	}else if(idade >= 8 && idade < 11){
		res.send('<h1>Idade: '+idade +'<br> Categoria: Infantil B</h1>')
	}else if(idade >= 11 && idade < 14){
		res.send('<h1>Idade: '+idade +'<br> Categoria: Juvenil A</h1>')
	}else if(idade >= 14 && idade < 18){
		res.send('<h1>Idade: '+idade +'<br> Categoria: Juvenil B</h1>')
	}else if(idade >= 18){
		res.send('<h1>Idade: '+idade +'<br> Categoria: Adulto</h1>')
	}else{
		res.send('<h1>A idade informada nao pode ser relacionada a nenhuma categoria.</h1>')
	}
})


server.get('/questao6', (req, res) => {
	res.send(`
			<h1>Questao #6: Calculo Salario Liquido</h1>
			<div align="center">
				<form action ="/salarioLiquido" method="POST">
					<p> Insira a seguir o nome, nivel (A,B,C,D), salario bruto e nº de dependentes do funcionario: </p>
					<label for="nome"> Nome:</label>
					<input type="nome" name="nome" id="nome"><br>
					<label for="nivel"> Nivel:</label>
					<input type="nivel" name="nivel" id="nivel"><br>
					<label for="salBruto"> Salario Bruto:</label>
					<input type="salBruto" name="salBruto" id="salBruto"><br>
					<label for="numDepend"> Numero dependentes:</label>
					<input type="numDepend" name="numDepend" id="numDepend"><br>
					<br><br>
					<input type="submit" value="Submeter">
				</form>
			</div>
		`)
})

server.post('/salarioLiquido', (req, res)=>{
	var nome = req.body.nome
	var nivel = req.body.nivel
	var salBruto = parseFloat(req.body.salBruto)
	var numDepend = parseInt(req.body.numDepend)
	var salarioLiquido = null

	switch(nivel){
		case 'A':
			if(numDepend >= 1){
				salarioLiquido = (salBruto - (salBruto * 0.08))
			}else{
				salarioLiquido = (salBruto - (salBruto * 0.03))
			}
			res.send('<h1>Nome: '+nome +' | Nivel: ' +nivel +'<br> Salario Liquido: ' +salarioLiquido +'</h1>')
		break

			case 'B':
			if(numDepend >= 1){
				salarioLiquido = (salBruto - (salBruto * 0.1))
			}else{
				salarioLiquido = (salBruto - (salBruto * 0.05))
			}
			res.send('<h1>Nome: '+nome +' | Nivel: ' +nivel +'<br> Salario Liquido: ' +salarioLiquido +'</h1>')
		break

		case 'C':
			if(numDepend >= 1){
				salarioLiquido = (salBruto - (salBruto * 0.15))
			}else{
				salarioLiquido = (salBruto - (salBruto * 0.08))
			}
			res.send('<h1>Nome: '+nome +' | Nivel: ' +nivel +'<br> Salario Liquido: ' +salarioLiquido +'</h1>')
		break

		case 'D':
			if(numDepend >= 1){
				salarioLiquido = (salBruto - (salBruto * 0.17))
			}else{
				salarioLiquido = (salBruto - (salBruto * 0.1))
			}
			res.send('<h1>Nome: '+nome +' | Nivel: ' +nivel +'<br> Salario Liquido: ' +salarioLiquido +'</h1>')
		break

		default:
		res.send('<h1>Verifique os valores inseridos e tente novamente!</h1>')
	}

})



server.listen(3001, () =>{/*Colocar servidor em funcionamento*/
	console.log('Servidor em funcionamento em: http://localhost:3001')
	console.log('Para finalizar: pressione Ctrl+C')
})
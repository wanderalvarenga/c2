var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click",function (event) {
	event.preventDefault();

	var form = document.querySelector('#form-adiciona');
	var paciente = obtemPacienteFormulario(form);

	var erros = validaPaciente(paciente);

	if(erros.length > 0){
		exibeMensagensDeErro(erros);
		return;
	}

	adicionaPacienteNaTabela(paciente);

	form.reset();
	var mensagensErro = document.querySelector('#mensagens-erro');
	mensagensErro.innerHTML ="";
	
});

function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector('#tabela-pacientes');
	tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
	var ul = document.querySelector('#mensagens-erro');
	ul.innerHTML ="";


	erros.forEach(function(erro){
		var li = document.createElement('li');
		li.textContent = erro;
		ul.appendChild(li);

	});

}


function obtemPacienteFormulario(form){

	var paciente = {
		nome: form.nome.value,
		endereco: form.endereco.value,
		telefone: form.telefone.value,
		peso: form.peso.value,
		altura: form.altura.value,
		saude: form.saude.value,
	}

	return paciente;

}

function montaTr(paciente){
	var pacienteTr = document.createElement('tr');
	pacienteTr.classList.add('paciente');
	
	pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
	pacienteTr.appendChild(montaTd(paciente.endereco,"info-endereco"));
	pacienteTr.appendChild(montaTd(paciente.telefone,"info-telefone"));
	pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
	pacienteTr.appendChild(montaTd(paciente.saude,"info-saude"));

	return pacienteTr;

}

function montaTd(dado,classe){

	var td = document.createElement('td');
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){

	var erros = [];
	if(paciente.nome.length == 0)	erros.push("Nome não pode ser em branco")

	if(paciente.endereco.length == 0) erros.push("Endereço não pode ser em branco");

	if(paciente.telefone.length == 0) erros.push("Telefone não pode ser em branco");

	if(paciente.peso.length == 0) erros.push("Peso não pode ser em branco");

	if(paciente.altura.length == 0) erros.push("Altura não pode ser em branco");

	if(paciente.saude.length == 0) erros.push("O problema de saúde não pode ser em branco");


	//if(!validaPeso(paciente.peso))	erros.push("Peso é inválido")

	//if(!validaAltura(paciente.altura))	erros.push("Altura é inválida")

	
	return erros;
}


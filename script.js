function atualizaCartao(id) {
	let digitado = document.getElementById(id);
	let atualizar = id.replace('-form', '');

	if (id == 'mes-validade-cartao-form') {
		let mes = document.getElementById(id);
		if (mes.value > 12) {
			console.log('Entrando no if > 12');
			mes.value = 12;
		} else if (mes.value == '00' || isNaN(mes.value)) {
			mes.value = '01';
		}
	}
	if (id == 'ano-validade-cartao-form') {
		let ano = document.getElementById(id);
		let data = new Date();
		let anoAtual = String(data.getFullYear());
		anoAtual = anoAtual.slice(-2);
		anoAtual = Number(anoAtual);
		console.log(anoAtual);
		ano.value < anoAtual
			? (ano.style.border = 'solid red 1px')
			: (ano.style.border = 'solid hsl(279, 6%, 55%) 1px');
	}
	document.getElementById(atualizar).textContent = digitado.value;
}

function completeState() {
	document.getElementsByTagName('form')[0].style.display = 'none';
	document.getElementById('complete-state').style.display = 'block';
}

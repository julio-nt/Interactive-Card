function atualizaCartao(id) {
	let digitado = document.getElementById(id);
	let atualizar = id.replace('-form', '');
	document.getElementById(atualizar).textContent = digitado.value;
}

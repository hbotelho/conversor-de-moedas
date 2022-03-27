function ConverterDolar() {
	var valorElemento = document.getElementById("valor"); //trouxe o elemento html pro codigo js
	var valor = valorElemento.value; //trouxe o "valor" do elemento para uma nova variável
	var valorEmDolarNumerico = parseFloat(valor); //deixou o valor decimal

	var valorEmReal = (valorEmDolarNumerico * 5.01).toFixed(2); //código de conversao do valor em decimal

	console.log(valorEmReal);

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
	elementoValorConvertido.innerHTML = valorConvertido; //inseriu o resultado no elemento do código HTML, pra ser impresso na pagina

	var valorEmBitcoin = valorEmReal * 210223.3;
	var elementoBitcoin = document.getElementById("valorBitcoin");
	var valorBitcoin = "O resultado em Bitcoin é BTC " + valorEmBitcoin;
	elementoBitcoin.innerHTML = valorBitcoin;
}

function ConverterEuro() {
	var valorElemento = document.getElementById("valor"); //trouxe o elemento html pro codigo js
	var valor = valorElemento.value; //trouxe o "valor" do elemento para uma nova variável
	var valorEmDolarNumerico = parseFloat(valor); //deixou o valor decimal

	var valorEmReal = (valorEmDolarNumerico * 5.55).toFixed(2); //código de conversao do valor em decimal

	console.log(valorEmReal);

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
	elementoValorConvertido.innerHTML = valorConvertido; //inseriu o resultado no elemento do código HTML, pra ser impresso na pagina

	var valorEmBitcoin = valorEmReal * 210223.3;
	var elementoBitcoin = document.getElementById("valorBitcoin");
	var valorBitcoin = "O resultado em Bitcoin é BTC " + valorEmBitcoin;
	elementoBitcoin.innerHTML = valorBitcoin;
}
function ConverterYene() {
	var valorElemento = document.getElementById("valor"); //trouxe o elemento html pro codigo js
	var valor = valorElemento.value; //trouxe o "valor" do elemento para uma nova variável
	var valorEmDolarNumerico = parseFloat(valor); //deixou o valor decimal

	var valorEmReal = (valorEmDolarNumerico * 0.043).toFixed(2); //código de conversao do valor em decimal

	console.log(valorEmReal);

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
	elementoValorConvertido.innerHTML = valorConvertido; //inseriu o resultado no elemento do código HTML, pra ser impresso na pagina

	var valorEmBitcoin = valorEmReal * 210223.3;
	var elementoBitcoin = document.getElementById("valorBitcoin");
	var valorBitcoin = "O resultado em Bitcoin é BTC " + valorEmBitcoin;
	elementoBitcoin.innerHTML = valorBitcoin;
}
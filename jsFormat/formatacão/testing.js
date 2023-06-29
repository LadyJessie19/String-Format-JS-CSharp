function cFormat(sText, n) {
	const _nullish = (/** @type {Object} */ o) => ((o === void 0) || (o === null));
	if (_nullish(sText)) return '';
	if (sText.includes('{')) {
		for (let i = 1; i < arguments.length; i++) {
			let sPattern = new RegExp("\\{" + (i - 1) + "\\}", "g");
			let oValue = _nullish(arguments[i]) ? '' : arguments[i];
			if (arguments[i])
			sText = sText.replace(sPattern, oValue.toString());
		}
		return sText
	}


const inicio = 5.3
const fim = 4

const s = cFormat(`Essa frase começa com {0} e termina com {1:}`, inicio, fim)
console.log(s)

/* 1passo - Entender a function c format sem interpolação*/
/* 2passo - criar formatação de c# (de n para começar - decimais)*/
/* 3passo - formatação de c# na function cFormat */

/* O que precisa ser feito:

preciso fazer um formatador para js.

como base, deve ser usado c#

format({0:n2})

usar o exemplo de delpfi

usar numero 5 e formatar 0.00

depois teste.js

é preciso sair o mesmo res de delphi


*/

/*  saber tempo de cada tarefa */

/* Format("{0} mede {1:N2} e pesa {2:N3}.”, sName, nHeight, nWeight); */
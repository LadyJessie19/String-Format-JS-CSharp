function cFormat(sText, n) {
	const _nullish = (/** @type {Object} */ o) => ((o === void 0) || (o === null));
	// https://www.gurustop.net/blog/2011/12/02/implement-c-sharp-string-format-in-javascript/
	if (_nullish(sText)) return '';
	if (sText.includes('{')) {
		for (let i = 1; i < arguments.length; i++) {
			let sPattern = new RegExp("\\{" + (i - 1) + "\\}", "g");
			let oValue = _nullish(arguments[i]) ? '' : arguments[i];
			sText = sText.replace(sPattern, oValue.toString());
		}
		return sText
	}
}

const text = "15-03-1999"

/* cFormat(text) */

const inicio = 5.3
const fim = 4

// `Essa frase começa com ${inicio.functionFormat()} e termina com ${fim}`

console.log(`Essa frase começa com ${inicio} e termina com ${fim}`)
const s = cFormat(`Essa frase começa com {0} e termina com {1}`, inicio, fim)
console.log(s)

/* 1passo - Entender a function c format sem interpolação*/
/* 2passo - criar formatação de c# (de n para começar - decimais)*/
/* 3passo - formatação de c# na function cFormat */
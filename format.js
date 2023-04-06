/**
 * arFormat returns a string with the input number using the Intl Library;
 * @param {number} number 
 * @param {number} iDecs 
 * @returns {string}
 */
const arFormat = (number, iDecs) => {
  const formatedNum = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: iDecs,
    maximumFractionDigits: iDecs,
  });
  return formatedNum.format(number);
};

/**
 * readAfterDot counts how many decimal places the user wants to format the number entered in the input;
 * @param {string} word 
 * @returns {number}
 */
function readAfterDot(word) {
  const iDec = word.length - (word.lastIndexOf(".") + 1);
  const afterDot = word.split(".")[1];
  let k = 0;
  for (let i = 0; i < iDec; i++) {
    const element = afterDot[i];
    if (element === "0" || element === "#") {
      k++;
    }
  }
  return k;
}

/**
 * showFormat returns a string using Delphi or C# formatting;
 * @param {HTMLElement} idInputFormat
 * @param {HTMLElement} idInputNumber
 * @param {HTMLElement} idResP
 * @returns {string}
 */
function showFormat(idInputFormat, idInputNumber, idResP) {
  const sFormat = document.getElementById(idInputFormat).value;
  const nValue = document.getElementById(idInputNumber).value;
  const pRes = document.getElementById(idResP);
  const nNumber = sFormat.split(/([a-zA-Z]+)([0-9]+)/).slice(1, 3);
  let sFormatedNum;
  if (sFormat === "0" || sFormat === "#"){
    sFormatedNum = nValue;
  } else if (nNumber[0] === "n" || nNumber[0] === "N"){
    sFormatedNum = formatNumCSharp(nNumber, nValue);
  } else {
    sFormatedNum = formatNumDelphi(sFormat, nValue);
  }
  return pRes.innerHTML = `Número formatado: ${sFormatedNum}`
}

/**
 * formatNumDelphi returns a string with Delphi formatting;
 *  @type {(sFormat: string, nNumber: number) => string} TypeScript syntax
 *  @type {formatNumDelphi(string, number): string} Closure syntax
 */
const formatNumDelphi = (sFormat, nValue) => {
  const iDec = readAfterDot(sFormat);
  const sNumber = arFormat(nValue, iDec);
  return sNumber;
};

/**
 * formatNumCSharp
 * returns a string with C# formatting;
 * @param {string} sFormat
 * @param {number} nNumber
 * @returns {string}
 */
const formatNumCSharp = (nNumber, nValue) => {
    const iDec = nNumber[1];
    const sNumber = arFormat(nValue, iDec);
    return sNumber;
};

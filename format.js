/**
 * arFormat returns a string with the input number using the Intl Library;
 * @param {number} iNumber
 * @param {number} iDecs
 * @returns {string}
 */
const arFormat = (iNumber, iDecs) => {
  const formatedNum = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: iDecs,
    maximumFractionDigits: iDecs,
  });
  return formatedNum.format(iNumber);
};

/**
 * readAfterDot counts how many decimal places the user wants to format the number entered in the input;
 * @param {string} sWord
 * @returns {number}
 */
function readAfterDot(sWord) {
  const iDec = sWord.length - (sWord.lastIndexOf(".") + 1);
  const afterDot = sWord.substring(sWord.lastIndexOf(".") + 1);
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
 * rightFormat returns an array that will be used with C# formatting or with Delphi formatting;
 * @param {string} sFormat 
 * @returns {object}
 */
function rightFormat (sFormat){
  if(sFormat[0] === 'n' || sFormat[0] === 'N'){
    const regex = /([a-zA-Z]*)([0-9]+)/g;
    const match = regex.exec(sFormat);
    const oNumber = [match[1], match[2]];
    return oNumber;
  } else {
    const regex = /([a-zA-Z#0]+)(\.[#0-9]+)/;
    const match = regex.exec(sFormat);
    const oNumber = [match[1], match[2]];
    return oNumber;
  }
}

/**
 * formatNumDelphi returns a string with Delphi formatting;
 *  @type {(sFormat: string, nNumber: number) => string} TypeScript syntax
 *  @type {formatNumDelphi(string, number): string} Closure syntax
 */
const formatNumDelphi = (oNumber, nNumber) => {
  const iDec = readAfterDot(oNumber[1]);
  const sNumber = arFormat(nNumber, iDec);
  return sNumber;
};

/**
 * formatNumCSharp returns a string with C# formatting;
 * @param {object} oNumber
 * @param {number} nNumber
 * @returns {string}
 */
const formatNumCSharp = (oNumber, nNumber) => {
  const iDec = oNumber[1];
  const sNumber = arFormat(nNumber, iDec);
  return sNumber;
};

/**
 * showFormat returns a string using Delphi or C# formatting;
 * @param {string} sFormat
 * @param {number} nNumber
 * @returns {string}
 */
export function showFormat(sFormat, nNumber) {
  let sFormatedNum;
  const oNumber = rightFormat(sFormat)
  if (sFormat === "0" || sFormat === "#") {
    sFormatedNum = nNumber;
  } else if (oNumber[0] === "n" || oNumber[0] === "N") {
    sFormatedNum = formatNumCSharp(oNumber, nNumber);
  } else {
    sFormatedNum = formatNumDelphi(oNumber, nNumber);
  }
  return sFormatedNum;
}

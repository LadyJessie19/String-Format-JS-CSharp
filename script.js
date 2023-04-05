const arFormat = (number, iDecs) => {
  const finalNumber = number.toFixed(iDecs);
  const formatedNum = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: iDecs,
    maximumFractionDigits: iDecs,
  });
  return formatedNum.format(finalNumber);
};

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
function readBeforeDot() {
  const word = $("#formatSel").val();
  const beforeDot = word.split(".")[0];
  let k = 0;
  for (let i = 0; i < beforeDot.length; i++) {
    const element = beforeDot[i];
    if (element === "0" || element === "#") {
      k++;
    }
  }
  return $("#pRes").text(`Antes do ponto existem ${k} caracteres válidos`);
}
function showFormat() {
  const format = $("#formatSel").val();
  const number = $("#inputDec").val();
  const nNumber = format.split(/([a-zA-Z]+)([0-9]+)/).slice(1,3)/* testar a perfomace */

  /* let comma = 0;
  for (let i = 0; i < format.length; i++) {
    const element = format[i];
    if (element === ",") {
      comma++;
    }
  } */
  
  // const nComma = format.split(',')

  if(format === '0' || format === '#') return $("#pRes").text(`Valor formatado é: ${number}`);
  
  // if(comma > 0) return $("#pRes").text(`Valor formatado é: ${nComma[0] === '#'? '0':nComma[0]},${number}`)

  if (nNumber[0] === "n" || nNumber[0] === "N") {
    const iDec = nNumber[1];
    const formNumber = arFormat(Number(number), iDec);
    return $("#pRes").text(`Valor formatado com N é: ${formNumber}`);
  }
  const s = formatNumDelphi
  const iDec = readAfterDot(format);
  const formNumber = arFormat(Number(number), iDec);
  return $("#pRes").text(`Valor formatado é: ${formNumber}`);
}
/**
    * formatNumDelphi
    * Return a string to Delphi Format
    *  @type {(sFormat: string, nNumber: number) => string} TypeScript syntax
    *  @type {formatNumDelphi(string, number): string} Closure syntax
    * 
    */
const formatNumDelphi = (sFormat, nNumber) => {
  const iDec = readAfterDot(sFormat);
  const sNumber = arFormat(nNumber, iDec);
  return sNumber;
}
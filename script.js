const arFormat = (number, iDecs) => {
    const finalNumber = number.toFixed(iDecs);
    const formatedNum = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: iDecs,
        maximumFractionDigits: iDecs,
      });
    return formatedNum.format(finalNumber);
};

function readAfterDot(word){
  const iDec = word.length - (word.lastIndexOf('.')+1)
  const afterDot = (word.split("."))[1];
  let k = 0;
  for (let i = 0; i < iDec; i++) {
    const element = afterDot[i];
    if( element === '0' || element === '#') { k++ }
  }
  return k
}

function showFormat(){
  const format = $('#formatSel').val();
  const number = $('#inputDec').val();
  const iDec = readAfterDot(format)
  const formNumber = arFormat(Number(number), iDec);
  return $("#pRes").text(`Valor formatado é: ${formNumber}`);
}



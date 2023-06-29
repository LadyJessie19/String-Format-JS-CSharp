locale = {
    date: {
      format: "MMM dd, yyyy h:mm:ss a",
      monthsFull: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthsShort: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      daysFull: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      shortDateFormat: "M/d/yyyy h:mm a",
      longDateFormat: "EEEE, MMMM dd, yyyy h:mm:ss a",
    },
    number: {
      format: "#,##0.0#",
      groupingSeparator: ".",
      decimalSeparator: ",",
    },
  };
  
//   $("#res").text($.format.number(5432.1, ",###.00"));
  
  function formating() {
    const number = parseFloat(document.getElementById("number").value);
    const sFormat = document.getElementById("inputFormat").value;
    const sResult = $.format.number(number, sFormat);
    document.getElementById("result").value = sResult;
  }
  
  const aNumFormat = ["0.", "0.0", ",.00000", ",0.0000", ",0.000", "0,", "0.00"];
  const aDateFormat = [
    "dd/mmm/yy  ddd",
    "dd/mmm/yyyy ddd",
    "ddd dd/mmm",
    "HH:NN",
    "mmm/yy",
    "mmm/yyyy",
    "yyyy/mmm",
  ];
  
  const newNumber = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  });

  function jQueryFormat() {
    const date = new Date();  
    let i = 0;
    while (i < 1) {
      for (let index = 0; index < aNumFormat.length; index++) {
        const sFormat = aNumFormat[index];
        const sResult = $.format.number(12345.678, sFormat);
        console.log(sResult);
        /* res jquery */
        const sRst = arFormat(12345.678, sFormat);
        console.log(sRst);
        /* criar arFormat que devolve  */
        /* res js */
        /* decimais identicos de ambos */

        for (let index = 0; index < aDateFormat.length; index++) {
            const sFormat = aDateFormat[index];
            const sResult = $.format.date(date, sFormat);
      }
      i++;
    }
  }
}

  function jsFormat() {
    let i = 0;
    while (i < 10) {
      for (let index = 0; index < aNumFormat.length; index++) {
        const sFormat = aNumFormat[index];
        const sResult = newNumber.format(12345.67888);
        console.log(sResult);
      }
      i++;
    }
  }

  const arFormatM = (number, iDecs) => {
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
    const formNumber = arFormatM(Number(number), iDec);
    return $("#pRes").text(`Valor formatado é: ${formNumber}`);
  }

  


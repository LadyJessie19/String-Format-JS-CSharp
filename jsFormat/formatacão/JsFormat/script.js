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

$("#inputFormat").val(locale.number.format);
$("#number").val(123456789.123456789);

$();

$("#res").text($.format.number(5432.1, ",###.00"));

function formating() {
  /* console.log($.format.number(5432.1, ',###.00')); */
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
    }
    /* for (let index = 0; index < aDateFormat.length; index++) {
      const sFormat = aDateFormat[index];
      const sResult = $.format.date(date, sFormat);
      // console.log(sResult);
    } */
    i++;
  }
}
const newNumber = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 3,
  maximumFractionDigits: 3,
});
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
function showTimeExecution() {
  const inicio = performance.now();
  jsFormat();
  const fim = performance.now();
  const tempo = fim - inicio;
  console.log(`Tempo de execução: ${tempo} ms`);
}

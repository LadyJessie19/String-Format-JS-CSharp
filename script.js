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

function dotAfter(number) {
  const splited = number.split(".");
  if (splited.length === 1) {
    return 0;
  }
  const zeroAfter = splited[1].match(/0+$/);
  return zeroAfter ? zeroAfter[0].length : 0;
}

const arFormat = (number, iDecs) => {
    const finalNumber = number.toFixed(iDecs);
    const formatedNum = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: iDecs,
        maximumFractionDigits: iDecs,
      });
    return formatedNum.format(finalNumber);
};

const formatNumber = () => {
  const input = jQuery("#inputDec");
  const number = input.val();
  const format = $("#formatSel").val();
  const iDec = dotAfter(format);
  const formatedNumber = arFormat(Number(number), iDec);
  return $("#pRes").text(`Valor formatado com Intl foi: ${formatedNumber}`);
};

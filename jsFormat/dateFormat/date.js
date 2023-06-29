
/**
 * This function cleans up and turns the date format into an object with day, month, and year attributes. Each one of these attributes is meant to be sent to the readFormat functions.
 * @param {string} format
 * @returns {object}
 */
function cleanFormat(format) {
  const newFormat = format
    .replace(/[^dDmMyY]+/g, "")
    .toLowerCase(); /* This regex will take all "d", "m" and "y" characters and will remove the whitespace. */
  const oFormatObj = {
    day: sliceString(newFormat, "d"),
    month: sliceString(newFormat, "m"),
    year: sliceString(newFormat, "y"),
  };
  return oFormatObj;
}
/**
 * This function counts the number of characters from the specified format. It takes two parameters, sFormat, which is the format that was chosen, and sLetter, which is the letter that must be searched in the sFormat.
 * @param {string} sFormat 
 * @param {string} sLetter 
 * @returns {array}
 */
function sliceString(sFormat, sLetter) {
  let aLetter = [];
  for (let iNum = 0; iNum < sFormat.length; iNum++) {
    if (sFormat[iNum] === sLetter) aLetter.push(sLetter);
  }
  return aLetter.join("");
}
/**
 * Returns the correct config to the Intl.DateTimeFormat formatting day attribute.
 * @param {object} oDay 
 * @returns {string}
 */
function readDayFormat(oDay) {
  let day;
  let weekday;
  switch (oDay) {
    case "d":
      day = "numeric";
      break;
    case "dd":
      day = "2-digit";
      break;
    case "ddd":
      weekday = "short";
      break;
    case "dddd":
      weekday = "long";
      break;
  }
  if (day) return day;
  return weekday;
}
/**
 * Returns the correct config to the Intl.DateTimeFormat formatting month attribute.
 * @param {object} oMonth 
 * @returns {string}
 */
function readMonthFormat(oMonth) {
  let month;
  switch (oMonth) {
    case "m":
      month = "numeric";
      break;
    case "mm":
      month = "2-digit";
      break;
    case "mmm":
      month = "short";
      break;
    case "mmmm":
      month = "long";
      break;
  }
  return month;
}
/**
 * Returns the correct config to the Intl.DateTimeFormat formatting year attribute.
 * @param {object} oYear 
 * @returns {string}
 */
function readYearFormat(oYear) {
  let year;
  switch (oYear) {
    case "yy":
      year = "2-digit";
      break;
    case "yyyy":
      year = "numeric";
      break;
  }
  return year;
}
/**
 * This function creates an object with the options to the Intl.DateTimeFormat with the specified format.
 * @param {number} iDayLength 
 * @param {string} dayFormat 
 * @param {string} monthFormat 
 * @param {string} yearFormat 
 * @returns {object}
 */
function intlObj(iDayLength, dayFormat, monthFormat, yearFormat) {
  let oOptIntl;
  if (iDayLength <= 2) {
    oOptIntl = {
      day: dayFormat,
      month: monthFormat,
      year: yearFormat,
    };
  } else {
    oOptIntl = {
      day: "2-digit",
      weekday: dayFormat,
      month: monthFormat,
      year: yearFormat,
    };
  }
  return oOptIntl;
}
/**
 * This function performs the use of Intl.DateTimeFormat.
 * @param {string} sDate 
 * @param {object} oOptions 
 * @returns {string}
 */
function intlFormat(sDate, oOptions, day) {
  const sFormatIntl = new Intl.DateTimeFormat("pt-BR", oOptions);
  let sResFormat;
  if(day){
    sResFormat = sFormatIntl.format(sDate).toUpperCase().replace(/\./g, "").replace(/DE/gi, "de");
  } else{
    sResFormat = sFormatIntl.format(sDate).replace(/\./g, "").replace(/DE/gi, "de")
  }
  return sResFormat;
}
/* -------- finalFunction ---------- */
/**
 * This function gathers all the functions and formats the date that was chosen as a parameter.
 * @param {string} sDate 
 * @param {string} sFormat 
 * @returns {string}
 */
function arDateFormat(sDate, sFormat) {
  const newDate = new Date(`${sDate}T00:00:00-03:00`);
  const oClearedFormat = cleanFormat(sFormat);
  const dayFormat = readDayFormat(oClearedFormat.day);
  const monthFormat = readMonthFormat(oClearedFormat.month);
  const yearFormat = readYearFormat(oClearedFormat.year);
  const iDay = oClearedFormat.day.length
  const oOptions = intlObj(
    iDay,
    dayFormat,
    monthFormat,
    yearFormat
  );
  return intlFormat(newDate, oOptions, iDay === 3);
}

console.log(arDateFormat("2023-05-02", "dd/mmm/yyyy"));
/* TODO: 'mmmm' needs to stop being caps */
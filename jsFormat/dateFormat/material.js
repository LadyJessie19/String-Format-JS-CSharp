const now = new Date();
console.log(now.getFullYear()); // exibe o ano completo (por exemplo, 2023)
console.log(now.getMonth()); // exibe o mês (0 a 11)
console.log(now.getDate()); // exibe o dia do mês (1 a 31)
console.log(now.getDay()); // exibe o dia da semana (0 a 6)
console.log(now.getHours()); // exibe as horas (0 a 23)
console.log(now.getMinutes()); // exibe os minutos (0 a 59)
console.log(now.getSeconds()); // exibe os segundos (0 a 59)
console.log(now.getMilliseconds()); // exibe os milissegundos (0 a 999)
console.log(now.getTime()); // exibe o valor numérico da data atual

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
}

/* 

    "d" ou "dd": exibe o dia do mês com 1 ou 2 dígitos, respectivamente. Por exemplo, "5" ou "05".
    "ddd" ou "dddd": exibe o nome do dia da semana abreviado ou completo, respectivamente. Por exemplo, "Seg" ou "Segunda-feira".
    ---------------------------
    "m" ou "mm": exibe o número do mês com 1 ou 2 dígitos, respectivamente. Por exemplo, "3" ou "03".
    "mmm" ou "mmmm": exibe o nome do mês abreviado ou completo, respectivamente. Por exemplo, "Mar" ou "Março".
    --------------------------
    "y" ou "yy" ou "yyy": exibe o ano com 1, 2 ou 3 dígitos, respectivamente. Por exemplo, "2022" ou "22".
    "yyyy": exibe o ano com 4 dígitos. Por exemplo, "2022".

*/

/* 

  Resumo ⬆:

  ~1999-03-15~

  d  = 15         Dia
  dd = 15         Dia com zero(se tiver)
  ddd = Seg       Dia da semana
  dddd = Segunda  Dia da semana completo

  m = 3           Mês
  mm = 03         Mês com zero(se tiver)
  mmm = Mar       Nome do Mês - curto
  mmmm = Março    Nome do Mês - longo

  y = 9           Ano 
  yy = 99         Dois últimos digitos do ano
  yyy = 999       Três últimos digitos do ano
  yyyy = 1999     Ano completo

*/


/* É possível remover o '-feira' do day:long? */

/* Em JavaScript, utilizando a classe Intl.DateTimeFormat para a localidade "pt-BR", é possível remover o "-feira" do nome completo do dia da semana utilizando a opção "long", através do uso do argumento "weekday" juntamente com o argumento "era", que determina se a era (antes ou depois de Cristo) deve ser incluída ou não.

Por exemplo, para exibir o nome completo do dia da semana sem o sufixo "-feira", basta utilizar a opção "long" com o argumento "era: false" da seguinte forma: */

/* const date = new Date('2023-04-25');
const options = { weekday: 'long', era: false };
const formatter = new Intl.DateTimeFormat('pt-BR', options);
console.log(formatter.format(date)); // exibe "segunda"
 */
const n1 = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
}
) 
console.log(n1.format(5945.3))
console.log($.format.number(5432.1, ',###.00'));
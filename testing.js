import {showFormat} from './format.js' 

console.log('Teste Formato Delphi')
console.log('Com Delphi: '+ showFormat('#0.00', 1234.5))
console.log('---------')
console.log('Teste Formato C#')
console.log('Com C#: '+ showFormat('n2', 5432.111))
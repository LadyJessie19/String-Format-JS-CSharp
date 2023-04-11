import {formatNum} from './format.js' 

/* let randomArray = [];
for (let i = 0; i < 100; i++) {
  randomArray.push((Math.floor(Math.random() * 100) * 2)*15);
}
 */
let randomArray = [1484, 1200, 382, 1496, 501, 1184, 1462, 1198, 314, 1112, 312, 68, 1446, 1234, 455, 284, 1282, 206, 1283, 624, 207, 1074, 764, 1351, 116, 1436, 655, 801, 449, 877, 1273, 956, 987, 1152, 893, 1129, 1025, 289, 210, 358, 426, 767, 552, 799, 1034, 396, 724, 847, 1400, 1323, 1089, 752, 712, 1213, 1025, 614, 564, 457, 1409, 545, 1264, 1140, 1565, 1145, 1477, 340, 1423, 1365, 1457, 830, 333, 135, 245, 1254, 752, 727, 79, 156, 1051, 189, 1230, 408, 773, 1413, 414, 703, 420, 758, 584, 1174, 1529, 727, 262, 537, 1087, 1408, 131, 1325, 1444, 718]

console.time('Este looping demorou');

for (let index = 0; index < randomArray.length; index++) {
    const element = randomArray[index];
    console.log('Teste Formato C#')
    console.log(formatNum('n7', element))
    console.log('Teste Formato Delphi')
    console.log(formatNum('#0.0#09', element))
    console.log('---------')
}

console.timeEnd('Este looping demorou');
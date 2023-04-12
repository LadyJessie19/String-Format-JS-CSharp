import { formatNum } from "./format.js";

/* let randomArray = [];
for (let i = 0; i < 100; i++) {
  randomArray.push((Math.floor(Math.random() * 100) * 2)*15);
}
 */

// const aRandom   (mgd 2023.04.11)✅
const aRandom = [
  1484, 1200, 382, 1496, 501, 1184, 1462, 1198, 314, 1112, 312, 68, 1446, 1234,
  455, 284, 1282, 206, 1283, 624, 207, 1074, 764, 1351, 116, 1436, 655, 801,
  449, 877, 1273, 956, 987, 1152, 893, 1129, 1025, 289, 210, 358, 426, 767, 552,
  799, 1034, 396, 724, 847, 1400, 1323, 1089, 752, 712, 1213, 1025, 614, 564,
  457, 1409, 545, 1264, 1140, 1565, 1145, 1477, 340, 1423, 1365, 1457, 830, 333,
  135, 245, 1254, 752, 727, 79, 156, 1051, 189, 1230, 408, 773, 1413, 414, 703,
  420, 758, 584, 1174, 1529, 727, 262, 537, 1087, 1408, 131, 1325, 1444, 718,
];

// const aFormat  = ['n7', 'n5', '#0.000',...];  (mgd 2023.04.11)✅

const aFormat = [
  "n7",
  "n5",
  "#0.000",
  "0.00",
  "n0",
  "n1",
  "#0.000000",
  "#0.00",
  "#0.0",
  "teste.teste",
  "n3",
  "n4",
  "n2",
  "n6",
  "0.00",
  "#0.0#1x",
  "##.#res#0",
  "n7",
  "n5",
  "00.880xx",
  "#0.000",
  "0.00",
  "xx0.xx",
  "n0",
  "n1",
  "#0.000000",
  "#0.00",
  "#0.0",
  "n3",
  "n4",
  "n2",
  "n6",
  "0.00",
  "abc.xyz",
  "formato",
  "N1",
  "N2",
  "N3",
  "N0",
  "N@",
  "N#",
  "nn",
  "N2n",
  "N1nnn",
  "N4",
  "n1n2n3",
  "n5",
  "n1",
  "#0.000",
  "0.00",
  "#0.0",
  "0",
  "#0.000",
  "0.00",
  "#0.0000",
  "0.000##",
];

// const stName= 'Este looping demorou'; (mgd 2023.04.11)✅
const stName = "Este looping demorou";
console.time(stName);

for (let iNum = 0; iNum < aFormat.length; iNum++) {
  const nRandom = aRandom[iNum]; // iNum =   (mgd 2023.04.11)✅
  const sFormat = aFormat[iNum];
  console.log(`Teste ${iNum}`);
  console.log(`Formato: ${sFormat} | Número: ${nRandom}`);
  console.log(formatNum(sFormat, nRandom));
  console.log("---------");
}

console.timeEnd(stName);

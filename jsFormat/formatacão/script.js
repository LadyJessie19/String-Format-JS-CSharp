// alert('Olha eu aqui')

const text = document.getElementById("text")
const res = document.getElementById("res")
const typeOf = document.getElementById("typeof")

const sName = document.getElementById("sName")
const nHeight = document.getElementById("nHeight")
const nWeight = document.getElementById("nWeight")

const fillText = () => {
    sName.value = 'Jéssica'
    nHeight.value = 1.69
    nWeight.value = 73
}

const formatText = () => {
    res.innetHTML = ""
    typeOf.innetHTML = ""
  res.innerHTML = `${sName.value} mede ${nWeight.value}cm e pesa ${nHeight.value}kg`
  typeOf.innerHTML = `Tipo do 1º Input: ${typeof sName.value}, Tipo do 2º Input: ${typeof nHeight.value} e Tipo do 3º Input: ${typeof nWeight.value}`
}
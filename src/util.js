

function unixToDate (dt) {
  const dateObject = new Date(dt * 1000)
  return dateObject.toLocaleString("pt-BR")
}

function removeAcentos(word) {
  com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ"
  sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRPBaaaaaaaceeeeiiiiðnoooooouuuuypyr"
  let i = 0
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < com_acento.length; j++) {
      if(com_acento[j] == word[i]){
        word = word.replace(word[i], sem_acento[j])
      }
    } 
  }
  return word
}

module.exports = {unixToDate, removeAcentos}
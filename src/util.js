
function rainAmount(weather)
{
  try {
    return weather.rain['1h']
  } catch(e) {
    return 0
  }
}

function unixToDate (dt) {
  const dateObject = new Date(dt * 1000)
  return dateObject.toLocaleString('pt-BR')
}

function unixToTime (dt) {
  const dateObject = new Date(dt * 1000)
  return dateObject.toLocaleTimeString('pt-BR').replace(' AM','').replace(' PM','')
}

function removeAcentos (word) {
  const comAcento = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ'
  const semAcento = 'AAAAAAACEEEEIIIIDNOOOOOOUUUUYRPBaaaaaaaceeeeiiiiðnoooooouuuuypyr'
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < comAcento.length; j++) {
      if (comAcento[j] === word[i]) {
        word = word.replace(word[i], semAcento[j])
      }
    }
  }
  return word
}

module.exports = { unixToDate, unixToTime, removeAcentos, rainAmount }

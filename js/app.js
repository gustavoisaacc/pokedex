import API from './api.js'
import Personaje from './personaje.js'

const api = new API()

const buttons = document.querySelectorAll('#arrow a')
var contador = 1;

buttons.forEach( btn=>{
  btn.addEventListener('click', async () => {
    if(btn.dataset.index == 1){
      const personaje = await api.pokemon(++contador)
    await new Personaje(personaje)
    }else{
      const personaje = await api.pokemon(--contador)
      await new Personaje(personaje)
    }
  })
})





async function initApp(id){
  const personaje = await api.pokemon(id)
  console.log(personaje)
  await new Personaje(personaje)

  // console.log(persinaje.sprites.back_default)
}
initApp(contador)

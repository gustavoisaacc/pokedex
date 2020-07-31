import API from './api.js'
import Personaje from './personaje.js'

const api = new API()

const buttons = document.querySelectorAll('#arrow a')
var contador = 1;

buttons.forEach( btn=>{
  btn.addEventListener('click', async () => {
    btn.classList.remove('active')
    if(btn.dataset.index == 1){
      const personaje = await api.pokemon(++contador)
      await new Personaje(personaje)
      btn.classList.add('active')
    }else{
      const personaje = await api.pokemon(--contador)
      await new Personaje(personaje)
      btn.classList.add('active')
      console.log(personaje.id)
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

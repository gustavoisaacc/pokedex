export default class Personaje{
  constructor({name,sprites,moves,weight, height}){
    this.name = name
    this.sprites = sprites
    this.height = height
    this.weight = weight
    this.card = document.getElementById('card')
    this.render()
  }
  buildImage () {
    return `
        <div class="data">
          <h2>${this.name}</h2>
          <p><strong>weight:</strong> ${this.weight}</p>
          <p><strong>height:</strong> ${this.height}</p>

        </div>
        <div class="container-img">
          <img  class="caracter-img" src="${this.sprites.back_default}" alt="${this.name}">
        </div>
    `
  }
  render(){
    this.card.innerHTML = this.buildImage()
  }

}
export default  class API{
  async pokemon (id){

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
  
    return data
   
  }
}


//Funcionalidad en data
import { inputSearchElem } from './main.js';
//muestro la info
export const showInfo=(pokes)=>{
  const inputValue=inputSearchElem.value;
  let info='';
//   console.log(`Lei input ${inputValue}`)
      pokes.forEach((poke)=>{
         if(inputValue==poke.name){
             info= `
              <p id="namePok"> ${poke.name}</p>
              <section id="s2img">
                  <span class="circle">${poke.num}</span>
                  <img src="${poke.img}" alt="pokemonImage">
              </section> 
              <section id="s2about">
                    <p id="about" class="infoCont"> <span>${poke.about}</span></p>
                    <div id="s2info" class="infoCont data">
                        <p>Type:<span>${poke.type}</span></p>
                        <p>Height:<span>${poke.size.height}</span></p>
                        <p>Weight:<span>${poke.size.weight}</span></p>      
                    </div>
                    <div id="weakRes" class="infoCont data">
                        <p>Weakness:<span>${poke.weaknesses}</span></p>
                        <p>Resistance:<span>${poke.resistant}</span></p>
                    </div>
               </section>
              `
         }
      });
      if(info){
          return info;
      }
      else{
          return 'El nombre ingresado no es correcto';
      }   
}
export const showAllData=(data)=>{
    return `
    <section class="s3">
          <section id="s2img">
                  <span class="circle">${poke.num}</span>
                  <img src="${poke.img}" alt="pokemonImage">
              </section> 
          <span class="namePok"> ${data.name}</span>
    </section>
    `
}

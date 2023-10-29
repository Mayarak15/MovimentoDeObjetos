personagem = document.querySelector("#Boneco");
foto = document.querySelector("#personagem");
confirmarAviso = document.querySelector("#confirmar_aviso");
x = 0;
y = 0;

confirmarAviso.addEventListener('click', ()=>{
  document.querySelector("#aviso").style.display = "none"
})


window.addEventListener('keypress', (event)=>{

var tecla = event.keyCode;

/*console.log("essa foi a tecla " + tecla)*/

if(tecla == "97"){

x = x - 10;
personagem.style.left =x+ "px";
foto.style.transform = 'scaleX(-1)';

}
if(tecla == "115"){

  y = y + 10;
  personagem.style.top =y+ "px";
  
  }
  if(tecla == "100"){

    x = x + 10;
    personagem.style.left =x+ "px";
    foto.style.transform = 'scaleX(1)'
    }
    if(tecla == "119"){

      y = y - 10;
  personagem.style.top =y+ "px";
      
      }



})
/*
letra w = 119
tecla d = 100
tecla s = 115
tecla a = 97

*/

nome = document.querySelector("#nome_usuario");

nome.addEventListener('click', ()=>{

  document.querySelector("#troca_nome").style.display = "flex";


})
document.querySelector("#confirmar_nome").addEventListener('click', ()=>{

  novoApelido = document.querySelector("#dado_nome");
  nome.innerText = novoApelido.value;
  document.querySelector("#troca_nome").style.display = "none";

  if(novoApelido.value === ""){
    nome.innerText = "Irineu";
  }

})
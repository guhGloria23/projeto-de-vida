const botoes= documen.querySelectorAll(".botao");
for (let i = 0; i<botoes.legngt; i++{
  botoes[i].onclinck = function(){
    for (let j = 0; j <botoes.length; j++){
      botoes[j].classList.remove("ativo");
    }

  
    botoes[i].classList.add("ativo");

  };
}

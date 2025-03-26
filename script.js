document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao document.getElementById('aumentar-fonte');
    const diminuiFonteBotao document.getElementById('diminuir-fonte');
    

    const botaoReduzirTamanho = document.getElementById("botaoReduzirTamanho");

botaoReduzirTamanho.addEventListener("click", function () {
  let letraTamanhoAtual = 1;
  document.body.style.fontSize = `${letraTamanhoAtual}rem`;
});

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

})
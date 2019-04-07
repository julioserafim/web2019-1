
//QuerySelector
// var primeiroParagrafo = document.querySelector("p");
// primeiroParagrafo.textContent = "Segundo parágrafo modificado";

//QuerySelectorAll
// var paragrafos = document.querySelectorAll("p");
// paragrafos[0].textContent = "Texto Legal";
// paragrafos[1].textContent = "Outro texto legal";
// paragrafos[2].textContent = "Terceiro";


// function mostrarAlerta(){
//     alert("Isto é um alerta");
// }

// // var botao = document.querySelector("#alerta");
// // botao.onclick = mostrarAlerta;


// document.querySelector("#botaogera").addEventListener('click',

//    function () {
//     var item = document.createElement("li");
//     var textoItem = document.createTextNode("Item");
    
//     item.appendChild(textoItem);
    
//     document.querySelector("#lista").appendChild(item);
// })


// document.querySelector("#botaoremover").addEventListener('click', function(){
//         var lista = document.querySelector("#lista")
//         lista.removeChild(lista.childNodes[0])
// })


document.querySelector("#adicao").addEventListener('click', function(){
    var numero1 = document.querySelector("#numero1").value;
    var numero2 = document.querySelector("#numero2").value;

    var resultado = parseInt(numero1)+parseInt(numero2);
    
    document.querySelector("#resultado").value = resultado
})
































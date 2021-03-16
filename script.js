function imprimirResultado(){
    var x = document.getElementById("RuedaDel");
    var i = x.selectedIndex;
    document.getElementById("resultado").innerHTML = x.options[i].text;
}
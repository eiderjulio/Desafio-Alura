
function encriptarBtn (){    
    
    var c = "";
    var d = "";
    var textoEncriptar = document.getElementById("textoEncriptar").value;
    var arraStr = textoEncriptar.split('');
    textoEncriptar = textoEncriptar.replace(/ /g, "xxx");


    if((textoEncriptar == textoEncriptar.toLowerCase()) & (/^[a-zA-Z]+$/.test(textoEncriptar)==true) ){    
        textoEncriptar = textoEncriptar.replace(/xxx/g, " ");
        
        for(var i=0; i<arraStr.length;i++){
            if (arraStr[i]== "e"){
                d = "enter";
            }
            else if (arraStr[i]== "i"){
                d = "imes";
            }
            else if (arraStr[i]== "a"){
                d = "ai";
            }
            else if (arraStr[i]== "o"){
                d = "ober";
            }
            else if (arraStr[i]== "u"){
                d = "ufat";
            }
            else if (arraStr[i]== " "){
                d = " ";            
            } 
            else{
                d=arraStr[i];
            }
            c = c+d + "";  
        }
        document.getElementById("ocultatexto").style.visibility = "hidden";
        document.getElementById("mostrarTexto").style.visibility = "visible"; 
        document.getElementById("mostrarTexto").value=c;
        document.getElementById("textoEncriptar").value = "";

    } else {
        alert("Solo puede escribir letras minusculas sin acentos");
        document.getElementById("textoEncriptar").value = ""; 
    }   
        
}




function desencriptarBtn(){ 
    var textoEncriptar = document.getElementById("textoEncriptar").value;     
    var arraStr = textoEncriptar.replace(/" "/g, " ");
    arraStr = arraStr.replace(/enter/g, "e");
    arraStr = arraStr.replace(/imes/g, "i");
    arraStr = arraStr.replace(/ai/g, "a");
    arraStr = arraStr.replace(/ober/g, "o");
    arraStr = arraStr.replace(/ufat/g, "u"); 
    
    document.getElementById("ocultatexto").style.visibility = "hidden";
    document.getElementById("mostrarTexto").style.visibility = "visible"; 
    document.getElementById("mostrarTexto").value=arraStr;
    document.getElementById("textoEncriptar").value = ""; 
}

function btnCopiar(){
    var copiado = document.getElementById("mostrarTexto").value;
    navigator.clipboard.writeText(copiado);   

}


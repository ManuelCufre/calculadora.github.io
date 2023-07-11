const resultado = document.getElementById('resultado')
const teclas = document.querySelectorAll('button')

teclas.forEach((item) =>{
    item.onclick =() => {
if(item.id == "borrar-todo"){
    resultado.innerText = "" 
}else if(item.id == "borrar"){
    let borrar = resultado.innerText.toString()
    resultado.innerText = borrar.substr(0, borrar.length-1)
}else if(resultado.innerText !== "" && item.id == "igual"){
    resultado.innerText = eval(resultado.innerText)
}else if(resultado.innerText == "" && item.id == "igual"){
    resultado.innerText = "null"
    setTimeout(() =>{
        resultado.innerText = "";
    }, 2000)
}
else{
    resultado.innerText += item.id
}
}
})
let introduccion = document.getElementById('introduccion')
let tema1 = document.getElementById('tema1')
let tema2 = document.getElementById('tema2')
let tema3 = document.getElementById('tema3')
console.log(introduccion)


function actualizar(tema,texto){
    tema.addEventListener("mouseover", function(e){
        introduccion.innerHTML =texto
    })
}
function revertir(tema,texto){
    tema.addEventListener("mouseout", function(e){
        introduccion.innerHTML = texto
    })
}
//Modulo1
let texto = "Aprende todo sobre el flujo de tu dinero"
actualizar(tema1, "¿Que es el Cash flow y como sacar provecho de el?")
revertir(tema1,texto)

actualizar(tema2, "¿Con que herramientas puedo administrar mi Cash flow?")
revertir(tema2,texto)

actualizar(tema3, "Pon aprueba lo que has aprendido!")
revertir(tema3,texto)

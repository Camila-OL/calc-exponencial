enviar = (but, c = document.getElementById("campo1").value) => {
    let c2 = document.getElementById("campo2").value
    
     if(c.length || c2.length > 0) {
        let cub = c**c2
        alert(`${c} elevado a ${c2}° é: ${cub}`)
        return `${cub}`
    } if(c.length || c2.length === 0) {
        alert("ERRO! digite um número")
    } 
}

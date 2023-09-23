const agregar = (valor) => {
    document.getElementById('pantalla').value += valor;
}

const borrar = () => {
    document.getElementById('pantalla').value = '';
}
const borraruno = () => {
    document.getElementById('pantalla').value = document.getElementById('pantalla').value.toString().slice(0,-1);
}

const calcular = () => {
    const valorpantalla =  document.getElementById('pantalla').value
    const resultado = eval(valorpantalla)
    document.getElementById('pantalla').value = resultado
}
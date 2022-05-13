var hora = 0
var minuto = 0
var segundo = 0
var milesimo = 0
var horatxt = document.getElementById('hora')
var minutotxt = document.getElementById('minuto')
var segundotxt = document.getElementById('segundo')
var intervalo
function formatSegundo()
{
    var inputsegundotxt = document.getElementById('inputsegundo')
    var inputsegundo = Number(inputsegundotxt.value)
    segundo = inputsegundo
    if(inputsegundo < 10)
    {
        inputsegundotxt.value = `0${inputsegundotxt.value}`
    }
}
function formatMinuto()
{
    var inputminutotxt = document.getElementById('inputminuto')
    var inputminuto = Number(inputminutotxt.value)
    minuto = inputminuto
    if(inputminuto < 10)
    {
        inputminutotxt.value = `0${inputminutotxt.value}`
    }
}
function formatHora()
{
    var inputhoratxt = document.getElementById('inputhora')
    var inputhora = Number(inputhoratxt.value)
    hora = inputhora
    if(inputhora < 10)
    {
        inputhoratxt.value = `0${inputhoratxt.value}`
    }
}
function start()
{
    if (inputminuto > 59)
    {
        alert('valor inválido')
    }
    else if (inputsegundo > 59)
    {
        alert('valor inválido')
    }
    else
    {
        document.getElementById('inputRelogio').style.display = 'none'
        document.getElementById('relogio').style.display = 'flex'
        
        if(segundo < 10)
        {
            segundotxt.innerHTML = `0${segundo}`
        }
        else
        {
            segundotxt.innerHTML = segundo
        }
        
        if(minuto < 10)
        {
            minutotxt.innerHTML = `0${minuto}`
        }
        else
        {
            minutotxt.innerHTML = minuto
        }
        
        if(hora < 10)
        {
            horatxt.innerHTML = `0${hora}`
        }
        else
        {
            horatxt.innerHTML = hora
        }
        intervalo = setInterval(subsegundo,500)
    }
}
function subsegundo()
{
    segundo --
    if (segundo == 0 && minuto == 0 && hora == 0)
    {
        alert('fim')
    }
    else if (segundo < 0 )
    {
        segundo = 59
        segundotxt.innerHTML = `${segundo}`
        subminuto()
    }
    else
    {
        if(segundo < 10)
        {
            segundotxt.innerHTML = `0${segundo}`
        }
        else
        {
            segundotxt.innerHTML = segundo
        }
    }
}
function subminuto()
{
    minuto --
    if (minuto < 0 && segundo == 59)
    {
        minuto = 59
        minutotxt.innerHTML = `${minuto}`
        subhora()
    }
    else
    {
        if(minuto < 10)
        {
            minutotxt.innerHTML = `0${minuto}`
        }
        else
        {
            minutotxt.innerHTML = minuto
        }
    }
}
function subhora()
{
   hora --
   if(hora < 10)
        {
            horatxt.innerHTML = `0${hora}`
        }
        else
        {
            horatxt.innerHTML = hora
        }
}
function stop()
{
 
}
function reset()
{
    
}
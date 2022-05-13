var hora = 0
var minuto = 0
var segundo = 0
var milesimo = 0
var horatxt = document.getElementById('hora')
var minutotxt = document.getElementById('minuto')
var segundotxt = document.getElementById('segundo')
var milesimotxt = document.getElementById('milesimo')
var intervalo
function start()
{
    document.getElementById('pause').removeAttribute('disabled')
    document.getElementById('pause').removeAttribute('hidden')
    document.getElementById('reset').removeAttribute('disabled')
    document.getElementById('reset').removeAttribute('hidden')
    document.getElementById('pause').setAttribute('onclick','stop()')
    document.getElementById('pause').innerHTML ='<img src="imagens/pausa.png">'
    document.getElementById('start').setAttribute('disabled','true')
    document.getElementById('start').setAttribute('hidden','true')
    intervalo = setInterval(addmilesimo,10)
}
function addmilesimo()
{
    milesimo ++
    if(milesimo < 10)
    {
        milesimotxt.innerHTML = `0${milesimo}`
    }
    else
    {
        milesimotxt.innerHTML = milesimo
    }
    if (milesimo == 100)
    {
        milesimo = 0
        milesimotxt.innerHTML = `0${milesimo}`
        addsegundo()
    }
}
function addsegundo()
{
    segundo ++
    if(segundo < 10)
    {
        segundotxt.innerHTML = `0${segundo}`
    }
    else
    {
        segundotxt.innerHTML = segundo
    }
    if (segundo == 60)
    {
        segundo = 0
        segundotxt.innerHTML = `0${segundo}`
        addminuto()
    }
}
function addminuto()
{
    minuto++
    if(minuto < 10)
    {
        minutotxt.innerHTML = `0${minuto}`
    }
    else
    {
        minuto.txt.innerHTML = minuto
    }
    if (minuto == 60)
    {
        addhora()
        minuto = 0
        minutotxt.innerHTML = `0${minuto}`
    }
}
function addhora()
{
    hora ++
    if(hora < 10)
    {
        horatxt.innerHTML = `0${hora}`
    }
    else
    {
        hora.txt.innerHTML = hora
    }
}
function stop()
{
 clearInterval(intervalo)
 document.getElementById('pause').setAttribute('onclick','start()')
 document.getElementById('pause').innerHTML ='<img src="imagens/botao-play.png">'
}
function reset()
{
    location.reload()
}
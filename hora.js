const express = require("express")
const router = express.Router()
const app = express()

app.use(express.json())

const Porta = 3333

    function mostraHora() {
        const data = newDate()
        const hora = toLocaleTimeString('pt-BR')
        response.send(hora)
    }
    function mostraPorta ( )  {
    console.log("servidor criado e rodando na porta ", Porta)
    

 }
 
app.use(router.get('/hora', mostraHora))
app.listen(Porta, mostraPorta)
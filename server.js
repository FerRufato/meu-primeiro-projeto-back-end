const express = require("express")

const app = express()
const Porta = 3333

    function mostraPorta ( )  {
    console.log("servidor criado e rodando na porta ", Porta)
 }

app.listen(Porta, mostraPorta)
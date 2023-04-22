const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
response.json({
    nome:'Isabella Rufato',
    imagem:'https://www.instagram.com/p/CgqFeUsA_xMkbnNBouhZNQj5Atr6bKJDeHav5I0/',
    minibio:'Desenvolvedora'
 })
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta ", porta);
 }
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
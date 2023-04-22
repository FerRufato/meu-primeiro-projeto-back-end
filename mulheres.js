const express = require("express")
const router = express.Router()

const app = express()
const Porta = 3333


const mulheres = [
    {
        nome: 'Isabella Rufato',
        imagem: 'https://www.instagram.com/p/CjnrF7XuL5MNyKOneTpmke2QAPWjG7caWTljCY0/',
        minibio: 'desenvolvedora'         
    },
    {
        nome:'Fernanda Rufato',
        imagem: 'https://www.instagram.com/p/CRU5n06g6hVqzir8EdoqnVXljgUGm3BdlvQrNA0/',
        minibio: 'Desenvolvedora'
    },
    {
        nome: 'Nalla Rufato',
        imagem: 'https://www.instagram.com/p/CoBA7IDu-ZWsoCRhHAA5A-3s5gOIgX9PETZYXI0/',
        minibio: 'Amorosa da mae'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}
    function mostraPorta ()  {
    console.log("servidor criado e rodando na porta ", Porta)

}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(Porta, mostraPorta)
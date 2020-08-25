
// >>>>>>> SERVIDOR
const express = require('express')
const server = express()

const { 
     pageLanding,
     pageStudy, 
     pageGiveClasses, 
     saveClasses 
    } = require('./pages')

//configuração do nunjucks - Template Engine
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


// configuração do servidor
server
//receber os dados via req body
.use(express.urlencoded({ extended : true }))

//configurar arquivos estáticos (css, imagens, scripts)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)


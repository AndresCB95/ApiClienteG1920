const express = require("express")
const cors = require("cors")
const body_parser = require("body-parser")

const app = express()
const path =  "/cliente"
const portcliente = 8082

app.use(cors())
app.use(body_parser.json())

app.get(path ,
    (request, response)=>{
        console.log("llego peticion")
        console.log(request)

        response.send("Hola mundo")
    }
)


app.listen(portcliente,
    ()=>{
        console.log("Subio api vuelo en el puerto"+port)
    }
)


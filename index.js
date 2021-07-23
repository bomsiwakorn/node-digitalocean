const express = require('express')
const app = express()
const PORT = 4000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/digital-ocean', (req,res) => {
    return res.status(200).send({
        msg: 'Test Droplet Digital Ocean.'
    })
})

app.listen(PORT, () => console.log(`Server is started at PORT ${PORT}`))

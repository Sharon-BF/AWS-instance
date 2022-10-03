const express = require('express');
const app = express();
const path = require('path')

//settings
app.set('port', 3000)

//middlewares
app.use( express.static( path.join(__dirname, 'src') ) )

//routes
// app.get('/', ( req, res ) =>{
//     res.send('asdf');
// })

app.listen(app.get('port'), () => {
    console.log('corriendo');
})
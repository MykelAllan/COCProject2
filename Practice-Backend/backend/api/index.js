import express from 'express'
import cors from 'cors'

//routes imports
import apiRoutes from './apiRoutes'

const app = express()

// Disable CORS rules
app.use(cors())

//access imported routes 
app.use(apiRoutes)

app.get('/', (req, res) => {
    res.json({ message: "/api" });
});



const PORT = 3001

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
})

export default app
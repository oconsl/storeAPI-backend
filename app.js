import express from 'express'
import cors from 'cors'
import dotEnv from 'dotenv'

const { PORT = 3000 } = dotEnv.config()

const app = express()

// DB connection here

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
// app.use('/api', )

// Error handle middleware
// app.use()

// Server start
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`)
})

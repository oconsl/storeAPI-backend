import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Product from './models/product.js'
import productRouter from './routes/productRouter.js'
import errorHandler from './middleware/errorHandler.js'

// DB connection here
import './database/db.js'

dotenv.config()
const { PORT = 3000 } = process.env
const app = express()

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/api', productRouter(Product))

// Error handle middleware
app.use(errorHandler)

// Server start
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`)
})

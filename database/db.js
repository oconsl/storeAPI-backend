import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from '../models/product.js'
import seed from './seed/seed.js'

dotenv.config()
const { DB_PORT, DB_HOST } = process.env

mongoose
  .connect(`mongodb://${DB_HOST}:${DB_PORT}/storeAPI`)
  .then(() => {
    console.log('Connected to database.')
  })
  .then(() => Product.deleteMany({}))
  .finally(() => {
    Product.insertMany(seed)
  })

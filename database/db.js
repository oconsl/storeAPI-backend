import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from '../models/product.js'
import seed from './seed/seed.js'

dotenv.config()
const { DB_URI } = process.env

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log('Connected to database.')
  })
  .then(() => Product.deleteMany({}))
  .finally(() => {
    Product.insertMany(seed)
  })

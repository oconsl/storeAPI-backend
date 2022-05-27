import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const { DB_PORT, DB_HOST } = process.env

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/storeAPI`)

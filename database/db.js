import mongoose from 'mongoose'
import dotenv from 'dotenv'

const { DB_PORT, DB_HOST } = dotenv.config()

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/storeAPI`)

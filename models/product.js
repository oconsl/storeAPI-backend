import { Schema } from 'mongoose'

const productModel = new Schema({
  name: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9\s\u00f1\u00d1]+$/
  },
  description: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9\s\u00f1\u00d1]+$/
  },
  imageUrl: {
    type: String,
    required: true
  }
})

export default productModel

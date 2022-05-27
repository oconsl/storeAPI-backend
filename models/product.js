import mongoose from 'mongoose'

const { Schema } = mongoose

const Product = new Schema({
  name: {
    type: String,
    required: [true, 'Product *name* is required'],
    unique: true,
    match: [
      /^[0-9a-z\u00C0-\u00FF\s]+$/iu,
      'The title must contain only letters and numbers.'
    ]
  },
  description: {
    type: String,
    required: [true, 'Product *description* is required']
  },
  imageUrl: {
    type: String,
    required: [true, 'Product *imageUrl* is required']
  }
})

export default mongoose.model('Product', Product)

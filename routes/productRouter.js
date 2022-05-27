import express from 'express'
import productController from '../controllers/productController.js'

const router = (Product) => {
  const productRouter = express.Router()

  const { getProducts, postProduct, putProduct, deleteProduct } =
    productController(Product)

  productRouter.route('/products').get(getProducts).post(postProduct)

  productRouter.route('/products:id').put(putProduct).delete(deleteProduct)

  return productRouter
}

export default router

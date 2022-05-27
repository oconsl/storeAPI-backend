const productController = (Product) => {
  // GET all Products
  const getProducts = async (_, res, next) => {
    try {
      const products = await Product.find({})

      res.status(200).json(products)
    } catch (err) {
      next(err)
    }
  }

  // POST Product
  const postProduct = async (req, res, next) => {
    try {
      const { body } = req
      const product = new Product(body)

      await product.save()

      res.status(201).send({ message: 'Product created successfully' })
    } catch (err) {
      next(err)
    }
  }

  // PUT Product by ID
  const putProduct = async (req, res, next) => {
    try {
      const { params, body } = req
      await Product.findByIdAndUpdate(params.id, body, {
        new: true
      })

      res.status(200).json({ message: 'Product updated successfully' })
    } catch (err) {
      next(err)
    }
  }

  // DELETE Product by ID
  const deleteProduct = async (req, res, next) => {
    try {
      const { params } = req
      const result = await Product.findByIdAndDelete(params.id)

      if (!result) {
        throw new Error('Product not found')
      }

      res.status(200).send({ message: 'Product deleted successfully' })
    } catch (err) {
      next(err)
    }
  }

  return { getProducts, postProduct, putProduct, deleteProduct }
}

export default productController

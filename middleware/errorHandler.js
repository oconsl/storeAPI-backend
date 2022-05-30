const ERROR_HANDLERS = {
  ValidationError: (res, err) => {
    const errors = Object.values(err.errors).map((e) => e.message)

    res.status(400).json({ errors })
  },
  MongoServerError: (res, err) => {
    res.status(403).send({
      error: err.name,
      cause: 'A product with the provided name already exists.'
    })
  },
  CastError: (res, err) => {
    res.status(400).send({
      error: err.name,
      cause: 'Invalid product ID.'
    })
  },
  Error: (res, err) => {
    res.status(403).send({
      error: err.name,
      cause: 'There is no such product with the provided ID.'
    })
  },
  defaultError: (res, err) => {
    res.status(500).send({
      error: err.name,
      cause: err.message
    })
  }
}

const errorHandler = (err, req, res, next) => {
  const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError

  handler(res, err)
}

export default errorHandler

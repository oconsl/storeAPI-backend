const ERROR_HANDLERS = {
  defaultError: (res, err) => {
    res.status(500).send({
      error: err.message
    })
  }
}

const errorHandler = (err, req, res, next) => {
  const handler = ERROR_HANDLERS[err.name] || ERROR_HANDLERS.defaultError

  handler(res, err)
}

export default errorHandler

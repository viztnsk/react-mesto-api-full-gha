class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 403;
    this.message = 'Доступ запрещен';
  }
}

module.exports = ForbiddenError;

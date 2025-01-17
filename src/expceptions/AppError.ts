class AppError extends Error {
  message: string;
  errorCode: any;
  statusCode: number;
  errors: any;
  constructor(
    message: string,
    errorCode: any,
    statusCode: number,
    errors: any
  ) {
    super(message);
    (this.message = message),
      (this.errorCode = errorCode),
      (this.statusCode = statusCode),
      (this.errorCode = errors);
  }
}


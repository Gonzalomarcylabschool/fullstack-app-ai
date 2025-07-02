const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');

// Best practices middleware for Express
function applyMiddleware(app) {
  // Security HTTP headers
  app.use(helmet());

  // Enable CORS (customize origin as needed)
  app.use(cors());

  // Logging
  app.use(morgan('dev'));

  // Gzip compression
  app.use(compression());

  // JSON body parsing (built-in to Express)
  app.use(require('express').json());

  // Error handler (should be last)
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  });
}

module.exports = applyMiddleware; 
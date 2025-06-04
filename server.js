const express = require('express');
const connectDB = require('./config/db.js');
const chapterRoutes = require('./routes/chapter.routes.js');
const limiter = require('./middlewares/rateLimiter.js');
const errorHandler = require('./middlewares/errorHandler.js');
const config = require('./config/config.js');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(limiter);//applies rate-limiting to every request, ensuring no IP exceeds 30 requests per minute.

// Routes
app.use('/api/v1/chapters', chapterRoutes);

// Error handling
app.use(errorHandler);

// Start server
const PORT = config.port;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
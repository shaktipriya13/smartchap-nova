const config = require('../config/config');

const isAdmin = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token !== `Bearer ${config.adminToken}`) {
        return res.status(403).json({ error: 'Unauthorized: Admin access required' });
    }
    next();
};

module.exports = isAdmin;
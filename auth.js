const jwt = require('jsonwebtoken');
const SECRET_KEY = "your-secret-key"; 

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: "Token missing" });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: "Token invalid" });

        req.user = user;
        next(); 
    });
}

module.exports = verifyToken;

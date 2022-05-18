const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = async (req, res, next) =>{

    const token = req.header('x-auth-token');

    if(!token){
        res.send({
            status: false,
            statusCode: 403,
            message: "A token is require"
        });
    }
    try {
        const user = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = user.id;
        next()
        
    } catch (error) {
        res.send({
            status: false,
            statusCode: 401,
            message: "Invalid token "
        })
    }
}

module.exports = verifyToken;
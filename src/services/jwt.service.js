const jwt = require('jsonwebtoken');
const secretKey = '12123123';
const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

const jwtService = {
    createToken: (data) => {
        const token = jwt.sign({ ...data}, secretKey, jwtConfig);
        return token;
    },
    validateToken: (token) => {
        if(!token) {
            throw new Error('F');
        }
        try {
            const data = jwt.verify(token, secretKey);
            return data;
        } catch(e){
            throw new Error('F2');
        }
    }
}

module.exports = jwtService;
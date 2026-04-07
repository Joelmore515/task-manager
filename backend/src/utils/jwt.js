
const jwt = require('jsonwebtoken');

// 
const generarToken = (user) => {
    return jwt.sign(
        {
            id: user._id, // payload del token, en este caso el id del usuario
        },
        "secreto", // clave secreta 
        {
            expiresIn: "1h", // duracion del token 
        }
    )
}

module.exports = generarToken;
const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {

    // obtener el token del header 
    const token = req.header('Authorization');
    
    if (!token){
        return res.status(401).json(
            {message: 'Acceso denegado'});
    }

    try{
        // verificar token 
        const decoded = jwt.verify(token, "secreto");
        req.user = decoded; // guardamos info del usuario 
        next(); // continuar con la siguiente función del middleware
    } catch (error) {
        return res.status(401).json(
            {message: 'Token inválido'});

    }

};
module.exports = verificarToken; 
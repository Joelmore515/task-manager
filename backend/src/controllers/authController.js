const bcrypt = require('bcrypt');
const {User} = require('../models');
const generarToken = require('../utils/jwt');

// Registro
exports.register = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        // encriptamos la contraseña 
        const hash = await bcrypt.hash(password, 10);
        // crear al usuario 
        const user = await User.create({
            username,
            email,
            password: hash
        });
       
        res.json({user});
    } catch (error) {
        res.status(500).json({error:error.message});

    }
};

// login 
exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});

        if (!user){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        
        // validamos la contraseña
        const valid = await bcrypt.compare(password, user.password);
        if (!valid){
            return res.status(401).json({message: 'Contraseña incorrecta'});
        }

        // generar token 
        const token = generarToken(user);
        res.json({token});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}
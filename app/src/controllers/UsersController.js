require('dotenv').config();

const jwt = require('jsonwebtoken');



const connection = require("../database/connection");



async function findByEmailAndPassword(email, password) {
    const user = await connection('users')
    .where({email:email,password:password})
    .select('*')
    .first();

    return user;
};



module.exports = {
    async login(request,response){
        const email = request.body.email;
        const password = request.body.password;

        try {
            const user = await findByEmailAndPassword(email,password);
            if(user){
                const token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
                return response.json({ accesToken: token });
            }
            else{
                return response.status(404);
            }
    
        } catch (error) {
            console.log(error);
            return response.status(403);
        }
        


    },
    findByEmailAndPassword,

}
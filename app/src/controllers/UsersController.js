const connection = require("../database/connection");

module.exports = {
    async findByEmailAndPassword(email, password) {
        const user = await connection('users')
        .where({email:email,password:password})
        .select('*')
        .first();

        return user;
    },

}
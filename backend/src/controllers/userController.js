const connection = require('../database/connection');

module.exports = {
    async list(request, response){
        const users = await connection('users')
        .join('departments', 'departmentId', 'userDepartment')
        .select(['users.*', 'departmentName']);
        return response.json(users);
    },

    async creat(request, response){
        const {userFullName, userEmail, userDepartment} = request.body;
    //console.log(userFullName, userEmail, userDepartment);
    const [userId] = await connection('users').insert({
        userFullName,
        userEmail,
        userDepartment
    });

    return response.json();
    },
};
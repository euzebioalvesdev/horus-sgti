const connection = require('../database/connection');

module.exports = {
    async list(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('departments').count();

        const departments = await connection('departments')
        .limit(5)
        .offset((page - 1) * 5)
        .select('*');

        response.header('X-Total-Count', count['count(*)']);
        return response.json(departments);
    },

    async creat(request, response){
        const {departmentName} = request.body;
    
    const [departmentId] = await connection('departments').insert({
        departmentName
    });

    return response.json(departmentId);
    },

    async remove(request, response){
        const { departmentId } = request.params;

        await connection('departments').where('departmentId', departmentId).delete();

        return response.status(204).send();
    },
};
const coneccao = require('./connection')

const getAll = async () => {
    const [select] = await db.execute('select * from cliente')
    return select
}

module.exports = {
    getAll
}

const usersDB = []
let id = 1

//* {
//* id:1,
//* first_name = 'Alejo',
//* last_name = 'Nar',
//* email: 'alejonar@academlo.com',
//* password: 'pass123',
//* birthday: '09/06/2000'
//* }

const findAllUsers = () => {
    return usersDB
}
const findUserById = (id) => {
    const filteredUser = usersDB.find(item => item.id == id)
    return filteredUser
}

const createNewUser = (obj) => {
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    usersDB.push(newUser)
    return newUser
} 

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser
}
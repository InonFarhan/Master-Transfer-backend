const Cryptr = require('cryptr')
const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')
const cryptr = new Cryptr(process.env.SECRET1 || 'Secret-Puk-1234')

module.exports = {
    signup,
    login,
    getLoginToken,
    validateToken
}

async function login(username, password) {
    logger.debug(`auth.service - login with username: ${username}`)

    const user = await userService.getByUsername(username)
    if (!user) return Promise.reject('Invalid username or password')

    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid username or password')

    delete user.password
    user._id = user._id.toString()
    return user
}

async function signup(user) {
    const { username, password } = user
    const saltRounds = 10

    logger.debug(`auth.service - signup with username: ${username}`)
    if (!username || !password) return Promise.reject('Missing required signup information')

    const userExist = await userService.getByUsername(username)
    if (userExist) return Promise.reject(`Username already taken ${username}`)

    const hash = await bcrypt.hash(password, saltRounds)
    user.password = hash
    return userService.add(user)
}

function getLoginToken(user) {
    const userInfo = { _id: user._id, username: user.username }
    return cryptr.encrypt(JSON.stringify(userInfo))
}

function validateToken(loginToken) {
    try {
        // logger.debug('GOT:', loginToken)
        const json = cryptr.decrypt(loginToken)
        const loggedinUser = JSON.parse(json)
        return loggedinUser

    } catch (err) {
        console.log('work');
        console.log('Invalid login token')
    }
    return null
}
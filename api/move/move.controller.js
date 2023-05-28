const logger = require('../../services/logger.service')
const moveService = require('./move.service.js')

module.exports = {
    getMoves,
    updateMove,
    addMove
}

async function getMoves(req, res) {
    try {
        const filterBy = {
            loggedInUser: req.query?.loggedInUser || '',
            to: req.query?.to || '',
            contact: req.query?.contact || '',
            status: req.query?.status || ''
        }
        const users = await moveService.query(filterBy)
        res.send(users)
    } catch (err) {
        logger.error('Failed to get users', err)
        res.status(500).send({ err: 'Failed to get users' })
    }
}

async function addMove(req, res) {
    try {
        const move = req.body
        const savedMove = await moveService.add(move)
        res.send(savedMove)
        // res.json(savedMove)
    } catch (err) {
        logger.error('Failed to signup ' + err)
        res.status(500).send({ err: 'Failed to signup' })
    }
}

async function updateMove(req, res) {
    try {
        const move = req.body
        const savedMove = await moveService.update(move)
        res.send(savedMove)
    } catch (err) {
        logger.error('Failed to update user', err)
        res.status(500).send({ err: 'Failed to update user' })
    }
}
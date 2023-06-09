const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const { ObjectId } = require('mongodb')

module.exports = {
    query,
    add,
    update
}

async function query(filterBy, sort = { by: 'at' }) {
    const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('move')
        let moves = await collection.find(criteria).sort({ [sort.by]: 1 }).toArray()
        return moves
    } catch (err) {
        logger.error('cannot find users', err)
        throw err
    }
}

async function add(move) {
    try {
        const moveToAdd = {
            fromId: move.fromId,
            toId: move.toId,
            to: move.to,
            at: move.at,
            amount: move.amount,
            title: move.title,
            status: move.status,
            fromNumber: move.fromNumber
        }
        const collection = await dbService.getCollection('move')
        await collection.insertOne(moveToAdd)
        return moveToAdd
    } catch (err) {
        logger.error('cannot add move', err)
        throw err
    }
}

async function update(move) {
    try {
        const moveToSave = {
            fromId: move.fromId,
            toId: move.toId,
            to: move.to,
            at: move.at,
            amount: move.amount,
            title: move.title,
            status: move.status,
            fromNumber: move.fromNumber
        }
        const collection = await dbService.getCollection('move')
        await collection.updateOne({ _id: ObjectId(move._id) }, { $set: moveToSave })
        return move
    } catch (err) {
        logger.error(`cannot update move ${move._id}`, err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}

    if (filterBy.loggedInUser) {
        const userId = filterBy.loggedInUser._id
        criteria.$or = [
            { fromId: { $eq: userId } },
            { toId: { $eq: userId } }
        ]
    }

    if (filterBy.to) criteria.toId = { $eq: filterBy.to._id }

    if (filterBy.contact) {
        const contactId = filterBy.contact._id
        const userId = filterBy.loggedInUser._id

        criteria.$or = [
            {
                $and: [
                    { fromId: contactId },
                    { toId: userId }
                ]
            },
            {
                $and: [
                    { toId: contactId },
                    { fromId: userId }
                ]
            }
        ]
    }

    if (filterBy.status) criteria.status = { $eq: filterBy.status }
    return criteria
}
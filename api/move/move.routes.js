const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getMoves, addMove, updateMove } = require('./move.controller.js')
const router = express.Router()

router.get('/', getMoves)
router.post('/', addMove)
router.put('/:id', requireAuth, updateMove)
module.exports = router
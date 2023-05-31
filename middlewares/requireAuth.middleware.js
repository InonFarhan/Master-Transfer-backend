const logger = require('../services/logger.service')
const config = require('../config')
const asyncLocalStorage = require('../services/als.service')

module.exports = {
  requireAuth
}

function requireAuth(req, res, next) {
  const { loggedinUser } = asyncLocalStorage.getStore()
  // logger.debug('MIDDLEWARE', loggedinUser)

  if (config.isGuestMode && !loggedinUser) {
    req.loggedinUser = { _id: '', fullname: 'Guest' }
    return next()
  }
  if (!loggedinUser) return res.status(401).send('Not Authenticated')
  req.loggedinUser = loggedinUser
  next()
}
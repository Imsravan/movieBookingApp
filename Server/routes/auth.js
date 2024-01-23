const express = require('express')
const { register, login, getMe, getAll, logout, deleteUser, getTickets, updateUser, updateTicketPrice, getTicketPrice } = require('../controllers/authController')

const router = express.Router()

const { protect, authorize } = require('../middleware/auth')

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
router.get('/me', protect, getMe)
router.get('/tickets', protect, getTickets)
router.put('/user/:id', protect, updateUser)
router.get('/user', protect, authorize('admin'), getAll)
router.delete('/user/:id', protect, authorize('admin'), deleteUser)
router.post('/updateTicketPrice', protect, authorize('admin'), updateTicketPrice)
router.get('/getTicketPrice', protect, getTicketPrice)

module.exports = router

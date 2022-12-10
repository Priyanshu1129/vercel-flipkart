import express from 'express'
import { addPaymentGateway , paymentResponse } from '../controllers/payment.js'
import { getProducts, getProductById } from '../controllers/product.js'
import { userSignup , userLogin} from '../controllers/user.js'
const router = express.Router()

router.post('/signup' ,userSignup)
router.post('/login' ,userLogin)

router.get('/products' ,getProducts)
router.get('/product/:id', getProductById)

router.post('/payment', addPaymentGateway)
router.post('/callback', paymentResponse)

export default router
import express from 'express';

import { userSignup,userLogin } from '../controlller/user-controller.js';
import { getProducts, getProductById } from '../controlller/product-controller.js';

import { addPaymentGateway } from '../controlller/payment-contoller.js';
const router = express.Router();


router.post('/signup',userSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/paymeny', addPaymentGateway);

export default router;
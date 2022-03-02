const router = require('express').Router();
const {
  userErrorHandel, serverErrorHandel, signUp, addBill, signIN,
} = require('../controllers');

router.post('/sign-in', signIN);
router.post('/sign-up', signUp);
router.post('/add-bill', addBill);
router.post('/delete-bill', userErrorHandel);

router.use(userErrorHandel);

router.use(serverErrorHandel);

module.exports = router;

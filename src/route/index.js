const router = require('express').Router();
const {
  userErrorHandel, serverErrorHandel, signUp, addBill, signIN, deleteBill,
} = require('../controllers');

router.post('/sign-in', signIN);
router.post('/sign-up', signUp);
router.post('/add-bill', addBill);
router.post('/delete-bill', deleteBill);

router.use(userErrorHandel);

router.use(serverErrorHandel);

module.exports = router;

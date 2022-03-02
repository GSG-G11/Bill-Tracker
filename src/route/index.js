const router = require('express').Router();
const { userErrorHandel, serverErrorHandel, signUp } = require('../controllers');

router.post('/sign-in', userErrorHandel);
router.post('/sign-up', signUp);
router.post('/add-bill', userErrorHandel);
router.post('/delete-bill', userErrorHandel);

router.use(userErrorHandel);

router.use(serverErrorHandel);

module.exports = router;

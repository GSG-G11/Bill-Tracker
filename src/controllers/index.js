const { userErrorHandel, serverErrorHandel } = require('./error');
const { signUp } = require('./sign-up');
const { addBill } = require('./add-bill');
const { signIN } = require('./sign-in');
const { deleteBill } = require('./delete-bill');
const { getBills } = require('./getBills');
const { homeHandel } = require('./home');

module.exports = {
  userErrorHandel, serverErrorHandel, signUp, addBill, signIN, deleteBill, getBills, homeHandel,
};

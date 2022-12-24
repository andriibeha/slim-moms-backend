const express = require('express');
const ctrl = require('../../controllers/users');
const { ctrlWrapper, auth } = require('../../middelwares');

const router = express.Router();

router.patch('/update', auth, ctrlWrapper(ctrl.updateUser));
router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));

module.exports = router;

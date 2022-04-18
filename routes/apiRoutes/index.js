const router = require('express');

const noteRoutes = require ('.noteRoutes')
router.request(noteRoutes);

module.exports = router;
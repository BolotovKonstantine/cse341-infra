const router = require('express').Router();

router.use('/', require('./swagger'))

router.get('/', (req, res) => {
//#swagger.tags=['Hello world']
res.send('Hello world')
});

router.use('/clients', require('./clientRoutes') );
//#swagger.tags=['Clients']
router.use('/organisations', require('./organisationRoutes'));
//#swagger.tags=['Infrastructure description']
module.exports = router;
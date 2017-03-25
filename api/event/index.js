var express = require('express');
var controller = require('./events.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/myEvents/:_id', controller.myEvents);
router.get('/event/:id', controller.show);
router.post('/', controller.create);
router.post('/joinEvent/:eventId', controller.joinEvent)
router.delete('/:id', controller.destroy);
router.get('/event:')


module.exports = router;
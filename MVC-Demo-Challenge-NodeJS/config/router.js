const express = require('express');
const controller = require('../controllers/controller')

const router = express.Router();

router.get('/', controller.list)

router.all('/addArticle', controller.newA)
router.get('/oneArticle/:id', controller.singleArticle)
router.get('/delete/:id', controller.removeArticle)
router.all('/editArticle/:id', controller.updateArticle )


module.exports = router
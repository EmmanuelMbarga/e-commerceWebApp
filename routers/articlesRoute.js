const express=require('express')
const afficherLesarticles = require('../controllers/postControler')
const router=express.Router()

router.route('/acticle').get(afficherLesarticles)
module.exports=router
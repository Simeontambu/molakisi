var express = require('express');
var router = express.Router();

// route for tutor
router.get('/index', (req, res)=>{
    res.render('./devenir_tutors/index');
});
router.get('/auth/devenir_tutors/tutors_postuler', (req, res)=>{
    res.render('./devenir_tutors/tutors_postuler');
});

//End tutors informations 

// index home
router.get('/', (req, res)=>{
    res.render('home');
})
 
router.get('/tutors_devenir', (req, res)=>{
    res.render('tutors_devenir')
})
 
router.get('/trouver_tutors', (req, res)=>{
    res.render('trouver_tutors')
})   

router.get('/tutors_postuler', (req, res)=>{
    res.render('tutors_postuler')
})   

router.get('/profil', (req, res)=>{
    res.render('profil_user')
})

router.get('/submits', (req, res)=>{
    res.render('tutors_postuler')
})



router.get('/trouver_tudors', (req, res)=>{
    res.render('trouver_tutors')
})

router.get('/trouver_tutors/inscription_user', (req, res)=>{
    res.render('inscription_user')
})

router.get('/payement', (req, res)=>{
    res.render('http://www.flexpay.cd/pay/RU5DTEFTU0U=')
})

module.exports = router;


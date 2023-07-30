const mysql = require("mysql2");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const tokens = require('./token');
const load = require('express-fileupload')


const dotenv = require('dotenv');


dotenv.config({ path: './.env' })

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

//open tutor compte
exports.registerTuteur = (req, res) => {
    console.log(req.body);

    var { name, prenom, email, password, passwordconfirm } = req.body;

    db.query('SELECT email FROM tuteur WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('message', {
                message: 'The compte exist'
            });
        } else if (password !== passwordconfirm) {
            return res.render('mrssage', {
                message: 'mot de passe incorrect'
            });
        }
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        db.query('INSERT INTO tuteur SET ?', { name: name, prenom: prenom, email: email, password: hashedPassword }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                console.log(results)
                return res.render('register', {
                    message: 'Compte Succès'
                });
            }
        });
    });

};

//connexion tutor
exports.loginTuteur = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).render('message', {
                message: 'remplir les deux champs SVP!'
            });
        }
        db.query('SELECT * FROM tuteur WHERE email=?', [email], async (_, results) => {

            console.log(results);

            if ((!results) || (!(await bcrypt.compare(password, results[0].password)))) {
                res.status(401).render('message', {
                    message: 'error email or password'
                });
            }
            else {
                const tokens = (tokens) => {
                    return tokens
                }
                tokens();
                res.status(200).redirect('./devenir_tutors/tutors_postuler');
            }
        });

    } catch (error) {
        console.log(error);
    }

};

// submit infos tutor
exports.submits = (req, res) => {

    let nom = req.body.nom;
    let postnom = req.body.postnom;
    let prenom = req.body.prenom;
    let sexe = req.body.sexe;
    let email = req.body.email;
    let phone = req.body.phone;
    let montant = req.body.montant;
    let anneExp = req.body.anneExp;
    let cours = req.body.cours;
    let ecole = req.body.ecole;

    if (req.files) {
        console.log(req.files)
        var file = req.files.file
        var photo = req.files.photo
        var filename = file.name
        var photoname = photo.name

        file.mv('./uploads/cv/' + filename, function (err) {
            if (err) {
                res.send(err)
            }
        })
        photo.mv('./uploads/profil/' + filename, function (err) {
            if (err) {
                res.send(err)
            }
        })
    }
    else {
        return res.status(400).send('No cv were uploaded')
    }


    var file = filename
    var photo = photoname

    db.query('SELECT email FROM candidature WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error)
        }
        if (results.length > 0) {
            return res.send("c'est compte existe")
        }
        db.query('INSERT INTO candidature SET ?', { nom: nom, postnom: postnom, prenom: prenom, sexe: sexe, email: email, phone: phone, montant: montant, file: file, anneExp: anneExp, cours: cours, ecole: ecole, photo: photo }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                console.log(results)
                return res.send('vous etes enregistrer')
            }
        })
    })

}

//End tutor informations

//------------------------------------------------------------------------------------------

//connexion user

//open user compte
exports.registerUser = (req, res) => {
    console.log(req.body);

    var { name, prenom, email, password, passwordconfirm } = req.body;

    db.query('SELECT email FROM user WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('message', {
                message: 'The compte exist'
            });
        } else if (password !== passwordconfirm) {
            return res.render('mrssage', {
                message: 'mot de passe incorrect'
            });
        }
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        db.query('INSERT INTO user SET ?', { name: name, prenom: prenom, email: email, password: hashedPassword }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                console.log(results)
                return res.render('home', {
                    message: 'Compte Succès'
                });
            }
        });
    });

};

//register eleve

exports.register_eleve = (req, res) => {
    console.log(req.body);

    var { nom, prenom, postnom, sexe, naissance, classe, sujet, objectif, adresse, tuters, email, phoneP} = req.body;

    db.query('SELECT email FROM registereleve WHERE email = ?', [email], async (error, results) => {
        if (error) {
            console.log(error)
        }
        if (results.length > 0) {
            return res.send("c'est compte existe")
        }
        db.query('INSERT INTO registereleve SET ?', { nom: nom, prenom: prenom, postnom: postnom, sexe: sexe, naissance: naissance, classe: classe, sujet: sujet, objectif: objectif, adresse: adresse, tuters: tuters, email: email, phoneP: phoneP }, (error, results) => {
            if (error) {
                console.log(error)
            } else {
                return res.redirect('http://www.flexpay.cd/pay/RU5DTEFTU0U=')
            }
        })
    })

}; 

//login user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).render('message', {
                message: 'remplir les deux champs SVP!'
            });
        }
        db.query('SELECT * FROM user WHERE email=?', [email], async (_, results) => {

            console.log(results);

            if ((!results) || (!(await bcrypt.compare(password, results[0].password)))) {
                res.status(401).render('message', {
                    message: 'error email or password'
                });
            }
            else {
                const tokens = (tokens) => {
                    return tokens
                }
                tokens();
                res.status(200).redirect('/profil');
            }
        });

    } catch (error) {
        console.log(error);
    }

};
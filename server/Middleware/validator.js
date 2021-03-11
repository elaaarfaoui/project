
const {check, validationResult} =require ("express-validator")

exports.registreRules= () => 

[ check ("name", "name is required").notEmpty().isString(),
  check ("lastName", "lastName is required").notEmpty().isString(),
  check ("dateBirth", "dateBirth is required").notEmpty(),
  check ("CIN", "CIN is required").notEmpty(),

  check ("email", "email is required").notEmpty(),
  check ("email", "check email again").isEmail(),

  check ("password", "password is required and must be plus 6 caracters").isLength({min: 6, max:20}),
  check ("phone", "phone is required").isLength({min: 8}),
  check ("imageLink", "imageLink is required").notEmpty(),
  check ("instagramLink", "instagramLink is required").notEmpty(),
  check ("personLength", "personLength is required").isLength({min: 3, max:4}),
  check ("personWeight", "personWeight is required").isLength({max:2})

];

exports.loginRules= () => 
    
    [ check ("email", "email is required").notEmpty(),
      check ("email", "check email again").isEmail(),
    
      check ("password", "password must be plus 6 characters").isLength({min: 6, max:20}),
    ];

exports.validation = (req,res,next)=> {

    const errors=validationResult(req)
    console.log(errors)
    if (! errors.isEmpty()) {

        return res.status(400).send({errors:errors.array().map(el=>({msg:el.msg}))})
    };
    next();

};
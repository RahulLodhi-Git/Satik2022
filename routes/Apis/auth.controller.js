const { sign } = require("jsonwebtoken")
const { getUserByUserEmail } = require("./auth.services")

module.exports = {
    login: (req, res) => {
        console.log(req.body)
        getUserByUserEmail(req.body.email, (err, result) => {
            if (err) {
                console.log(err)
            }
            if (!result) {
                req.flash('message', 'Invalid Email & Password');
                return res.status(401).redirect('/admin');
            }
            const isvalidPassword = req.body.password == result.password
            if (isvalidPassword) {
                result.password = undefined;
                console.log('beforeJWT', result)
                const jsontoken = sign({ jwtResult: result }, 'Secret_key_for_encryption')
                let response={
                    success: 1,
                    data: 'Login Successfully',
                    token: jsontoken,
                }
                res.redirect('about', {response, flash: req.flash('message','Login Successfully')});
                
            }
            else {
                return res.json({
                    success: 1,
                    data: 'Invalid Password',
                })
            }
         

        })
    }
}
/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var bcrypt = require('bcrypt');

module.exports = {
  login: async function (req, res) {
    let user = await User.findOne({ where: { email: req.body.email }})
    if (user) {
      //Compare the password
      bcrypt.compare(req.body.password, user.password, function(err, result) {
        console.log(result,req.body.password, user)
        if(result) {
          //password is a match
          return res.json({
                user:user,
                token: jwToken.sign(user)//generate the token and send it in the response
            });
        } else {
          //password is not a match
          return res.forbidden({err: 'Email and password combination do not match'});
        }
      });
    } else {
      return res.status(404).json({ message: 'User not found' })
    }

  },

  'check': function(req, res) {
    //console.log(req.user);
    return res.json(req.user);
  },

  signup: async function (req, res) {
    let user = {
      nick: req.body.nick,
      email: req.body.email,
      password: req.body.password
    }

    await User.create(user)
    return res.status(201).json({ message: 'User registered' })
  },
};


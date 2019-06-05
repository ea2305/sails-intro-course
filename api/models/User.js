/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    nick: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: true
    },
    email: {
      type: 'string',
      required: true,
      allowNull: false,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
  },

  customToJSON: function() {
    // Return a shallow copy of this record with the password and ssn removed.
    return _.omit(this, ['password'])
  },

  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
            console.log(err);
            cb(err);
        } else {
            user.password = hash;
            cb();
        }
    });
  });
}

};


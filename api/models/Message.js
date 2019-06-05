/**
 * Message.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    text: {
      type: 'string',
      required: true,
      allowNull: false
    },
    user_id: {
      type: 'string',
      defaultsTo: '0'
    },
    owner: {
      model: 'room'
    }
  },

};


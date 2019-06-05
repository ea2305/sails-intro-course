/**
 * Information.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    description: {
      type: 'string',
      required: true,
      allowNull: false
    },
    image: {
      type: 'string',
      defaultsTo: 'https://picsum.photos/300/300'
    },
    topic: {
      type: 'string',
      defaultsTo: 'random',
      isIn: ['random', 'magic', 'code', 'food', 'games']
    },
    owner: {
      model: 'room',
      unique: true
    }
  },

};


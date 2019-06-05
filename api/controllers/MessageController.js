/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list: async function (req, res) {
    let room_id = req.params.room_id
    let messages = {}

    // Sala de chat
    let room = await Room.findOne({ id: room_id })
      .populate('messages')
    
    if (room) {
      messages = room.messages
    }

    return res.json(messages)
  },
  
  show: async function (req, res) {
    let room_id = req.params.room_id
    let id = req.params.id
    let message = {}

    // Sala de chat
    let room = await Room.findOne({ id: room_id }).populate('messages')

    if (room) {
      message = room.messages.filter(message => message.id == id)
    }

    return res.json(message)
  },

  store: async function (req, res) {
    // Sala de chat
    let room_id = req.params.room_id

    let data = {
      text: req.body.text,
      user_id: req.body.user_id,
      owner: room_id
    }

    await Message.create(data)

    // notify all clients
    sails.sockets.blast({ room: room_id });

    return res.status(201).json({ message: 'Element stored' })
  },

};


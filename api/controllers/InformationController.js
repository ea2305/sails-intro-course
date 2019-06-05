/**
 * InformationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const _perPage = 10

module.exports = {

  store: async function (req, res) {
    // Sala de chat
    let room_id = req.params.room_id

    let data = {
      description: req.body.description,
      image: req.body.image,
      topic: req.body.topic,
      owner: room_id
    }

    await Information.create(data)
    return res.status(201).json({ message: 'Element stored' })
  },

  destroy: async function (req, res) {
    let room_id = req.params.id
    
    let room = await Information.destroyOne({ id: id })

    return res.json(room)
  }
};


/**
 * StickerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const _perPage = 10

module.exports = {
  
  list: async function (req, res) {

    let page = Math.abs(req.query.page - 1) || 0
    let perPage = req.query.perPage || _perPage

    let stickers = await Sticker
      .find({ limit: perPage, skip: page })
      .populate('rooms')

    return res.json(stickers)
  },

  store: async function (req, res) {
    let data = {
      name: req.body.name,
      image: req.body.image
    }

    await Sticker.create(data)
    return res.status(201).json({ message: 'Element stored' })
  },

  attach: async function (req, res) {
    let room_id = req.params.room_id
    let sticker_id = req.params.sticker_id

    await Room.addToCollection(room_id, 'stickers', sticker_id)
    return res.status(200).json({ message: 'Element linked' })
  }

};


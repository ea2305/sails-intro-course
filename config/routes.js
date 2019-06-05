/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  'GET /home': 'ViewController.home',
  'GET /': 'ViewController.login',
  'GET /signup': 'ViewController.signup',

  // Login representation
  'POST /auth/login': 'AuthController.login',
  'POST /auth/signup': 'AuthController.signup',
  'GET /auth/check': 'AuthController.check',

  'GET /rooms': 'RoomController.list',
  'GET /rooms/:id': 'RoomController.show',
  'POST /rooms': 'RoomController.store',
  'PUT /rooms/:id': 'RoomController.update',
  'DELETE /rooms/:id': 'RoomController.destroy',

  // Information routes
  'POST /rooms/:room_id/informations': 'InformationController.store',

  // Information routes
  'GET /rooms/:room_id/messages': 'MessageController.list',
  'GET /rooms/:room_id/messages/:id': 'MessageController.show',
  'POST /rooms/:room_id/messages': 'MessageController.store',


  // CRUD Stickers
  'GET /stickers': 'StickerController.list',
  'POST /stickers': 'StickerController.store',

  // Information routes
  'GET /rooms/:room_id/stickers': 'StickerController.index',
  'POST /rooms/:room_id/stickers/:sticker_id': 'StickerController.attach',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};

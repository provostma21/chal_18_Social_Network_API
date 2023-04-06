const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
  } = require('../../controllers/userController');

  router.route('/').get(getUsers).post(createUser);
  
   
  router.route('/:userId').get(getOneUser)
  router.route('/:userId').put(updateUser)
  router.route('/:userId').delete(deleteUser);

  router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)
  
  module.exports = router;

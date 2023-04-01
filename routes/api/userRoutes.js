const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
  } = require('../../controllers/userController');
  
  // /api/courses
  router.route('/').get(getUsers).post(createUser);
  
  // /api/courses/:courseId
  router
    .route('/:UserId')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser);
  
  module.exports = router;

// // Get All
// router.get('/', (req, res) => {

// });
// // Get One
// router.get('/:id', (req, res) => {
//     res.send(req.params.id)
// });
// // Create One
// router.post('/', (req, res) => {
//     const user = new user
// });
// // Update one
// router.put('/:id', (req, res) => {
    
// })
// // Delete One
// router.delete('/:id', (req, res) => {
    
// });
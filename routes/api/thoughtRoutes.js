const router = require('express').Router();

const {
    getThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController.js')


router.route('/').get(getThoughts).post(createThought);

router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;



// // Get One
// router.get('/:id', (req, res) => {
//     res.send(req.params.id)
// });
// // Create One
// router.post('/', (req, res) => {
    
// });
// // Update one
// router.put('/:id', (req, res) => {
    
// })
// // Delete One
// router.delete('/:id', (req, res) => {
    
// });
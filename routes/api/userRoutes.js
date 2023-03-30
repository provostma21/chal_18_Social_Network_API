const express = require('express');
const router = express.Router();

// Get All
router.get('/', (req, res) => {

});
// Get One
router.get('/:id', (req, res) => {
    res.send(req.params.id)
});
// Create One
router.post('/', (req, res) => {
    const user = new user
});
// Update one
router.put('/:id', (req, res) => {
    
})
// Delete One
router.delete('/:id', (req, res) => {
    
});
const express = require('express');
const router = express.Router();
const EntryModel = require('../Models/Entry');
const entryController = require('../Controllers/EntryController');

router.post('/api/data',entryController.createEntry)
router.get('/api/fetchAllData',async(req,res)=>{
    try {
        const items=await EntryModel.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({error: 'Error fetching items EntryRoutes'});
    }
})


module.exports = router;
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

router.delete('/api/deleteEntry/:id',async (req,res) => {
    try {
        const {id} = req.params;
        const deleteEntry = await EntryModel.findByIdAndDelete(id);

        if(!deleteEntry)
        {
            return res.status(404).json({
                message:"Entry not found"
            });
        }

        return res.status(200).json({
            message:"Entry Deleted SuccessFully",
        });
    } catch (error) {
        return res.status(500).json({
            message:"error deleting entry" , error
        })
    }
})

module.exports = router;
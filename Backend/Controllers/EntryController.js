const Entry = require('../Models/Entry');
const EntryModel = require('../Models/Entry')

const createEntry = async(req,res)=>{
    try {
        const {amount , description , category} =  req.body;
        const newEntry = new Entry({
            amount,
            description,
            category,
            date : new Date(),
        })
        await newEntry.save();
        res.status(200).json({message : "Entry Saved" , entry:newEntry})
        
    } catch (error) {
        console.log("Error",error);
        res.status(500).json({
            message:"Failed to Save"
        })
    }
}

module.exports = {
    createEntry
};
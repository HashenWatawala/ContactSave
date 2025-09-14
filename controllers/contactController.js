const asyncHandler = require("express-async-handler");
const getContacts = async (req, res) => {
    res.status(200).json({message:'Hello World!'});
};
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Update a contact for ${req.params.id}`});
});

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({message:`Delete a contact for ${req.params.id}`});
});

const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    res.status(201).json({message:'Create a contact'});
});

module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact
};
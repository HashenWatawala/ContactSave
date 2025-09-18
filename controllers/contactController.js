const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contacts not found");
    }
    res.status(200).json(contact);
});
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
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contact);
});

module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact
};
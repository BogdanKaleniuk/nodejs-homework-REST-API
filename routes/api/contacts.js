const express = require("express");

const router = express.Router();

const {
  listContacts,
  // getContactById,
  // removeContact,
  // addContact,
  // updateContact,
} = require("../../models/contacts");

router.get("/contacts", async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.status(200).json(contacts);
  } catch (error) {}
});

// router.get('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.get('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.put('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router;

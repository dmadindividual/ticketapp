const express = require('express');
const bodyParser = require('body-parser');
const Ticket = require('../manager/app/(models)/Ticket'); // Adjust the path as necessary
const cors = require('cors'); // Import the cors module
const { ObjectId } = require('mongoose').Types; // Import ObjectId from mongoose

const app = express();
const PORT = 7717;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// POST endpoint to create a ticket
app.post('/api/Ticket', async (req, res) => {
  try {
    const TicketData = req.body;

    // Assuming Ticket.create is a function that saves the ticket to the database
    await Ticket.create(TicketData);

    // Sending a success response with status 201
    res.status(201).json({ message: "Ticket Created" });
  } catch (error) {
    console.error("Error creating ticket:", error);
    // Sending an error response with status 500
    res.status(500).json({ message: "Error", error: error.message });
  }
});

// GET endpoint to fetch all tickets
app.get('/api/Ticket', async (req, res) => {
  try {
    const tickets = await Ticket.find(); // Adjust this to your data fetching logic
    res.status(200).json(tickets);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    res.status(500).json({ message: "Error", error: error.message });
  }
});

// DELETE endpoint to delete a ticket by ID
app.delete('/api/Ticket/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the provided id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Ticket ID" });
    }

    const result = await Ticket.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json({ message: "Ticket Deleted" });
  } catch (error) {
    console.error("Error deleting ticket:", error);
    res.status(500).json({ message: "Error", error: error.message });
  }
});


// PUT endpoint to update a ticket by ID
app.put('/api/Ticket/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Check if the provided id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Ticket ID" });
    }

    const result = await Ticket.findByIdAndUpdate(id, updateData, { new: true });

    if (!result) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json({ message: "Ticket Updated", ticket: result });
  } catch (error) {
    console.error("Error updating ticket:", error);
    res.status(500).json({ message: "Error", error: error.message });
  }
});





// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

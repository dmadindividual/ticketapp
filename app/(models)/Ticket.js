// Load environment variables from .env file
require('dotenv').config();

const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
    {
        title: String,
        category: String,
        description: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean
    },
    {
        timestamps: true
    }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;

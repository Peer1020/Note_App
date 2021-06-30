const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    importance: String,
    due: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);

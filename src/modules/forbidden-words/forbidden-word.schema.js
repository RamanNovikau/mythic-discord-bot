const { Schema, model } = require('mongoose');

const forbiddenWordsSchema = new Schema({
    word: {
        type: String,
        required: true
    },
}, { collection: 'forbidden-words', versionKey: false });

const ForbiddenWordModel = model('forbiddenWordsSchema', forbiddenWordsSchema);

module.exports = ForbiddenWordModel;

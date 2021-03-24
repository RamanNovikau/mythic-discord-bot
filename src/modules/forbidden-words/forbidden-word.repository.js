const ForbiddenWord = require('./forbidden-word.schema');


const getAll = async () => {
    const words = await ForbiddenWord.find({});
    return words;
}

module.exports = {
    getAll,
}
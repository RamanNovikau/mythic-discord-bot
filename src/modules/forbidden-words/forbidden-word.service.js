const forbiddenRepository = require('./forbidden-word.repository');

const getAll = async () => {
    const words = await forbiddenRepository.getAll();
    return words;
}

module.exports = {
    getAll,
}
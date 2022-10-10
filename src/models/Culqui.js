const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CulquiSchema = new Schema({
    output: { type: Array }
}, { collection: 'culqui' });

module.exports = Culqui = mongoose.model('culqui', CulquiSchema);
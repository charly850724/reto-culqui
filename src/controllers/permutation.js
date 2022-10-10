const Culqui = require('../models/Culqui');
const functions = require('../utils/functions');

const findWordsInSubstring = (req, res) => {
    let result;
    try {
        const { s, words } = req.body;
        const keys = functions.concatArrayElems(words);

        const output = [];
        keys.forEach((k) => {
            if (s.indexOf(k) > -1) {
                output.push(s.indexOf(k));
            }
        });
        const compare = (a, b) => { return a - b };
        result = output.sort(compare);
        saveOutput(result);
        res.status(200).json(result);
    } catch (error) {
        console.log(`error:  ${error}`);
        error && res.status(500).send(error);
    }
};

const saveOutput = (params) => {
    let culqui = new Culqui({
        output: params
    });
    culqui.save().then((data) => {
        console.log('save data: ', data);
    });
}

module.exports = { findWordsInSubstring };

const mongoose = require('mongoose');

const PirateSchema = mongoose.Schema({
    name: {
        type: 'string',
        required: [true, "Name is required"]
    },
    img: {
        type: 'string',
        required: [true, "Img Url is required"]
    },
    treasures: {
        type: 'Number',
        required: [true, "Number of treasures is required"]
    },
    catch_phrase: {
        type: 'string',
        required: [true, "Catch Phrase is required"]
    },
    position: {
        type: 'string',
        required: [true, "Position is required"]
    },
    peg_leg: { type: 'boolean', required: [true, "should add Peg Leg status"] },
    eye_patch: { type: 'boolean', required: [true, "should add Eye Patch status"] },
    hook_hand: { type: 'boolean', required: [true, "should add Hook Hand status"] }
}, { timestamps: true });

module.exports = mongoose.model("Pirates", PirateSchema);
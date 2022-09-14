const Pirate = require('../models/pirate.model')

function getAllPirates(req, res) {
    Pirate.find({}, null, { sort: { firstName: 1 } }).then((allPirates) => {
        res.json(
            {
                success: true,
                records_count: allPirates.length,
                records: allPirates,
            }
        );
    }).catch(err => {
        res.json({ errorMsg: "Failed to fetch all Pirates" })
    })
}
function getPirate(req, res) {
    const { pirateId } = req.params;
    Pirate.findOne({ _id: pirateId })
        .then((pirate) => res.json(pirate))
        .catch((err) => res.json({ error: "Failed to fetch the pirate" }));
}
function createNewPirate(req, res) {
    Pirate.create(req.body).then((newlyCreatedPirate) => {
        res.json(newlyCreatedPirate);
    }).catch((err) => { res.status(400).json(err) })
}

function updatePirate(req, res) {
    const { pirateId } = req.params;
    Pirate.findOneAndUpdate({ _id: pirateId }, req.body, { new: true }).then((updatedPirate) => {
        res.json(updatedPirate);
    }).catch((err) => { res.json(err); });
}

function deletePirateById(req, res) {
    const { pirateId } = req.params;
    Pirate.deleteOne({ _id: pirateId }).then((result) => {
        res.json(result);
    }).catch((err) => { res.json({ error: true, message: "Failed to delete Pirate" }) })
}

module.exports = {
    getAllPirates,
    createNewPirate,
    updatePirate,
    getPirate,
    deletePirateById,
}
const PirateController = require('../controllers/pirate.controller')

function pirateRoutes(app) {
    app.get('/api/pirates', PirateController.getAllPirates),
        app.post('/api/pirates/new', PirateController.createNewPirate),
        app.get('/api/pirates/:pirateId', PirateController.getPirate),
        app.put('/api/pirates/:pirateId', PirateController.updatePirate),
        app.delete('/api/pirates/:pirateId', PirateController.deletePirateById)
}
module.exports = pirateRoutes
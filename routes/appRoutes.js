'use strict';
module.exports = function(app) {
    var appController = require('../server/appController');
    app.route('/login')
        .get(appController.readUserJson)
        .post(appController.readUserJsonForPost);


}
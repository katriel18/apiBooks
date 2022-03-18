module.exports = function(app) {
    // Install a "/ping" route that returns "pong"
    app.get('/ping', function(req, res) {
        res.send('pong');
    });

    app.get('/new', function(req, res) {
        res.send('I am new user');
    });
    app.get('/message', function(req, res) {
        res.json({
            message: 'I am new user on the Cloudappi!'
        });
    });
}
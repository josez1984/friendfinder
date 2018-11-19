module.exports = function(app) {
    app.post("/api/friends", function(req, res) {      
        var match = app.friends.findMatch(req.body);
        app.friends.list.push(req.body);
        res.json(match);
    });

    app.get("/api/friends", function(req, res) {
        res.json(app.friends.list);
    });
};
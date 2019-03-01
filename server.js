var express = require("express");
var app = express();


app.set("view engine","ejs");
app.set("views","./views");

// setup port
var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(server_port,server_ip_address, function() {
    console.log("Listening on " + server_ip_address + ", server_port " + server_port);
});

app.get("/", function(req, res) {
    res.render("home");
});


const express = require("express");
const cors = require("cors");

app = express();
app.use(cors({ optionsSuccessStatus: 200 }));

app.get("/api/whoami", (req, res) => {
    const ipAddress =
        req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const language = req.headers["accept-language"];
    const userAgent = req.headers["user-agent"];

    res.json({
        ipaddress: ipAddress,
        language: language,
        software: userAgent,
    });
});

app.listen(8000);

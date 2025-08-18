const express = require("express");
const path = require("path");

const app = express();
const PORT = 5000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Route for home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Route for successful payment page
app.get("/successful-payment", (req, res) => {
    res.sendFile(path.join(__dirname, "successful-payment.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Sellaro Landing Page running on http://0.0.0.0:${PORT}`);
});

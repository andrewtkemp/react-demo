const express = require("express");
const app = express();
const PORT = process.env.PORT || 3031;
const artists = require("./routes/api/artists");
// middleware for body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// routes to be used
app.use("/api/artists", artists);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}


app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
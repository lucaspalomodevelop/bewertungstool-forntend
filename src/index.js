let express = require("express");
let app = express();
let path = require("path");
let open = require("open");

app.use("/static", express.static(path.join(__dirname, "..", "site")));

app.get("/", function (req, res) {
  res.redirect("/welcome");
});

app.get("/:name", function (req, res) {
  res.sendFile(
    path.join(__dirname, "..", "site", "html", req.params.name, "index.html")
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  open("http://localhost:3000");
});

let express = require('express')
let app = express();

app.use(express.static('build'))

app.get("/test_server", (req, res) => {
    res.send("Hellow my name is mayank singh chauhan");
})

app.listen("8080", () => {
    console.log("its working");
});
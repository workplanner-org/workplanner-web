const express = require('express')
const router = express.Router();

router.get("/",  (req, res) => {
    res.json({ message: "hello endpoint!" });
    res.end();
});

module.exports = {
    router : router
};

const { Router } = require("express");
const messages = require("../db");

const newRouter = Router();

// ger request
newRouter.get("/", (req, res) => {
    res.render("form", {
        title: "New Message"
    })
});

// post request
newRouter.post("/", (req, res) => {
    const messageText = req.body.message;
    const messageUser = req.body.author;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
})

module.exports = newRouter;

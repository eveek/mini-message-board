const { Router } = require("express");
const messages = require("../db");

const indexRouter = Router();


indexRouter.get("/", (req, res) => {
    res.render("index", { 
        title: "Message Board" ,
        messages: messages
    });
})

indexRouter.get("/:id/message", (req, res) => {
    const message = messages[req.params.id];
    res.render("detail", {
        title: "Message Details",
        message: message
    })
})

module.exports = indexRouter;

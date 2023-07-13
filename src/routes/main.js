const express = require("express");
const {route} = require("express/lib/application");
const routes = express.Router();

routes.get("/", (req, res) => {
    res.render("home");
});
routes.get("/home", (req, res) => {
    res.render("home");
});
routes.get("/projects", (req, res) => {
    res.render("projects");
});
routes.get("/project_1", (req, res) => {
    res.render("project_1");
});
routes.get("/programs", (req, res) => {
    res.render("programs");
});
routes.get("/community", (req, res) => {
    res.render("community");
});
routes.get("/blogs", (req, res) => {
    res.render("blogs");
});
routes.get("/alumni_talks", (req, res) => {
    res.render("alumni_talks");
});
routes.get("/alumni_talks_2", (req, res) => {
    res.render("alumni_talks_2");
});

module.exports = routes;
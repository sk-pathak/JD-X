const express = require("express");
const {route} = require("express/lib/application");
const https = require('https');
const routes = express.Router();

// userinfo
routes.get('/github/userinfo/:user', async function (req, res) {
    const user = req.params.user;
    const options = {
        hostname: 'api.github.com',
        path: '/users/' + user,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: "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"
    }
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
})

// repoinfo
routes.get('/github/repoinfo/:user/:reponame', async function (req, res) {
    const user = req.params.user;
    const reponame = req.params.reponame;
    const options = {
        hostname: 'api.github.com',
        path: '/repos/' + user + '/' + reponame,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: "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"
    }
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
})

// commitinfo
routes.get('/github/commitinfo/:user/:reponame', async function (req, res) {
    const user = req.params.user;
    const reponame = req.params.reponame;
    const options = {
        hostname: 'api.github.com',
        path: '/repos/' + user + '/' + reponame + '/commits',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: "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"
    }
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
})

// repos
routes.get('/github/userinfo/:user/repos', async function (req, res) {
    const user = req.params.user;
    const options = {
        hostname: 'api.github.com',
        path: '/users/' + user + '/repos',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: "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"
    }
    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something went wrong!');
    })
})

// pages
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
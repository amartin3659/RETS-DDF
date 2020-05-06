const express = require('express');
const rets = require('./rets');

const app = express();

app.get('/login', async (req, res) => {
    await rets.login();
    res.send(JSON.stringify({
        message: "Logged in"
    }));
});

app.get('/logout', async (req, res) => {
    await rets.logout();
    res.send(JSON.stringify({
        message: "Logged out"
    }));
});

app.get('/', async (req, res) => {
    await rets.search((err, ret) => {
        if (err) console.log('Error : ', err);
        else res.send(ret);
    }, '*');
});

app.get('/:id', async (req, res) => {
    await rets.search((err, ret) => {
        if (err) console.log('Error : ', err);
        else res.send(ret);
    }, req.params.id);
});

app.get('/:id/:type', async (req, res) => {
    await rets.object((err, ret) => {
        if (err) {
            console.log('Error : ', err);
            return res.status(501).send(JSON.stringify({
                message: "Could not complete"
            }));
        }
        else res.send(ret);
    }, req.params.id, req.params.type);
});

app.listen(3000, () => console.log('Rets app listening on port 3000 ...'));
var { RetsClient, RetsVersion } = require('rets-ddf-client');
 
const client = new RetsClient({
    url: 'https://data.crea.ca/Login.svc/Login',
    username: '',
    password: '',
    version: RetsVersion.CREA_DDF
});

async function login() {
    await client.login();
}

async function search(callback, id) {
    try {
        await client.search({
            format: 'Standard-XML',
            query: `(ID=${id})`,
            searchType: 'Property',
            class: 'Property',
            culture: 'en-CA'
        }).then(result => {
            callback(null, result)
        })
    } catch (err) {
        callback(err, null);
    }
}

async function object(callback, id, type) {
    try {
        await client.getObjects({
            resource: 'Property',
            type: `${type}`,
            contentId: `${id}`,
            objectId: '1',
            withLocation: false
        }).then(result => {
            callback(null, result)
        });
    } catch (err) {
        callback(err, null);
    }
}

async function logout() {
    await client.logout();
}

module.exports = {
    login,
    logout,
    search,
    object
}
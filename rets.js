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

async function object() {
    try {
        const result = await client.getObjects({
            resource: 'Property',
            type: 'Photo',
            contentId: '21738082',
            objectId: '3',
            withLocation: false
        }).then(result => {
            console.log(result);
        });
    } catch (err) {
        console.log(err);
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
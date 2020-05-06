# RETS-DDF
Simple Express app that uses, npm package, rets-ddf-client to get live listings from the CREA DDF feed.

## Endpoints
* GET /login 
    * Logs into the CREA DDF feed
    * Replace your credentials in rets.js
    ```
    const client = new RetsClient({
    url: 'https://data.crea.ca/Login.svc/Login',
    username: '',
    password: '',
    version: RetsVersion.CREA_DDF
    });
* GET /logout
    * Logs out
* GET /
    * Gets all of the active listing IDs
    * This may take a couple minutes to completing finish
* GET /id
    * Gets a specific listing by id
    * Displays in JSON
    * Copy a listing ID from GET /

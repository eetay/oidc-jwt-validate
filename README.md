# oidc-jwt-validate

create a "config.js" file
```javascript
const token = 'ey...' // replace with your token

const jwkUrl = 'https://..../discovery/v2.0/keys' // replace with your jwk URL

module.exports = { token, jwkUrl }
```

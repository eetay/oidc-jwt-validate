# oidc-jwt-validate
This small code gets input of an OIDC token and a jwk keys URL of an Identity Provider who issued the token then validates the OIDC token

1. Create a "config.js" file

```javascript
const token = 'ey...' // replace with your token
const jwkUrl = 'https://..../discovery/v2.0/keys' // replace with your jwk URL
module.exports = { token, jwkUrl }
```

2. Run

```
node index.js
```

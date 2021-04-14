const jwkToPem = require('jwk-to-pem')
const jwt = require('jsonwebtoken')
const fetch = require('node-fetch')

const token = 'ey...'

const jwkUrl = 'https://login.microsoftonline.com/.../discovery/v2.0/keys'

function validate(keys, token) {
	const tokenHeaderB64 = token.split('.')[0]
	const tokenHeader = Buffer.from(tokenHeaderB64, 'base64').toString()
	const kid = JSON.parse(tokenHeader).kid
	console.log("TOKEN HEADER INFO:", tokenHeader)
	jwk = keys.filter(x=>x.kid == kid)[0]
	const pem = jwkToPem(jwk)
	console.log(pem)
	var decoded = jwt.verify(token, pem, { algorithms: [ 'RS256' ] });
	console.log(decoded)
}


fetch(jwkUrl).then(response => response.json()).then(keys=>validate(keys.keys, token)).catch(console.log)

var ethUil = require('ethereumjs-util')
var bitcore = require('bitcore')
var pk = Buffer('4181986fe797bd2ad37c4a3f1140b757eac5e4497aab845413d546eaa4c9d9fe', 'hex')
var wif = "cNVuxxDv4QZX14DGcd179KCKUR1iAxmbHiRBfspxjjFNfQtknpGH"
var address = new bitcore.PrivateKey(wif).toAddress()
console.log('0x'+ethUil.privateToAddress(pk).toString('hex'))
console.log(address.toString())

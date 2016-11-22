'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var responseEther = require('./responseEther');
var responseBit = require('./responseBit');
var wait = require('wait.for');
var app = express();

Array.prototype.contains = function(str){
	if(str === undefined) return false
	for (var i=0;i<this.lenght;i++) if(str.indexOf(this[i]) > -1) return true;
	return false;
};

app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/api.mew',function(req,res){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Content-Type','application/json');
	res.header('Access-Control-Allow-Methods','POST,GET,OPTIONS,PUT,DELETE');
	//var refer
	req = req.body;
	console.log(req);
	if ("bitcoin" === req.network) handleRequestBit(req,res);
	else if ("ethereum" === req.network) wait.launchFiber(handleRequestEther,req,res);
	else res.status(404).send()
});

var handleRequestEther = function(req,res){
	if ("balance" in req) res.write(responseEther.getBalance(req['balance']));
	else if ("rawtx" in req) res.write(responseEther.sendRawTransaction(req['rawtx'])); 
	else if ("txdata" in req) res.write(responseEther.getTransaction(req['txdata']));
	else if ("extimatedGas" in req) res.write(responseEther.getEstimatedGas(req['estimatedGas']));
	else if ("ethCall" in req) res.write(responseEther.getEthCall(req['estimatedGas']));
	else if ("currentBlock" in req) res.write(responseEther.getCurrentBlock());
	else res.status(400).send();
	res.end();
	}


var handleRequestBit = function(req,res){
        var callback = function(err,result) {
		if(err) res.write(JSON.stringify(err));
                else res.write(JSON.stringify(result));
                res.end();
	}
	//console.log(req,res.header);
	if("balance" in req ) responseBit.getreceivedbyaddress(req['balance'],function(err,result){callback(err,result)});
	
	else if("allBalance" in req) responseBit.listunspent(0,99999999,new Array(req['allBalance']),function(err,result){
		//console.log(result);
		if (err) res.write(JSON.stringify(err));
		else {
			var amount = 0;
			var utxo ;
			var re = result.result;
			for(var i=0; i<re.length; i++){
				amount += re[i].amount;
				}
			res.write(JSON.stringify({'result':{'balance':amount},'error':'null','id':result.id}));
		}
		res.end();
	});

	else if("utxo" in req) responseBit.listunspent(0,99999999,new Array(req['utxo']),function(err,result){callback(err,result)});
	
	else if("rawtx" in req) reponseBit.sendrawtransaction(req['rawtx'],function(err,result){callback(err,result)});
	
	else if("countblock" in req) responseBit.getblockcount(function(err,result){callback(err,result)});
	
	else res.status(400).send();
}

exports.app = app

'use strict';
var hyperSendTxCtrl = function($scope) {
 var wif= 'cNVuxxDv4QZX14DGcd179KCKUR1iAxmbHiRBfspxjjFNfQtknpGH';
 var pk= Buffer('4181986fe797bd2ad37c4a3f1140b757eac5e4497aab845413d546eaa4c9d9fe', 'hex');
  var BitAddress = new bitcore.PrivateKey(wif).toAddress().toString();
  var EtherAddress = '0x' + ethUil.privateToAddress(pk).toString('hex');
/*
	$scope.sendTxModal = new Modal(document.getElementById('sendTransaction'));
	$scope.showAdvance = false;
	$scope.showRaw = false;
	$scope.Validator = Validator;
	if ($scope.tx.sendmodel == 0){
		 $scope.tx = {
		 gasLimit: globalFuncs.urlGet('gaslimit') == null ? globalFuncs.defaultTxGasLimit : globalFuncs.urlGet('gaslimit'),
                data: globalFuncs.urlGet('data') == null ? "" : globalFuncs.urlGet('data'),
                to: globalFuncs.urlGet('to') == null ? "" : globalFuncs.urlGet('to'),
                unit: "ether",
                value: globalFuncs.urlGet('value') == null ? "" : globalFuncs.urlGet('value'),
                nonce: null,
                gasPrice: null,
                donate: false,
                sendMode: globalFuncs.urlGet('sendMode') == null ? 0 : globalFuncs.urlGet('value')
		}
	}else {
		 $scope.tx = {
                data: globalFuncs.urlGet('data') == null ? "" : globalFuncs.urlGet('data'),
                to: globalFuncs.urlGet('to') == null ? "" : globalFuncs.urlGet('to'),
                unit: "satoshi",
                value: globalFuncs.urlGet('value') == null ? "" : globalFuncs.urlGet('value')
        	}
	}
*/	
}
module.exports = hyperSendTxCtrl;

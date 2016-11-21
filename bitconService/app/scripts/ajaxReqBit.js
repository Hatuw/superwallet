ajaxReq = function(){}
ajaxReq.http = null;
ajaxReq.postSerializer  = null;
ajaxReq.SERVERURL = "https://172.22.28.143/api.wow";
ajaxReq.pendingPosts = [];

ajaxReq.config = {
	headers: {
		'Content-Type': 'application/x-www-form-urlencodied; charset=UTF-8'
	}
};

ajaxReq.getBlockCount = function(callback) {
	this.post({
		countblock: '',	
	},callback)
}

ajaxReq.getBalance= function(addr,callback) {
	this.post({
		balance: addr
	},callback);
}

ajaxReq.getUtxo = function(addr) {
	this.post({
		utxo: addr
	},callback);
}

ajaxReq.sendRawtx = function(txobj) {
	this.post({
		rawtx: txobj
	},callback)
}

ajaxReq.post = function(data,callback) {
	this.pendPosts.push({
		data: data,
		callback: callback
	})
	if (this.pendPosts.length == 1) this.queuePost();
}

ajaxReq.queuePost = function() {
	var data = this.pendingPosts[0].data;
	var callback = this.pendingPosts[0].callback;
	this.http.post(this.SERVERURL,this.postSerializer(data),this.config).then(function(data){
		callback(data.data)
		ajaxReq.pendingPosts.splice(0,1)
		if (ajaxReq.pendingPosts.length > 0) this.queuePost
	});
}






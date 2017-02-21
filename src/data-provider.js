'use strict'

const Promise = require("bluebird");
const http = Promise.promisifyAll(require("http"));

class Provider{
	configure(api_string){
		if(!api_string || typeof api_string != "string")
			throw new Error("Invalid connection string.");
		this._connstr = api_string;
		return this;
	}

	get(){
		return new Promise((resolve, reject) => {
			let req = http.request(this._connstr, (response) => {
				let str = "";
			  	response.on('data', function (chunk) {
			    	str += chunk;
  				});
				response.on('end', function () {
					resolve(JSON.parse(str));
				});
			});
			req.on('error', (e) => {
				reject(e);
			});
			req.end();
		});
	}	
}

module.exports = Provider;
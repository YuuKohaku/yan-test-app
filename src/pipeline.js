'use strict'

const Provider = require("./data-provider.js");
const Formatter = require("./html-formatter.js");

let provider  = new Provider();
let formatter = new Formatter();

provider
	.configure("http://yitv.herokuapp.com/")
	.get()
	.then(res => formatter.format(res))
	.then(res => console.log(res));
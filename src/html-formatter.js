'use strict'

const pug = require('pug');
const precompiled = pug.compileFile('./tpl/table-template.pug');

class Formatter{
	constructor(){
	}

	format(data){
		return pug.renderFile('./tpl/table-template.pug', {
  			data: data.body
		});
	}
}

module.exports = Formatter;
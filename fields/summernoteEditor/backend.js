module.exports = function(broccoli){
	var utils79 = require('utils79');

	/**
	 * データをバインドする
	 */
	this.bind = function( fieldData, mode, mod, callback ){
		var rtn = '';
		if( typeof(fieldData)===typeof({}) ){
			if( typeof(fieldData.src)===typeof('') ){
				rtn += fieldData.src;
			}
		}

		callback(rtn);
		return;
	}

}

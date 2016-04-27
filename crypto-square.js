// create our crypto class
//it takes a sting as an argument
var Crypto = function(text){
	//store the string for use elsewhere
	this.text = text;

};

Cyrpto.prototype.normalizePlaintext = function() {

	str = "s#$%^&plunk";
	var replace = str.replace("#$%^&plunk").toLowerCase();
	return replace;
	//return this.text;

};

Crypto.prototype.size = function() {
	var length = this.message.length;
	return Math.ceil(Math.sqrt(length));
};
Crypto.prototype.plaintextSegments = function() {
	var segments = [];
	npt = this.normalizePlaintext();
	size = this.size();

	//extract segments from the normalized plain text

	for (var i = 0; i < npt.length; i += 1) {
		segments.push(npt.substr(i, size));
	}
	
	
	//return an array of strings representing
	// segments of the normalized plain text

	return segments;
}

Crypto.prototype.ciphertext = function() {
	var ct = "";
		size = this.size(), //the number of colums
		segs = this.plaintextSegments(); //the row


	//loop through the columns
	for (var i = 0; i < size; i += 1) {
		//loop through the rows
		for (var j = 0; j < segs.length; j += 1) {
			ct += segs[j].charAT(i);
		}

	}

	//return a string that represents the cipher text, i.e. the encoded message
	return ct;
};

module.exports = Crypto;


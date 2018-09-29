module.exports = function check(str, bracketsConfig) {
	bracketsConfig.forEach((a, i) => {
		while (str.includes(bracketsConfig[i][0] + bracketsConfig[i][1])) {
			str = str.slice(0, str.indexOf(bracketsConfig[i][0] + bracketsConfig[i][1]))
			+ str.slice(str.indexOf(bracketsConfig[i][0] + bracketsConfig[i][1]) + 2);	
		}		
	})
 	if (str.length > 0) {
 		return false;
 	} else {
 		return true;
 	}
}












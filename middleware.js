

var middleware = {
	requireAuthentication: function(req,res,next){
		console.log('private method hit');
		next();
	},
	logger: function(req,res,next){
		console.log('Request method: '+req.method+ ' on '+ new Date().toString());
		next();

	}
};

module.exports = middleware;
const
  jwt = require("jsonwebtoken");

function validate_id(req, res, next) {
    let { id } = req.params;
    return Number(id) ? next() : res.status(400).end("ID must be an integer.");
}

function authenticate(req, res, next) {
  let { authorization } = req.headers;
  if (!authorization) 
    return res.status(403).end("No token provided");
  
  let token = authorization.split(' ')[0];
  jwt.verify(token, "s3GNa+Ur3", function(err, decodedToken) {
    if (err)
      return res.status(401).end("authentication failed");
    
    req.decoded = decodedToken;
    next();

  });
}


module.exports = { validate_id, authenticate };

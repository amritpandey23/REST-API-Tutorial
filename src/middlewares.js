const
  { ObjectId } = require("mongodb");

function convert_object_id(req, res, next) {
    let { id } = req.params;
    req.object_id = new ObjectId(id);
    next();
}

module.exports = { convert_object_id };

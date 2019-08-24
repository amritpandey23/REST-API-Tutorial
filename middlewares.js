function validate_id(req, res, next) {
    let { id } = req.params;
    return Number(id) ? next() : res.status(400).end("ID must be an integer.");
}

module.exports = { validate_id };

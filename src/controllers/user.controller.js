const User = require('../models/user');

const createUser = async (req, res) => {
    const user = await new User(req.body)
    user.save().then(() => {
        res.json(user).status(200);
    }).catch((e) => {
        res.status(e.response ? e.response.status : 500);
        res.send(e.response ? e.response.data : e.message);
    })
}

module.exports = {createUser};
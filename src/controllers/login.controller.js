const loginService = require('../services/login.service');


const loginController = {
    login: async (req, res) => {
        /* console.log(req.body); */
        /* res.send(res.body); */
        const data = loginService.validateBody(req.body);
        const result = await loginService.login(data);
        res.status(200).json(result);
    }
}

module.exports = loginController;
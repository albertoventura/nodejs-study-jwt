const loginService = require('../services/login.service');

const loginController = {
    login: async (req, res) => {
        const data = loginService.validateBody();
        const result = await loginService.login(data);
        res.status(200).json(result);
    }
}
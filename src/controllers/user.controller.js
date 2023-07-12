const userController = {
    getAll: async (req, res ) =>{
        try {
            
            return res.status(200).send('get all users');
        } catch(e) {
            return res.status(400).send(e);
        }
    }
}

module.exports = userController;
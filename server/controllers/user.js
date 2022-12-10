import user from '../model/user.js'

export const userSignup = async (req, res) => {
    try {
        let exist = await user.findOne({ username: req.body.username })
        if (exist) {
            return res.status(401).json({
                message: 'Username already exist..'
            })}
            const newUser = new user(req.body)
            newUser.save()
            
            res.status(200).json({
                message: req.body
            })
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const userLogin = async (req, res) => {
    try {
        let exist = await user.findOne({ username: req.body.username, password: req.body.password });
        if(exist) {
            return res.status(200).json({data: exist})
        } else {
            return res.status(401).json('Invalid Login');
        }

    } catch(error) {
         res.status(500).json({message: error.message});        
    }
}
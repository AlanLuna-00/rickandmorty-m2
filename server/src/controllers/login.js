import users from "../utils/users.js";


const login = (req, res) => {
    const { email, password } = req.query;
    console.log(email, password)
    const user = users.find(user => user.email === email && user.password === password);
    let codeStatus = user ? 200 : 401;
    res.status(codeStatus).json({
        access: user,
        message: user ? 'User logged in' : 'User not found',
    });
};


export default login;
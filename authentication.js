import jwt from "jsonwebtoken"

export const auth = (req, res, next) => {
    const token = req.body.token;
    if (!token) return res.status(401).send('Access denied.');

    jwt.verify(token, "dajsf9u4o5ijh43j", (err, user) => {
        if (err) return res.status(403).send('Invalid token.');
        req.user = user;
        next();
    });
};

export const createToken = (data, secret_key) => {
    const { email } = data;
    const token = jwt.sign({ email }, secret_key);
    return token;
};
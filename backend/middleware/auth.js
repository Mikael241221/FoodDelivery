import jwt from 'jsonwebtoken';

const authMiddleware = async(req, res, next) => {
const {token} = req.headers;
if(!token){
    return res.json({success:false,message:"No token, authorization denied"});
}  
 try {
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.user = token_decoded.id;
    next();
 }catch (error) {
    console.log(error);
    return res.json({success:false,message:"Invalid token"});
}
}

export default authMiddleware;
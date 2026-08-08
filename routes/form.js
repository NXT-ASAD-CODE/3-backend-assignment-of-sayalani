const express = require("express");
const { login, createUser } = require("../controller/auth");
const router = express.Router();
router.post("/login",async(req,res)=>{
try {
    const resp = await login(req.body.email,req.body.password);
    res.send(resp)
} catch (error) {
    res.send(error)
}
})
router.post("/signup",async(req,res)=>{
try {
    await createUser(req.body.email,req.body.password);
    res.send("users created");
} catch (error) {
    res.send(error);
}
})
module.exports = router;
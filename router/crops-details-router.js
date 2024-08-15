const express = require("express");
const cropsDetails = require("../controllers/crops-details");


const validate = require("../middlewares/validate-middleware");
const { signupSchema, loginSchema } = require("../validator/validator");
const { register, login, user, updateSelectedCrops } = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/auth-middleware");


const router = express.Router();

router.route("/crops").get(cropsDetails);

router.route("/register").post(validate(signupSchema),register)
router.route("/login").post(validate(loginSchema),login)
router.route("/user").get(authMiddleware, user)
router.route("/user/selected-crops").post(authMiddleware, updateSelectedCrops);


module.exports = router;

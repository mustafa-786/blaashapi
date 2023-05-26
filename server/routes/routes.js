const express  = require("express");
const { login } = require("../controller/authcontroller");
const fecthVideos = require("../controller/videocontroller");
const router = express.Router();

router.route("/google-login").post(login);
router.route('/youtube-videos').get(fecthVideos);

module.exports = router;
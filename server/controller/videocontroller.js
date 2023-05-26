const { default: axios } = require("axios");

const fetchVideos = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const result = await axios.get(`${process.env.CHANNEL_ID}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const channelId = result.data.items[0].id;

    const api = `${process.env.YOUTUBE_VIDEO_API}=${channelId}`;

    const response = await axios.get(api, {
      headers: { Authorization: `Bearer ${token}` },
    });
    res.status(200).json({ code: 200, status: "success", data: response.data });
  } catch (error) {
    res.status(401).json({
      code: 401,
      status: "error",
      message: "Invalid or expired token",
    });
  }
};

module.exports = fetchVideos;

const login = async (req, res) => {
  try {
    const { tokenId } = req.body;
    res.status(200).json({ code: 200, status: "success", token: tokenId });
  } catch (e) {
    res
      .status(500)
      .json({ code: 500, status: "fail", message: "Google login failed" });
  }
};

module.exports = { login };

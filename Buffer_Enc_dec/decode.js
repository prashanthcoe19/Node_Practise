let decode = {
  dec(data) {
    const decoded = Buffer.from(data, "base64").toString("utf-8");
    return decoded;
  },
};

module.exports = decode;

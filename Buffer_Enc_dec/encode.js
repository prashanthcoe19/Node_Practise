let encode = {
  enc(data) {
    const encoded = Buffer.from(data).toString("base64");
    return encoded;
  },
};

module.exports = encode;

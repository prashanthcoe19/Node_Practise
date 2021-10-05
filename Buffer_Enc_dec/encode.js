let encode = {
  enc(data) {
    let encoded = Buffer.from(data).toString("base64");
    return encoded;
  },
};

module.exports = encode;

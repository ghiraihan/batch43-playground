const history = require("../model/history");

function hitungKeliling(req, res) {
  const data = req.body;
  const sisiA = data.sisiA;
  const sisiB = data.sisiB;
  const sisiC = data.sisiC;
  //! error rumus
  const keliling = sisiA + sisiB + sisiC;
  res.status(200).send("Keliling:" + keliling);

  history.push({
    SisiA: sisiA,
    SisiB: sisiB,
    SisiC: sisiC,
    Keliling: keliling,
  });
}

module.exports = hitungKeliling;

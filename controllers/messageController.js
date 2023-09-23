// controllers/messageController.js
const mygroup = require('../models/mygroup');

exports.getAllStudents = (req, res) => {
  const studentList = mygroup.map((student) => `<li>${student.name}</li>`).join('');
  return res.send(`<html><body><ul>${studentList}</ul></body></html>`);
};

exports.getMessage = (req, res) => {
  const id = req.params.id;

  // Xử lý logic cho endpoint /message/<id> khi có id
  const student = mygroup.find((student) => student.id === id);

  if (!student) {
    // Nếu không tìm thấy sinh viên với id tương ứng, trả về "Not valid"
    return res.send('Not valid');
  }

  // Nếu tìm thấy sinh viên, hiển thị thông tin của họ trong HTML
  const htmlResponse = `<html><body><p>${student.name}</p></body></html>`;
  return res.send(htmlResponse);
};

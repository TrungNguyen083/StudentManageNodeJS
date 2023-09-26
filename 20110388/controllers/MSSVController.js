// controllers/MSSVController.js
const mygroup = require('../models/mygroup');

exports.getStudentInfo = (req, res) => {
  const id = req.params.id;
  const student = mygroup.find((student) => student.id === id);

  if (!student) {
    return res.status(404).json({ error: 'not valid' });
  }

  res.json(student);
};

exports.addStudent = (req, res) => {
  const id = req.params.id;
  const newItem = req.body;

  if (!newItem || newItem.id !== id || mygroup.some((student) => student.id === id)) {
    return res.status(400).send('Not valid');
  }

  mygroup.push(newItem);
  res.status(201).json(newItem);
};

// Controller Access Exports.

exports.allAccess = (req, res) => {
  res.status(200).send("Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

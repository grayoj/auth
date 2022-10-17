// Controller Access Exports.

exports.publicAccess = (req, res) => {
  res.status(200).send("Content.");
};

exports.userSection = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminSection = (req, res) => {
  res.status(200).send("Admin Content.");
};

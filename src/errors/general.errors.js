const notAllowedFieldsToUpdateError = (res) => {
  return res.status(500).send("Um ou mais campos iseridos não são editáveis.");
};

module.exports = {
  notAllowedFieldsToUpdateError,
};

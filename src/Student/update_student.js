function updateStudent(req, res, client) {
  const { rollno, newName} = req.body;

  const updateQuery = `
    UPDATE students
    SET s_name = $1
    WHERE rollno = $2
  `;

  const values = [newName, rollno];

  client.query(updateQuery, values, (queryError) => {
    if (queryError) {
      console.log(queryError);
      res.status(500).send("Error while updating student");
      return;
    }

    console.log("Student updated successfully");
    res.status(200).send("Student updated successfully");
  });
}

function main(req, res, client) {
  console.log("update");
  let x = req.body;
  console.log(x);

  client.connect((connectError) => {
    if (connectError) {
      console.log(connectError);
      res.status(500).send("Error while connecting to the database");
      return;
    }

    updateStudent(req, res, client);
  });
}

module.exports = {
  main: main
};

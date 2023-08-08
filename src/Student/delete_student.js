

function deleteStudent(req, res, client) {
    const { rollno } = req.body;
  
    const deleteQuery = `
      DELETE FROM students
      WHERE rollno = $1
    `;
  
    const values = [rollno];
  
    client.query(deleteQuery, values, (queryError) => {
      if (queryError) {
        console.log(queryError);
        res.status(500).send("Error while deleting student");
        return;
      }
  
      console.log("Student deleted successfully");
      res.status(200).send("Student deleted successfully");
    });
  }
  
  function main(req, res, client) {
    console.log("delete");
    let x = req.body;
    console.log(x);
  
    client.connect((connectError) => {
      if (connectError) {
        console.log(connectError);
        res.status(500).send("Error while connecting to the database");
        return;
      }
  
      deleteStudent(req, res, client);
    });
  }

  

module.exports={
    main: main
}
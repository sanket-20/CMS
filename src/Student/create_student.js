// async function main(req, res, client)
// {
//    console.log("insert");
//    let x = req.body;
//    console.log(x);

//    try{
//        await client.connect();

//        const {rollno, s_name, dob, s_address, mobile, gender, email, qualification, hobbies, category}= req.body;

//     //    console.log(rollno);
//         const insertQuery = 
//         `
//         INSERT INTO students (rollno, s_name, dob, s_address, mobile, gender, email, qualification, hobbies, category)
//         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
//         `;

//         const values = [rollno, s_name, dob, s_address, mobile, gender, email, qualification, hobbies, category];

//         await client.query(insertQuery, values);
//         console.log("Data inserted successfully");

//        res.status(200).send("Data inserted successfully");

//    }
//    catch(err){
//         console.log(err);
//         res.status(500).send("Error while inserting");
//    }
// }


function main(req, res, client) {
    // console.log("insert");
    // let x = req.body;
    // console.log(x);
  
    client.connect((err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error while connecting to the database");
        return;
      }
  
      const { rollno, s_name, dob, s_address, mobile, gender, email, qualification, hobbies, category } = req.body;
  
      const insertQuery = `
        INSERT INTO students (rollno, s_name, dob, s_address, mobile, gender, email, qualification, hobbies, category)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      `;
  
      const values = [rollno, s_name, dob, s_address, mobile, gender, email, qualification, hobbies, category];
  
      client.query(insertQuery, values, (err) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error while inserting data");
          return;
        }
  
        console.log("Data inserted successfully");
        res.status(200).send("Data inserted successfully");
      });
    });
  }
  

module.exports={
    main:main
}


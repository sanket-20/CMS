function main(req, res, client)
{
    client.connect((err)=>{
        if(err){
            console.log(err);
        }
        else{
            
            client.query(`select * from students where rollno = `, (err,data)=>{
                
            })
        }
    })
    res.send("read all students");
}

module.exports={
    main:main
}
function main(req, res, client)
{
    client.connect((err)=>{
        if(err){
            console.log(err);
        }
        else{
            client.query("select * from students", (err,data)=>{
                console.log(data.rows);
            })
        }
    })
    res.send("Read Students List Successfully");
}

module.exports={
    main:main
}
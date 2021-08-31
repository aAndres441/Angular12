const express = require('express');
const cors = require('cors');
const app = express();
const PORT =3000;

app.use(cors());

app.use(express.json());

app.get('/',(_req: any,_res: any) => {
    _res.send({data:'Well well, Hello My World view!!!!'});
});

app.listen(PORT,()=>{
    console.log('Listo!!listening at http://localhost:${PORT}');
});


/* POST create User lo saque desde mongo */
const { MongoClient } = require("mongodb");
const uri = "mongodb://myUserAdmin:myUserAdmin@localhost:27017";

app.post('/users/create', async(req:any, res:any) => {
  const user = req.body;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db('mydb').collection('users').insertOne({
    id: parseInt(user.id),
    fname: user.fname,
    lname: user.lname,
    username: user.username,
    email: user.email,
    avatar: user.avatar
  });
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message": "User with ID = "+user.id+" is created",
    "user": user
  });
})
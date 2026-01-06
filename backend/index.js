const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000
const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://next_ecommerce:nxZaRWEbvbv3eKvZ@cluster0.knekqnq.mongodb.net/?appName=Cluster0";


app.use(cors());

//db_name:next_ecommerce pass: nxZaRWEbvbv3eKvZ


   



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {

    const nextproductcollection=client.db('next_ecommercedb').collection('womanproductcollection');

    const nextproductcollectionformen = client.db('next_ecommercedb').collection('menproductcollection');
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    app.get('/womanproduct',async(req,res)=>{
         const result=await nextproductcollection.find().toArray();
          res.send(result);
 
    
})


 app.get("/womanproduct/brand/:brandName", async (req, res) => {
  try {
    const brand = req.params.brandName.trim(); // extra space remove

    // Case-insensitive search
    const products = await nextproductcollection
      .find({ brand: { $regex: `^${brand}$`, $options: "i" } })
      .toArray();

    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to fetch products" });
  }
});

    app.get('/menproduct',async(req,res)=>{
         const result=await nextproductcollectionformen.find().toArray();
          res.send(result);
 
    
})



 app.get("/menproduct/color/:colorName", async (req, res) => {
  try {
    const color= req.params.colorName.trim(); // extra space remove

    // Case-insensitive search
    const products = await nextproductcollectionformen
      .find({ color: { $regex: `^${color}$`, $options: "i" } })
      .toArray();

    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to fetch products" });
  }
});

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
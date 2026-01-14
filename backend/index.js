// const express = require('express')
// const app = express()
// const cors = require('cors');
// const port = 3000
// const { MongoClient, ServerApiVersion } = require('mongodb');


// const uri = "mongodb+srv://next_ecommerce:nxZaRWEbvbv3eKvZ@cluster0.knekqnq.mongodb.net/?appName=Cluster0";


// app.use(cors());

// //db_name:next_ecommerce pass: nxZaRWEbvbv3eKvZ


   



// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {

//     const nextproductcollection=client.db('next_ecommercedb').collection('womanproductcollection');

//     const nextproductcollectionformen = client.db('next_ecommercedb').collection('menproductcollection');
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();


//     app.get('/womanproduct',async(req,res)=>{
//          const result=await nextproductcollection.find().toArray();
//           res.send(result);
 
    
// })


//  app.get("/womanproduct/brand/:brandName", async (req, res) => {
//   try {
//     const brand = req.params.brandName.trim(); // extra space remove

//     // Case-insensitive search
//     const products = await nextproductcollection
//       .find({ brand: { $regex: `^${brand}$`, $options: "i" } })
//       .toArray();

//     res.send(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: "Failed to fetch products" });
//   }
// });

//     app.get('/menproduct',async(req,res)=>{
//          const result=await nextproductcollectionformen.find().toArray();
//           res.send(result);
 
    
// })

// const { ObjectId } = require("mongodb");

// app.get('/menproduct/:id', async (req, res) => {
//   try {
//     const id = req.params.id;

//     // Convert string id to ObjectId
//     const product = await nextproductcollectionformen.findOne({ _id: new ObjectId(id) });

//     if (!product) {
//       return res.status(404).send({ message: "Product not found" });
//     }

//     res.send(product);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Server error" });
//   }
// });


// app.get('/womanproduct/:id', async (req, res) => {
//   try {
//     const id = req.params.id;

//     // Convert string id to ObjectId
//     const product = await nextproductcollection.findOne({ _id: new ObjectId(id) });

//     if (!product) {
//       return res.status(404).send({ message: "Product not found" });
//     }

//     res.send(product);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Server error" });
//   }
// });



//  app.get("/menproduct/color/:colorName", async (req, res) => {
//   try {
//     const color= req.params.colorName.trim(); // extra space remove

//     // Case-insensitive search
//     const products = await nextproductcollectionformen
//       .find({ color: { $regex: `^${color}$`, $options: "i" } })
//       .toArray();

//     res.send(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: "Failed to fetch products" });
//   }
// });

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);





// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// const express = require("express");
// const app = express();
// const cors = require("cors");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// const port = 3000;

// // =================== MIDDLEWARE ===================
// app.use(cors());
// app.use(express.json());

// // =================== MONGODB ===================
// const uri =
//   "mongodb+srv://next_ecommerce:nxZaRWEbvbv3eKvZ@cluster0.knekqnq.mongodb.net/?appName=Cluster0";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// // =================== RUN FUNCTION ===================
// async function run() {
//   try {
//     await client.connect();
//     console.log("MongoDB connected");

//     const db = client.db("next_ecommercedb");

//     const womanProductCollection = db.collection("womanproductcollection");
//     const menProductCollection = db.collection("menproductcollection");
//     const ordersCollection = db.collection("orders");

//     // =================== PRODUCT APIs ===================
//     app.get("/womanproduct", async (req, res) => {
//       const result = await womanProductCollection.find().toArray();
//       res.send(result);
//     });

//     app.get("/menproduct", async (req, res) => {
//       const result = await menProductCollection.find().toArray();
//       res.send(result);
//     });

//     app.get("/womanproduct/:id", async (req, res) => {
//       const product = await womanProductCollection.findOne({
//         _id: new ObjectId(req.params.id),
//       });
//       res.send(product);
//     });

//     app.get("/menproduct/:id", async (req, res) => {
//       const product = await menProductCollection.findOne({
//         _id: new ObjectId(req.params.id),
//       });
//       res.send(product);
//     });

//     // =================== SSLCommerz PAYMENT ===================
//     app.post("/create-sslcommerz-session", async (req, res) => {
//       try {
//         const { amount, productId } = req.body;
//         const tran_id = "TXN_" + Date.now();

//         // 1️⃣ Save order as pending
//         await ordersCollection.insertOne({
//           tran_id,
//           productId,
//           amount,
//           status: "pending",
//           paymentMethod: "sslcommerz",
//           createdAt: new Date(),
//         });

//         // 2️⃣ SSLCommerz payload
//         const postData = {
//           store_id: "acd6963b6c9c4521",        // <-- Sandbox store_id
//           store_passwd: "acd6963b6c9c4521@ssl", // <-- Sandbox password
//           total_amount: amount,
//           currency: "BDT",
//           tran_id: tran_id,
//           success_url: "http://localhost:3000/payment/success",
//           fail_url: "http://localhost:3000/payment/fail",
//           cancel_url: "http://localhost:3000/payment/cancel",
//           ipn_url: "http://localhost:3000/payment/ipn",

//           shipping_method: "NO",
//           product_name: "Ecommerce Product",
//           product_category: "Clothing",
//           product_profile: "general",

//           cus_name: "Customer",
//           cus_email: "customer@email.com",
//           cus_add1: "Dhaka",
//           cus_city: "Dhaka",
//           cus_country: "Bangladesh",
//           cus_phone: "01700000000",
//         };

//         // =================== built-in fetch ===================
//         const response = await fetch(
//           "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json; charset=utf-8" },
//             body: JSON.stringify(postData),
//           }
//         );

//         const data = await response.json();

//         // data.GatewayPageURL থাকলে redirect
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//         res.status(500).send({ error: "Payment session error" });
//       }
//     });

//     // =================== PAYMENT RESULT APIs ===================
//     app.post("/payment/success", async (req, res) => {
//       const { tran_id } = req.body;

//       await ordersCollection.updateOne(
//         { tran_id },
//         { $set: { status: "paid", paidAt: new Date() } }
//       );

//       res.send("Payment Successful");
//     });

//     app.post("/payment/fail", async (req, res) => {
//       const { tran_id } = req.body;

//       await ordersCollection.updateOne(
//         { tran_id },
//         { $set: { status: "failed" } }
//       );

//       res.send("Payment Failed");
//     });

//     app.post("/payment/cancel", async (req, res) => {
//       const { tran_id } = req.body;

//       await ordersCollection.updateOne(
//         { tran_id },
//         { $set: { status: "cancelled" } }
//       );

//       res.send("Payment Cancelled");
//     });

//     // =================== IPN ===================
//     app.post("/payment/ipn", async (req, res) => {
//       const { tran_id, status } = req.body;

//       if (status === "VALID") {
//         await ordersCollection.updateOne(
//           { tran_id },
//           { $set: { status: "paid" } }
//         );
//       }

//       res.send({ message: "IPN received" });
//     });

//     // =================== PING ===================
//     await client.db("admin").command({ ping: 1 });
//     console.log("MongoDB ping success");
//   } catch (err) {
//     console.error(err);
//   }
// }

// run();

// // =================== ROOT ===================
// app.get("/", (req, res) => {
//   res.send("Server running 🚀");
// });

// // =================== SERVER ===================
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });



// const express = require("express");
// const app = express();
// const cors = require("cors");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// const port = 3000;

// // =================== MIDDLEWARE ===================
// app.use(cors());
// app.use(express.json());

// // =================== MONGODB ===================
// const uri =
//   "mongodb+srv://next_ecommerce:nxZaRWEbvbv3eKvZ@cluster0.knekqnq.mongodb.net/?appName=Cluster0";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// // =================== RUN FUNCTION ===================
// async function run() {
//   try {
//     await client.connect();
//     console.log("MongoDB connected");

//     const db = client.db("next_ecommercedb");
//     const ordersCollection = db.collection("orders");

//     // =================== SSLCommerz PAYMENT ===================
//     app.post("/create-sslcommerz-session", async (req, res) => {
//       try {
//         const { amount, productId } = req.body;

//         if (!amount || !productId) {
//           return res.status(400).send({ error: "Amount and productId required" });
//         }

//         const tran_id = "TXN_" + Date.now();

//         // 1️⃣ Save order as pending
//         await ordersCollection.insertOne({
//           tran_id,
//           productId,
//           amount: Number(amount),
//           status: "pending",
//           paymentMethod: "sslcommerz",
//           createdAt: new Date(),
//         });

//         // 2️⃣ SSLCommerz v3 payload
//         const postData = {
//           store_id: "acd6963b6c9c4521",
//           store_passwd: "acd6963b6c9c4521@ssl",
//           total_amount: amount.toString(), // string required
//           currency: "BDT",
//           tran_id: tran_id,
//           success_url: "http://127.0.0.1:5500/sendmoney_success.html",
//           fail_url: "http://127.0.0.1:5500/sendmoney_fail.html",
//           cancel_url: "http://127.0.0.1:5500/sendmoney_cancel.html",
//           ipn_url: "http://localhost:3000/payment/ipn",

//           shipping_method: "NO",
//           product_name: "Test Product",
//           product_category: "Clothing",
//           product_profile: "general",

//           cus_name: "Customer",
//           cus_email: "customer@email.com",
//           cus_add1: "Dhaka",
//           cus_city: "Dhaka",
//           cus_country: "Bangladesh",
//           cus_phone: "01700000000",
//         };

//         console.log("Post data:", postData);

//         // =================== fetch ===================
//         const response = await fetch(
//           "https://sandbox.sslcommerz.com/gwprocess/v3/api.php",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json; charset=utf-8" },
//             body: JSON.stringify(postData),
//           }
//         );

//         const data = await response.json();
//         console.log("SSLCommerz response:", data);
//         res.send(data);
//       } catch (err) {
//         console.error(err);
//         res.status(500).send({ error: "Payment session error" });
//       }
//     });

//     // =================== IPN / Payment result ===================
//     app.post("/payment/ipn", async (req, res) => {
//       const { tran_id, status } = req.body;

//       if (!tran_id) return res.status(400).send({ error: "tran_id missing" });

//       if (status === "VALID") {
//         await ordersCollection.updateOne(
//           { tran_id },
//           { $set: { status: "paid", paidAt: new Date() } }
//         );
//       } else if (status === "FAILED") {
//         await ordersCollection.updateOne(
//           { tran_id },
//           { $set: { status: "failed" } }
//         );
//       }

//       res.send({ message: "IPN received" });
//     });

//     // =================== PING ===================
//     await client.db("admin").command({ ping: 1 });
//     console.log("MongoDB ping success");
//   } catch (err) {
//     console.error(err);
//   }
// }

// run();

// // =================== ROOT ===================
// app.get("/", (req, res) => {
//   res.send("Server running 🚀");
// });

// // =================== SERVER ===================
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const PORT = 3000;
const STORE_ID = "acd6963b6c9c4521";
const STORE_PASS = "acd6963b6c9c4521@ssl";



// =================== MIDDLEWARE ===================
app.use(cors());
app.use(express.json());

// =================== MONGODB ===================
const uri =
  "mongodb+srv://next_ecommerce:nxZaRWEbvbv3eKvZ@cluster0.knekqnq.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// =================== RUN FUNCTION ===================
async function run() {
  try {
   
    console.log("MongoDB connected");

    // const db = client.db("next_ecommercedb");
    // const ordersCollection = db.collection("orders");
    const nextproductcollection=client.db('next_ecommercedb').collection('womanproductcollection');

    const nextproductcollectionformen = client.db('next_ecommercedb').collection('menproductcollection');

      const ordercool = client.db('next_ecommercedb').collection('ordercollections4');
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

const { ObjectId } = require("mongodb");

app.get('/menproduct/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Convert string id to ObjectId
    const product = await nextproductcollectionformen.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
});


app.get('/womanproduct/:id', async (req, res) => {
  try {
    const id = req.params.id;

    // Convert string id to ObjectId
    const product = await nextproductcollection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.send(product);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
});



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


    // =================== SSLCommerz PAYMENT ===================
  // Payment endpoint

 app.post("/pay", async (req, res) => {
  try {
    console.log("🔔 Payment request body:", req.body);

    // 1️⃣ Extract products
    const { products, amount } = req.body;

    // 2️⃣ Validation
    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.json({ error: "Invalid products" });
    }

    if (!amount || amount < 10) {
      return res.json({ error: "Minimum 10 BDT required" });
    }

    // 3️⃣ Insert into ordercool collection
    const orderDoc = {
      products,
      totalAmount: amount,  // backend trusted amount
      status: "PENDING",
      createdAt: new Date()
    };

    const insertResult = await ordercool.insertOne(orderDoc);
    const orderId = insertResult.insertedId;
    console.log("✅ Order saved with ID:", orderId);

    // 4️⃣ Prepare SSLCommerz POST data
    const tran_id = "TXN_" + Date.now();

    const postData = {
      store_id: "testbox",
      store_passwd: "qwerty",
      total_amount: amount,
      currency: "BDT",
      tran_id: tran_id,
      success_url: `http://localhost:${PORT}/success?orderId=${orderId}`,
      fail_url: `http://localhost:${PORT}/fail?orderId=${orderId}`,
      cancel_url: `http://localhost:${PORT}/cancel?orderId=${orderId}`,

      product_name: "Test Product",
      product_category: "Test",
      product_profile: "general",

      cus_name: "Test Customer",
      cus_email: "test@email.com",
      cus_add1: "Dhaka",
      cus_city: "Dhaka",
      cus_country: "Bangladesh",
      cus_phone: "01700000000",

      shipping_method: "NO",
      num_of_item: products.length
    };

    console.log("📤 SSLCommerz POST Data:", postData);

    // 5️⃣ Call SSLCommerz API
    const response = await fetch(
      "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json"
        },
        body: new URLSearchParams(postData).toString()
      }
    );

    const responseText = await response.text();

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error("❌ JSON Parse Error:", parseError);
      return res.json({
        error: "Invalid response from SSLCommerz",
        raw: responseText.substring(0, 300)
      });
    }

    // 6️⃣ Send response to frontend
    if (data.status === "SUCCESS" && data.GatewayPageURL) {
      res.json({
        success: true,
        url: data.GatewayPageURL,
        orderId: orderId,
        message: "Payment session created, order saved"
      });
    } else {
      res.json({
        error: data.failedreason || "Payment failed",
        status: data.status,
        details: data
      });
    }
  } catch (err) {
    console.error("❌ /pay API Error:", err);
    res.json({ error: "Something went wrong" });
  }
});



    // =================== IPN / Payment result ===================
 

    // =================== PING ===================
    await client.db("admin").command({ ping: 1 });
    console.log("MongoDB ping success");
  } catch (err) {
    console.error(err);
  }
}

run();


// =================== ROOT ===================
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

// =================== SERVER ===================
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
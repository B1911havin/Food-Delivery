const express = require("express")
const app = express()
const port= 3000
const bodyparser= require("body-parser")
const cors = require("cors")
const admin = require("firebase-admin")
const {getFirestore}=require("firebase-admin/firestore")
const { initializeApp,cert }= require( "firebase-admin/app")
const {signup,login} = require('./firebase')

const serviceAccount = require('./secretKey.json')
initializeApp({
    credential: cert(serviceAccount)
})

const db=getFirestore()

app.use(bodyparser.json())
app.use(cors())

app.get("/products",async (req,res)=>{
    const ref = db.collection('products')
    const snapshot = await ref.get()
    const products_snapshot = snapshot.docs
    const products =[]
    for(let i=0 ; i<products_snapshot.length; i++){
        let product = {
            id : products_snapshot[i].id,
            platform: products_snapshot[i].data().platform || "NaN" ,
            price: products_snapshot[i].data().price || "NaN"
        }
        products.push (product)
    }
    console.log(products)
    res.send(products)
})

app.post("/signup", async(req,res)=>{
    await signup(req.body.email,req.body.password).then((msg) =>{
        res.send(msg)
    })

})
app.post("/login",async(req,res)=>{
    await login(req.body.email,req.body.password).then((msg)=>{
        res.send(msg)
        console.log("Message",msg);
    })
})


app.listen(port, () => console.log(`Listening on port : ${port}`))



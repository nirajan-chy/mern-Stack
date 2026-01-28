import express from "express";
import { connectDatabase } from "./config/connectMongo.js";
import { userRouter } from "./routes/user.route.js";
import { productRouter } from "./routes/product.route.js";

const app = express()
app.use(express.json())

const PORT = 4000

connectDatabase()

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`)
})

app.use("/user", userRouter)
app.use("/product", productRouter)

// app.get("/", (req,res)=>{
//   res.send("This is user page")
// })

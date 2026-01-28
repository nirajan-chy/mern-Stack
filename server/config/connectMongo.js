import mongoose from "mongoose"

export const connectDatabase = async() => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mern")
    console.log("Database Connected Successfully")
  } catch (error) {
    console.log(error)
  }
}
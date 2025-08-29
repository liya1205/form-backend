import express from "express";
import cors from "cors";
import "dotenv/config";
import user from "./dbmodel/user.js";
import connectDB from "./dbconfig/dbconnection.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  console.log("Root endpoint hit");
  res.send("Hello World from Vercel 🚀");
});

// Example GET
app.get("/form", (req, res) => {
  console.log("Form GET endpoint hit");
  const person = {
    name: "liya",
    age: 22,
    place: "tvm",
    email: "liyamarymathew72@gmail.com"
  };
  res.json({ data: person });
});

// Example POST
app.post("/form-submit", async (req, res) => {
  try {
    const { name, email } = req.body;
    console.log("Form submitted:", name, email);

    // Save to DB (Mongoose model)
    await user.create({ name, email });

    res.json({ status: true });
  } catch (err) {
    console.error("Error saving user:", err.message);
    res.status(500).json({ status: false, error: err.message });
  }
});

// ⚠️ Important: DO NOT use app.listen() on Vercel
// Instead export the app as a function
export default app;

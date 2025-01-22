import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

export const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);
export default connectDB;

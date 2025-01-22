import connectDB, { Task } from "../../utils/database";

export default async function handler(req, res) {
  await connectDB();
  const { method, body, query } = req;

  switch (method) {
    case "GET":
      const tasks = await Task.find({});
      res.status(200).json(tasks);
      break;

    case "POST":
      const newTask = await Task.create(body);
      res.status(201).json(newTask);
      break;

    case "PUT":
      const updatedTask = await Task.findByIdAndUpdate(query.id, body, {
        new: true
      });
      res.status(200).json(updatedTask);
      break;

    case "DELETE":
      await Task.findByIdAndDelete(query.id);
      res.status(200).json({ success: true });
      break;

    default:
      res.status(405).end();
  }
}

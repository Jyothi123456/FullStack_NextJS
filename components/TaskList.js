import { useEffect, useState } from "react";
import Link from "next/link";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("pages/api/tasks")
      .then((res) => res.json())
      .then(setTasks);
  }, []);

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task._id} className="border p-4 rounded">
          <h2 className="text-xl font-bold">{task.title}</h2>
          <p>{task.description}</p>
          <div>
            <Link href={`/edit-task/${task._id}`} className="text-blue-500">Edit</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

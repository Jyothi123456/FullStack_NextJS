import Header from "../components/Header";
import TaskForm from "../components/TaskForm";

export default function AddTask() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Add New Task</h1>
        <TaskForm />
      </main>
    </div>
  );
}

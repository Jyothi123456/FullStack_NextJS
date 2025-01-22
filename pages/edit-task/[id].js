import { useRouter } from "next/router";
import Header from "../../components/Header";
import TaskForm from "../../components/TaskForm";

export default function EditTask() {
  const { id } = useRouter().query;

  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
        <TaskForm id={id} />
      </main>
    </div>
  );
}

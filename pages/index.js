import Header from "../components/Header";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Task List</h1>
        <TaskList />
      </main>
    </div>
  );
}

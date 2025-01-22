import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-lg shadow-md">
      <h1 className="text-2xl font-extrabold tracking-wide">Task Manager</h1>
      <nav>
        <Link href="/" className="mr-6 text-lg hover:text-blue-300 transition duration-300">Home</Link>
        <Link href="/add-task" className="text-lg hover:text-blue-300 transition duration-300">Add Task</Link>
      </nav>
    </header>
  );
}

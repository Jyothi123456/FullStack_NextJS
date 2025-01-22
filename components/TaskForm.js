import { useState } from "react";
import { useRouter } from "next/router";

export default function TaskForm({ id }) {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? "PUT" : "POST";
    const url = id ? `/pages/api/tasks?id=${id}` : "/pages/api/tasks";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Title</label>
        <input
          className="w-full border p-2"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          className="w-full border p-2"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        ></textarea>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2" type="submit">
        {id ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

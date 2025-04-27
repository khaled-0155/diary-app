import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryPage({ category }) {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  // Load notes from LocalStorage
  useEffect(() => {
    const storedNotes =
      JSON.parse(localStorage.getItem(`notes_${category}`)) || [];
    setNotes(storedNotes);
  }, [category]);

  // Save notes to LocalStorage
  const saveNotes = (updatedNotes) => {
    localStorage.setItem(`notes_${category}`, JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  // Create or Update note
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newNote = {
      id: editingId || Date.now(),
      title,
      content,
      date: new Date().toISOString(),
    };

    let updatedNotes;
    if (editingId) {
      updatedNotes = notes.map((note) =>
        note.id === editingId ? newNote : note
      );
    } else {
      updatedNotes = [...notes, newNote];
    }

    saveNotes(updatedNotes);
    setTitle("");
    setContent("");
    setEditingId(null);
  };

  // Edit note
  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  };

  // Delete note
  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    saveNotes(updatedNotes);
  };

  return (
    <section
      className="py-32 px-4 sm:px-20 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(/assets/diary-bg.jpg)` }}
    >
      <button
        onClick={() => navigate("/diary")}
        className="mb-6 text-white hover:text-green-700 transition duration-300"
      >
        ← Back to Diary
      </button>
      <h2 className="text-xl md:text-3xl font-semibold text-center text-white mb-10">
        <span className="inline-block mr-2 text-green-700">🌿</span>
        {category} Notes
        <span className="inline-block ml-2 text-green-700">🌿</span>
      </h2>

      {/* Fixed Form */}
      <div className="max-w-2xl mx-auto bg-transparent bg-opacity-60 backdrop-blur-md p-6 rounded-lg shadow-lg mb-8 sticky top-0 z-10">
        <h3 className="text-lg font-bold text-white mb-4">
          {editingId ? "Edit Note" : "Add New Note"}
        </h3>
        <div>
          <input
            type="text"
            placeholder="Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-4 bg-white bg-opacity-80 rounded-md text-gray-800 placeholder-gray-500"
          />
          <textarea
            placeholder="Note Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 mb-4 bg-white bg-opacity-80 rounded-md text-gray-800 placeholder-gray-500"
            rows="4"
          />
          <button
            onClick={handleSubmit}
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition duration-300"
          >
            {editingId ? "Update Note" : "Add Note"}
          </button>
          {editingId && (
            <button
              onClick={() => {
                setTitle("");
                setContent("");
                setEditingId(null);
              }}
              className="ml-4 text-white hover:text-green-700 transition duration-300"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      {/* Scrollable Notes Container */}
      <div className="max-w-2xl mx-auto max-h-[400px] overflow-y-auto pb-8">
        {notes.length === 0 ? (
          <p className="text-white text-center bg-transparent bg-opacity-60 backdrop-blur-md p-4 rounded-lg">
            No notes yet.
          </p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="bg-transparent bg-opacity-60 backdrop-blur-md p-4 rounded-lg shadow-lg mb-4"
            >
              <h3 className="text-lg font-bold text-white">{note.title}</h3>
              <p className="text-gray-800">{note.content}</p>
              <p className="text-sm text-gray-300">
                {new Date(note.date).toLocaleDateString()}
              </p>
              <div className="mt-2">
                <button
                  onClick={() => handleEdit(note)}
                  className="text-white hover:text-blue-400 transition duration-300 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="text-white hover:text-red-400 transition duration-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

import { useState } from "react";

const EMPTY_FORM = { title: "", date: "", image: "", content: "" };

const AddEntryModal = ({ isOpen, onClose, onSave, entries }) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.date) newErrors.date = "Date is required";
    if (!form.image.trim()) newErrors.image = "Image URL is required";
    if (!form.content.trim()) newErrors.content = "Content is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const alreadyExists = entries.some((entry) => entry.date === form.date);
    if (alreadyExists) {
      setErrors({ date: "You already have an entry for this day. Come back tomorrow!" });
      return;
    }

    onSave({ ...form, id: crypto.randomUUID() });
    setForm(EMPTY_FORM);
    setErrors({});
    onClose();
  };

  const handleClose = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-base-100 rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="flex items-center justify-between p-6 border-b border-(--border)">
          <h2 className="text-xl font-semibold text-(--text-h) m-0">New Entry</h2>
          <button className="btn btn-ghost btn-sm btn-circle" onClick={handleClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <div>
            <label className="label text-sm font-medium text-(--text-h)">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="What's on your mind?"
              className="input input-bordered w-full"
            />
            {errors.title && <p className="text-error text-sm mt-1">{errors.title}</p>}
          </div>

          <div>
            <label className="label text-sm font-medium text-(--text-h)">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
            {errors.date && <p className="text-error text-sm mt-1">{errors.date}</p>}
          </div>

          <div>
            <label className="label text-sm font-medium text-(--text-h)">Image URL</label>
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://..."
              className="input input-bordered w-full"
            />
            {errors.image && <p className="text-error text-sm mt-1">{errors.image}</p>}
          </div>

          <div>
            <label className="label text-sm font-medium text-(--text-h)">Content</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Write about your day..."
              rows={4}
              className="textarea textarea-bordered w-full resize-none"
            />
            {errors.content && <p className="text-error text-sm mt-1">{errors.content}</p>}
          </div>

          <div className="flex gap-3 justify-end pt-2">
            <button type="button" className="btn btn-ghost" onClick={handleClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Save Entry</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEntryModal;

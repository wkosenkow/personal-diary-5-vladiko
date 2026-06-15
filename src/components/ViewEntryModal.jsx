const ViewEntryModal = ({ entry, onClose }) => {
  if (!entry) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-base-100 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-(--border)">
          <h2 className="text-xl font-semibold text-(--text-h) m-0">{entry.title}</h2>
          <button className="btn btn-ghost btn-sm btn-circle" onClick={onClose}>✕</button>
        </div>

        <img
          src={entry.image}
          alt={entry.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6 flex flex-col gap-4">
          <p className="text-sm text-(--text) opacity-70">{entry.date}</p>
          <p className="text-(--text) leading-relaxed whitespace-pre-wrap">{entry.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewEntryModal;

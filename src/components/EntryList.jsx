import EntryCard from "./EntryCard";

const EntryList = ({ entries, onCardClick }) => {
  const sorted = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));

  if (sorted.length === 0) {
    return (
      <main className="flex flex-col items-center justify-center flex-1 text-(--text) opacity-50 py-24">
        <p className="text-6xl mb-4">📭</p>
        <p className="text-lg">No entries yet. Add your first one!</p>
      </main>
    );
  }

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {sorted.map((entry) => (
        <EntryCard key={entry.id} entry={entry} onClick={onCardClick} />
      ))}
    </main>
  );
};

export default EntryList;

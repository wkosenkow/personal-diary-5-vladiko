import { useState, useEffect } from "react";
import Header from "./components/Header";
import EntryList from "./components/EntryList";
import AddEntryModal from "./components/AddEntryModal";
import ViewEntryModal from "./components/ViewEntryModal";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("diaryEntries");
    if (stored) {
      setEntries(JSON.parse(stored));
    }
  }, []);

  const saveEntry = (newEntry) => {
    const updated = [...entries, newEntry];
    setEntries(updated);
    localStorage.setItem("diaryEntries", JSON.stringify(updated));
  };

  return (
    <>
      <Header onAddClick={() => setIsAddOpen(true)} />
      <EntryList
        entries={entries}
        onCardClick={(entry) => setSelectedEntry(entry)}
      />
      <AddEntryModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSave={saveEntry}
        entries={entries}
      />
      <ViewEntryModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
      />
    </>
  );
};

export default App;

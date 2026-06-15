const EntryCard = ({ entry, onClick }) => {
  return (
    <div
      className="card bg-base-100 shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-200"
      onClick={() => onClick(entry)}
    >
      <figure className="h-48 overflow-hidden">
        <img
          src={entry.image}
          alt={entry.title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <p className="text-sm text-(--text) opacity-70">{entry.date}</p>
        <h2 className="card-title text-(--text-h)">{entry.title}</h2>
      </div>
    </div>
  );
};

export default EntryCard;

const Header = ({ onAddClick }) => {
  return (
    <header className="flex items-center justify-between px-8 py-5 ">
      <h1 className="text-2xl font-semibold text-[var(--text-h)] m-0 italic" style={{ fontFamily: "var(--heading)" }}>
        📓 Vladiary
      </h1>
      <button className="btn btn-primary" onClick={onAddClick}>
        + Add Entry
      </button>
    </header>
  );
};

export default Header;

export default function PlayMovies({ onClick, children }) {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

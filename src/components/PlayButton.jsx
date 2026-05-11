function PlayButton({ movieNameProps }) {
    
  function handlePlayClick() {
    alert("Playing " + movieNameProps);
  }

  return (
    <div>
      <button className="btn" onClick={handlePlayClick}>
        Play "{movieNameProps}"
      </button>
    </div>
  );
}

export default PlayButton;

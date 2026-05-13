import PlayMovies from "./PlayMovies";

export default function NamingEventHandlerAsProps1({
  onPlayMovie,
  onUploadImage,
}) {
  return (
    <div>
      <PlayMovies onClick={onPlayMovie}>Play Movies!</PlayMovies>
      <PlayMovies onClick={onUploadImage}>Upload Movies!</PlayMovies>
    </div>
  );
}

import { useState } from "react";

let people = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Jon Doe" },
];

export default function ArrayFilterToUpdateArray() {
  const [artists, setArtists] = useState(people);

  return (
    <>
      <h2>Array Filter to Update Array</h2>
      <ul>
        {artists.map((artist) => (
          <li className="textAlignleft" key={artist.id}>
            {artist.name}{" "}
              <button id="box"
                className="alignMargin"
                onClick={() => {
                  setArtists(artists.filter((a) => a.id !== artist.id));
                }}
              >
                Delete
              </button>
          </li>
        ))}
      </ul>
    </>
  );
}

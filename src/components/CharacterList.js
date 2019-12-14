import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  useEffect((props) => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(res => {
          console.log(res);
          const data = res.data.results;
          return setCharacter(data);
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [setCharacter]);

  console.log(character);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}

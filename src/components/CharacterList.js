import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from './CharacterCard';

export default function CharacterList(props) {
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
      <h1>Character List</h1>
      <div>{character.map((value, index) => {
        return (
          <Card 
            key={index}
            name={value.name}
            species={value.species}
            gender={value.gender}
            image={value.image}
            />
        )
      })}</div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import Card from './CharacterCard';
import Styled from 'styled-components';

export default function SearchForm(props) {
  
  const [searchName, setSearchName] = useState("");

  const [result, setResult] = useState(props.character);

  useEffect(() => {}, [searchName]);

  const handleChange = event => {
    setSearchName(event.target.value);

    const results = props.character.filter(characters => {
      return characters.name.toLowerCase().includes(searchName.toLowerCase());
    });

    setResult(results);
  };
  
  let CardContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  `;

  return (
    <section className="search-form">
      <form>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchName}
        />
      </form>
      <CardContainer>
        {result.map((value, index) => {
          return (
            <Card
              key={index}
              name={value.name}
              species={value.species}
              gender={value.gender}
              image={value.image}
            />
          );
        })}
      </CardContainer>
    </section>
  );
}

import React from "react";
import Styled from 'styled-components';

export default function CharacterCard(props) {
  let Box = Styled.div`
  width: 300px;
  background-color: #D9DDDC;
  border-radius: 5px;
  margin: 2%;
  display: flex;
  flex-direction: column;
  `;

  let Name = Styled.h3`
  text-align: center;
  `;

  let Text = Styled.p`
  width: 80%;
  margin: 2%;
  `;

  return (    
    <Box>
      <Name>{props.name}</Name>
      <img src={props.image} alt="Character" />
      <Text>Species: {props.species}</Text>
      <Text>Gender: {props.gender}</Text>
    </Box>
    );
}

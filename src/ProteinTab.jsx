import React, { useState } from "react";
import styled from "styled-components";

const ProteinTab = ({ food, handleQuantityChange }) => {
  //   const [protein, setProtein] = useState(0);
  //   const handleQuantityChange = (value) => {
  //     food.totalProtein = value / food.proteinContent;
  //   };
  return (
    <Container>
      <Text align="flex-start">{food.name}</Text>
      <Input onChange={(e) => handleQuantityChange(e, food)} />
      <Text align="flex-end">
        {food.totalProtein !== 0 ? food.totalProtein : "--"}
      </Text>
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 10px 0;
  align-items: center;
`;
const Text = styled.div`
  display: flex;
  justify-content: ${(props) => props.align};
  /* text-align: left; */
  font-size: 20px;
  color: #fff;
`;
const Input = styled.input`
  padding: 10px;
  border: none;
  /* border: 2px solid #e0e0e0; */
  border-radius: 5px;
  font-size: 20px;
`;
export default ProteinTab;

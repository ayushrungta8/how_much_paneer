import React, { useState } from "react";
import styled from "styled-components";
import foods from "./db";
import ProteinTab from "./ProteinTab";
const HowMuch = () => {
  const [weight, setWeight] = useState(0);
  const [foodList, setFoodList] = useState([...foods]);

  const handleCapsuleSelect = (e) => {
    console.log(e.target.id);
    const tempFoodList = [...foodList];
    tempFoodList.forEach((food) => {
      food.id === e.target.id && (food.selected = !food.selected);
    });
    setFoodList(tempFoodList);
  };

  const handleQuantityChange = (e, food) => {
    // food.totalProtein = e.target.value / food.proteinContent;
    console.log(e.target.value);
    console.log(food);
    const tempFoodList = [...foodList];
    tempFoodList.forEach((item) => {
      item.id === food.id &&
        (item.totalProtein = e.target.value / item.proteinContent);
    });
    setFoodList(tempFoodList);
  };

  return (
    <Container>
      <SubContainerVertical style={{ alignItems: "flex-start" }}>
        <Heading>How Much Paneer?</Heading>
        <SubHeading style={{ color: "#333333" }}>
          Let’s check how much protein you need daily
        </SubHeading>
      </SubContainerVertical>
      <SubContainerHorizontal>
        <SubHeading>Enter your weight</SubHeading>
        <InputContainer>
          <Input
            placeholder="Weight"
            onChange={(e) => setWeight(e.target.value)}
          />
          <SubHeading style={{ fontSize: "20px" }}>kg</SubHeading>
        </InputContainer>
      </SubContainerHorizontal>
      <SubContainerVertical>
        <SubHeading>
          According to your weight WHO recommends {weight ? weight : "--"} gm
        </SubHeading>
        <Heading style={{ fontSize: "36px" }}>
          Choose the food you want protein from and create a plan!
        </Heading>
      </SubContainerVertical>
      <CapsuleContainer>
        {foodList.map((food) => (
          <Capsule
            key={food.id}
            id={food.id}
            style={{ backgroundColor: food.selected ? "#FFD384" : "white" }}
            onClick={(e) => handleCapsuleSelect(e)}
          >
            {food.name}
          </Capsule>
        ))}
      </CapsuleContainer>
      <ContentContainer>
        <SubHeading style={{ fontSize: "36px", color: "#fff" }}>
          Total protein you get from the following food{" "}
          <span style={{ fontSize: "36px", color: "#FFA149" }}>
            {foodList.reduce((acc, curr) => {
              return (acc += curr.totalProtein);
            }, 0)}
          </span>
        </SubHeading>
        <TableContainer>
          {foodList.map((food) => {
            return food.selected ? (
              <ProteinTab
                food={food}
                key={food.id}
                handleQuantityChange={handleQuantityChange}
              />
            ) : (
              <></>
            );
          })}
        </TableContainer>
        <SubHeading></SubHeading>
      </ContentContainer>
    </Container>
  );
};
const InputContainer = styled.div`
  display: flex;
  border: 3px solid #c37b2b;
  border-radius: 5px;
  padding: 0 10px;
  margin: 0 10px;
  align-items: center;
  width: 200px;
`;
const TableContainer = styled.div`
  width: 30%;
`;
const Container = styled.div`
  /* padding: 40px; */
  min-height: 100vh;
  /* background: #a2aee9; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CapsuleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Capsule = styled.div`
  /* background-color: #fff; */
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #c37b2b;
  border-radius: 12px;
  width: 250px;
  font-size: 28px;
`;
const Input = styled.input`
  padding: 10px;
  border: none;
  font-size: 20px;
  min-width: 0;
  :focus {
    outline: none;
  }
`;
const Heading = styled.h1`
  padding: 10px 0;
  font-size: 40px;
  color: #c37a2b;
  /* align-self: start; */
`;
const SubHeading = styled.div`
  padding: 10px 0;
  font-size: 32px;
  /* align-self: start; */
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 20px;
  flex: 1;
  background: linear-gradient(
      89.98deg,
      rgba(195, 122, 43, 0.16) 0.02%,
      rgba(0, 0, 0, 0) 99.98%
    ),
    #1b1d21;
`;
const SubContainerHorizontal = styled.div`
  /* width: 1000px; */
  display: flex;
  justify-content: center;
`;
const SubContainerVertical = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* justify-content: center; */
  /* align-items: center; */
`;
export default HowMuch;

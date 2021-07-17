import styled from "styled-components"; //importando styled para poder usar css

export const Body = styled.div`
  max-width: 1280px;
  width: 90vw;
  margin: 50px auto;
  font-size: 100%;
  font-family: "Courier New", Arial, sans-serif;
  display: flex;
  justify-content: center;
  `;

export const Container = styled.div`
  display: flex;
  align-content: center;
  background-color: #f2f2f2;
  text-align: center;
  width: 400px;
  height: 100%;
  border: 1px solid;
  border-radius: 10px;
  box-shadow: 1px 2px 2px silver;
  flex-direction: column;
  .logo{
      margin: 10px;
      align-self: center;
      width: 50%;
  }
  .containerTitle {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .title {
    font-size: 35px;
    color: #f15a24;
    text-shadow: 1px 1px 2px black;
  }
  .icone {
    margin: 10px;
    width: 50px;
    height: 50px;
  }
  > h1 {
    text-shadow: 1px 1px 1px #f15a24;
  }
  .botao{
    width: 250px;
    height: 30px;
    border-radius: 5px;
    background-color: #f15a24;
    border: none;
    align-self: center;
    margin: 15px;
    color: white;
    text-shadow: 2px 1px 1px black;
    transition: 0.3s;
    :hover{
        background-color: black;
    }
  }
`;

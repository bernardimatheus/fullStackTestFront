import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rgb(114, 109, 187);
  background: linear-gradient(
    90deg,
    rgba(114, 109, 187, 1) 0%,
    rgba(99, 121, 190, 1) 18%,
    rgba(102, 136, 195, 1) 51%,
    rgba(22, 136, 159, 1) 100%
  );

  h1 {
    padding: 5px;
    margin: 15px;
  }
`;

export const Button = styled.button`
  padding: 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  width: 200px;
  margin: 20px;
  font-weight: bold;
  background: #5bb5b5;
  border: none;
`;

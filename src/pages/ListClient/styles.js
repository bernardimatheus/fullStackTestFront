import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: rgb(114, 109, 187);
  background: linear-gradient(
    90deg,
    rgba(114, 109, 187, 1) 0%,
    rgba(99, 121, 190, 1) 18%,
    rgba(102, 136, 195, 1) 51%,
    rgba(22, 136, 159, 1) 100%
  );
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  margin: 20px;
  padding: 15px;
  width: 100%;
`;

export const ActionDiv = styled.div`
  display: flex;
  justify-content: center;

  button {
    background: #82ebb3;
    border-radius: 4px;
    padding: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border: none;
    margin: 0px 5px;
    transition: background 0.1s;
    &:hover {
      background: ${darken('0.09', '#82ebb3')};
    }
  }
`;

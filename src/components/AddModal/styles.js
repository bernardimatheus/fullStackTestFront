import styled from 'styled-components';

export const Container = styled.div``;

export const AddButton = styled.button`
  background: transparent !important;
  margin-bottom: -30px;
  border: none;
  bottom: -30px;
  z-index: 10;

  &:hover {
    transition-duration: 0.5s;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

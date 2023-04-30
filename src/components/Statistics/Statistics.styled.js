import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/getRandomColor';

export const Statistics = styled.div`
  width: 300px;
  background-color: #bde0d5;
  border-radius: 5px;
`;

export const TitleEl = styled.h2`
  font-weight: 700;
  text-align: center;
  padding: 10px;
`;

export const StastListEl = styled.ul`
  display: flex;
  width: 100%;

  border-radius: 5px;

  overflow: hidden;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 5);
  padding: 10px;

  text-align: center;

  border: 1px solid #84918d;

  background-color: ${getRandomHexColor};

  &:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  font-size: 20px;
`;

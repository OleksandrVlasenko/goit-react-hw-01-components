import styled from '@emotion/styled';

export const Table = styled.table`
  table-layout: fixed;
  width: 300px;
  border-collapse: collapse;
  border: 1px solid #84918d;
  border-radius: 5px;
  background-color: #bde0d5;

  overflow: hidden;

  & th {
    width: calc(100% / 3);

    text-align: center;

    background-color: teal;
  }

  & td {
    text-align: center;
  }

  & tr:nth-of-type(2n) {
    background-color: #91bbae;
  }

  & th,
  & td {
    padding: 10px;

    &:not(:last-of-type) {
      border-right: 1px solid #84918d;
    }
  }
`;

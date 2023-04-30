import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  background-color: #bde0d5;
  border-radius: 5px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const Avatar = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  background-color: whitesmoke;
`;

export const Name = styled.p`
  font-weight: 700;
`;

export const Tag = styled.p`
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;

  border-radius: 5px;

  width: 100%;

  background-color: #91bbae;

  overflow: hidden;

  & li {
    width: calc(100% / 3);
    text-align: center;
    padding: 10px;
    border: 1px solid #84918d;

    &:first-of-type {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-of-type {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;

export const Label = styled.span`
  display: block;
  color: grey;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;

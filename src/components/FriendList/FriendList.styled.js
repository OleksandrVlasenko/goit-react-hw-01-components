import styled from '@emotion/styled';

export const Friends = styled.ul`
  width: 300px;
  padding: 10px;
  background-color: #bde0d5;
  border-radius: 5px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px;

  border-radius: 5px;
  border: 1px solid #84918d;
  box-shadow: 0px 5px 15px 0px rgba(0, 128, 128, 0.92);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    if (isOnline) {
      return 'teal';
    } else {
      return '#bb3232';
    }
  }};
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  border-radius: 50%;
  width: 75px;
  height: 75px;

  background-color: whitesmoke;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

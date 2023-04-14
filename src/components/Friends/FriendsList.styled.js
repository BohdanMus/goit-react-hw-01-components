import styled from 'styled-components';

export const FriendsCard = styled.li`
  align-items: center;
  background-color: #fdfdfd;
  border: 1px solid #e3e3e3;
  border-radius: 50px;
  display: flex;
  margin: 20px;
  padding: 15px;
  width: 250px;
  gap: 30px;
  p {
    font-size: 20px;
    font-weight: 500;
    margin: auto;
  }
  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: green;
  }
`;

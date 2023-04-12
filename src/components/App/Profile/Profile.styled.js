import styled from 'styled-components';

export const ProfileCard = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
  margin: 50px;
`;

export const ProfileDescription = styled.div`
  padding: 30px;
  text-align: center;
  width: 300px;
  img {
    border-radius: 50%;
    width: 200px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    margin: 16px;
  }
`;

export const ProfileStats = styled.ul`
  background-color: #f3f6f9;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    padding: 20px;
    text-align: center;
    width: 100%;
    border-right: 1px solid #e3e3e3;
  }
  span {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;

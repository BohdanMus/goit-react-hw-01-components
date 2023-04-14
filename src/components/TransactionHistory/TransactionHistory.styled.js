import styled from 'styled-components';

export const TransactionHistoryHead = styled.thead`
  background-color: green;
  color: #fff;
`;

export const Table = styled.table`
  margin: 50px;
  width: 400px;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid black;
  th {
    padding: 10px;
  }
  td {
    padding: 10px;
    text-transform: capitalize;
  }
  tbody:nth-child(2n) {
    background-color: #d1edee;
  }
`;

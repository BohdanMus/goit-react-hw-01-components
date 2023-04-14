import { Transaction } from './Transaction';
import {TransactionHistoryHead, Table} from './TransactionHistory.styled'
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TransactionHistoryHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHistoryHead>
      {items.map(item => {
        return <Transaction item={item} key={item.id} />;
      })}
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
};
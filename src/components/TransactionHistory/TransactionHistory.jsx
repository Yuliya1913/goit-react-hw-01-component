import css from 'components/TransactionHistory/TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead className={css.head}>
      <tr>
        <th className={css.colum}>Type</th>
        <th className={css.colum}>Amount</th>
        <th className={css.colum}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={css.strouk}>
          <td className={css.colum}>{type}</td>
          <td className={css.colum}>{amount}</td>
          <td className={css.colum}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

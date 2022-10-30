import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
    return <table className={css.transactionHistory}>
                <thead className={css.theadTitle}>
                <tr className={css.theadTr}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
                </thead>
            
                <tbody className={css.tbody}>
                    {items.map(item => {
                    return <tr className={css.tbodyTr} key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                    })}
                </tbody>
  </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount:  PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }))
  }
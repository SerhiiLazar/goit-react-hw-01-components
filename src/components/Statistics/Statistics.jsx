import PropTypes from 'prop-types';
import {getRandomHexColor} from 'helpers/random-color';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({title, stats}) => {
    return  <section className={css.statistics}>
        {title && <h2 className={css.title}>Upload stats</h2>}

        <ul className={css.statlist}>
            {stats.map(stat => {
                return (<li className={css.item} style={{backgroundColor: `${getRandomHexColor()}`}} key={stat.id}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
            </li>)
            })}
        </ul>
</section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}
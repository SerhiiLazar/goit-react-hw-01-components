import PropTypes from 'prop-types';
import {getRandomHexColor} from 'helpers/random-color';

export const Statistics = ({title, stats}) => {
    return  (<section className="statistics">
        {title && <h2 className="title">Upload stats</h2>}

        <ul className="stat-list">
            {stats.map(stat => {
                return (<li className="item" style={{backgroundColor: `${getRandomHexColor()}`}} key={stat.id}>
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}%</span>
            </li>)
            })}
        </ul>
</section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}
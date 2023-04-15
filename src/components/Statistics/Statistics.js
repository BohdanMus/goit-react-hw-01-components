import { StatisticsCard, StatisticsList } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <h2>{title}</h2>}


      <StatisticsList className="stat-list">
        {stats.map(stat => (
          <li key={stat.id} className="item" style={{backgroundColor: getRandomHexColor(),}}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </StatisticsList>
    </StatisticsCard>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

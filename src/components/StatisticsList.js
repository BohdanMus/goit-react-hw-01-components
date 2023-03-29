import Statistics from './Statistics';
function StatisticsList({ items }) {
  return (
    <ul>
      {data.map(datas => (
        <li key={datas.id}>
          <Statistics label={datas.label} percentage={datas.percentage} />
        </li>
      ))}
    </ul>
  );
}
export default StatisticsList;

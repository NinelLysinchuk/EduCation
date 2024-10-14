import  statistics  from "./statisticsData";

const Statistics = () => {
  return (
    <div className='statistic-placeholder'>
      {statistics.map((item, index) => (
        <div key={index} className='statistic'>
          <div className='statistic-item'>
            <div className='statistic-numbers'>{item.numbers}</div>
            <div className='statistic-description'>{item.description}</div>
          </div>
      </div>
      ))}
    </div>
  );
};

export default Statistics;

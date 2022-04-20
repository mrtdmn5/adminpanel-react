import "./chart.scss";

const Chart = () => {
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];

  return (
    <div className="chart">
      {data.map((user) => (
         
        <div className="chartsMounth" key={user.name}>

          <p style={{ fontWeight: "bold" }}>{user.name}</p>
          
          <hr />
          {data.map((user) => (
            <p>{user.Total + Math.floor(Math.random() * user.Total)}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Chart;

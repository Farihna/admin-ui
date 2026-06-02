import { BarChart } from '@mui/x-charts/BarChart'; 
import * as React from "react";
import { ThemeContext } from "../../context/themeContext";

const chartSetting = {
  height: 300,
  yAxis: [
    {
      disableTicks: true,
      disableLine: true,
      width: 50,
    },
  ],
  grid: {
    horizontal: true,
  },
  sx: {
    ["& .MuiChartsAxis-left .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
    ["& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel"]: {
      fill: "#9F9F9F",
    },
  },
};

export default function BarsDataset(props) {
  const { dataset } = props;
  const { theme: themeMode } = React.useContext(ThemeContext);
  
  if (!dataset || !dataset.series || !dataset.data || !dataset.dataKey) {
    return <div>Loading chart...</div>;
  }

  const expensesSeries = dataset.series.map((item) =>
    item.dataKey === "amountLastWeek" ? { ...item, color: themeMode.color } : item
  );

  return (
    <BarChart
      dataset={dataset.data}
      xAxis={[{ dataKey: dataset.dataKey, categoryGapRatio: 0.5 }]}
      series={expensesSeries}
      {...chartSetting}
    />
  );
}

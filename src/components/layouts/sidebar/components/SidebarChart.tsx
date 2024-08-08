import { Cell, Pie, PieChart } from "recharts";
import { FC } from "../../../../types/common.types";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import {
  GRANNY_SMITH_APPLE_200_1,
  MAY_GREEN_100_1,
  PHTHALO_GREEN_100_1,
} from "../../../../tw-config/colors";

const SidebarChart: FC<{
  count: number;
  chartStatus: { pending: number; completed: number };
}> = ({ count, chartStatus }) => {
  const isDarkMode = useSelector((state: RootState) => state.todo.theme);

  const pieChartSize = 151.57;
  const pendingRate = (360 * chartStatus.pending) / count;
  const completedRate = 360 - pendingRate;

  const chartData = [
    {
      name: "Pending",
      value: pendingRate,
      color: { light: MAY_GREEN_100_1, dark: MAY_GREEN_100_1 },
    },
    {
      name: "Done",
      value: completedRate,
      color: { light: PHTHALO_GREEN_100_1, dark: GRANNY_SMITH_APPLE_200_1 },
    },
  ];

  return (
    <div className="px-[20.61px] flex flex-col">
      <div className="w-full flex justify-center pt-[21.27px] pb-[15.95px]">
        <div className="rotate-90">
          <PieChart width={pieChartSize} height={pieChartSize}>
            <Pie
              data={chartData}
              cx={pieChartSize / 2 - 5}
              cy={pieChartSize / 2 - 5}
              innerRadius={40}
              outerRadius={pieChartSize / 2}
              paddingAngle={0}
              dataKey="value"
              strokeWidth={1}
            >
              {chartData.map((__, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    chartData[index % chartData.length].color[
                      isDarkMode ? "light" : "dark"
                    ]
                  }
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
      <div className="flex">
        {chartData.map(({ color, name }, index) => (
          <div key={index} className="w-[51.85px] flex gap-[2.66px]">
            <div
              className="h-[5.98px] w-[5.98px] rounded-full"
              style={{ background: color[isDarkMode ? "light" : "dark"] }}
            ></div>
            <label
              htmlFor="chart-title"
              className="text-[7.98px] leading-[9.65px] text-black-100-1 dark:text-white-100-1 font-inter-regular"
            >
              {name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarChart;

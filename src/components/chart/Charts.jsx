import { motion } from "framer-motion";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./Charts.css";

ChartJs.register(
  LineElement,
  PointElement,
  Title,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip
);
const Charts = ({ title, info }) => {
  const data = {
    labels: ["Temp", "Humidity", "Pressure"],
    datasets: [
      {
        label: `Weather forecast for ${title}`,
        data: [
          info?.temp,
          info?.feels_like,
          info?.pressure,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <motion.div
      whileInView={{ y: [100, 0] }}
      transition={{ duration: 0.5 }}
      className="app__chart app__flex-col"
    >
      <Line data={data} options={options} height={200} width={350} />
    </motion.div>
  );
};

export default Charts;

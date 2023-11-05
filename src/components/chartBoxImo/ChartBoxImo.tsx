// MonthlyAverageChart.tsx
import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { calculateMonthlyAverage } from "../monthlyAverageMonth/MonthlyAverageMonth";
import { ref, DataSnapshot, query, orderByChild, get } from "firebase/database";
import FirebaseConfig from '../../services/firebase-init';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import "./chartBoxImo.scss";

const firebaseApp = initializeApp(FirebaseConfig);
const db = getDatabase(firebaseApp);
const dbRef = ref(db, "/");
const color = [
    {name:"UNE MAISON", color: "#00c49f"},     
    {name: "UN APPARTEMENT", color:"#ff8042"} ,
]

  //Data we keep from type_de_bien
async function getUniqueTypesDeBien(): Promise<string[]> {
  return ["UNE MAISON", "UN APPARTEMENT"];
}

async function getDataForChart(year: number): Promise<any[]> {
  const typesDeBien = await getUniqueTypesDeBien();
  const chartData: any[] = [];

  for (let month = 1; month <= 12; month++) {
    // console.log("Fetching data for:", month);
    const monthlyData: any = { month };

    for (const typeBien of typesDeBien) {
      const average = await calculateMonthlyAverage(
        "moyenne_m2_jour_typebien_commune",
        year,
        month,
        typeBien
      );
      monthlyData[typeBien] = average;
    }

    chartData.push(monthlyData);
  }
  return chartData;
}

const MonthlyAverageChart: React.FC = () => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataForChart(2022);
      console.log(data); // ajout de cette ligne
      setChartData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="stackedChart">
        <h1>Moyenne de bien vendu (2022)</h1>
        <AreaChart
        width={800}
        height={400}
        data={chartData}
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        {chartData.length > 0 &&
            Object.keys(chartData[0]).map(
            (key) =>
                key !== "month" && (
                    {color.map((item) => (
                    <Area
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stackId="1"
                    fillOpacity={1}
                    
                        fill={colorMap.color}
                        />
                        ))}
                )
            )}
        </AreaChart>
        <div className="options">
                {colorMap.map(item => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{backgroundColor:item.color}}/>
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
    </div>
  );
};

export default MonthlyAverageChart;

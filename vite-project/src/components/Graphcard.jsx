import React, { useState } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

import { useTheme } from "next-themes";

import { MagicCard } from "./MagicCard.jsx";

import ShinyButton from "./ShinyButton.jsx";

import twitterData from "../data/twitter.json";

import { CardBody, CardContainer, CardItem } from "./3d-card.jsx";

import BoxReveal from "./BoxReveal.jsx";

import { Button } from "./Button.jsx";

import FlipText from "./FlipText.jsx";

import { InteractiveGridPattern } from "./InteractiveGridPattern.jsx";

import { cn } from "@/lib/utils";

import Chatbot from "./InstagramChatbot.jsx";

export const GraphCard = ({
  chartType = "Bar",
  title = "DEMO",
  dataSet,
  xKey,
  yKey,
  colors,
}) => {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody
        className="
        bg-white/10 dark:bg-black/10 
        backdrop-blur-2xl backdrop-filter 
        border border-white/10 dark:border-white/10
        shadow-xl hover:shadow-2xl 
        transition-all duration-300 
        dark:hover:shadow-emerald-500/[0.15] 
        w-auto sm:w-[30rem] h-auto 
        rounded-xl p-6 
        hover:bg-white/15 dark:hover:bg-black/15
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent before:rounded-xl
        relative overflow-hidden"
      >
        <CardItem className="text-xl font-bold text-neutral-whitesmoke dark:text-white relative z-10">
          <BoxReveal boxColor={"black"} duration={0.5}>
            {title}
          </BoxReveal>
        </CardItem>
        <ChartCard>
          {/* <AreaChart data={dataSet}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey={xKey} />
						<YAxis />
						<Tooltip />
						<Area
							type='monotone'
							dataKey={yKey[0]}
							stroke='black'
							fill={colors[0]}
						/>
					</AreaChart> */}
          <LineChart data={dataSet}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey={xKey}
              interval={180} // Show tick every ~6 months
              tick={true} // Show ticks
              axisLine={true}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={yKey[0]}
              name="First Metric"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey={yKey[1]}
              name="Second Metric"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ChartCard>
      </CardBody>
    </CardContainer>
  );
};
// Chart Card Component
export const ChartCard = ({ title, children }) => (
  <div
    className="
        bg-white/20 dark:bg-black/20
        backdrop-blur-2xl backdrop-filter
        border border-white/20 dark:border-white/20
        transition-all duration-300 ease-in-out
        p-6 rounded-xl
        hover:bg-white/30 dark:hover:bg-black/30
        ring-1 ring-white/50 dark:ring-white/10
        before:absolute before:inset-0 
        before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent
        after:absolute after:inset-0 
        after:bg-gradient-to-tr after:from-transparent after:via-white/10 after:to-white/30
        relative overflow-hidden group
    "
  >
    <h3 className="text-lg font-semibold mb-4 text-blue dark:text-white/90 relative z-10">
      {title}
    </h3>
    <div
      className="h-64 bg-white/5 dark:bg-white/5 rounded-lg p-2 shadow-inner relative z-10 
             backdrop-blur-md group-hover:bg-white transition-colors duration-300"
    >
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  </div>
);

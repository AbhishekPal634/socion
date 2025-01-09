import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const instagram = [
  {
    name: "2024-12-31",
    likes: 3554,
    comments: 42,
    views: 20644,
    plays: 69925,
    bookmarks: 33,
  },
  {
    name: "2024-12-27",
    likes: 15261,
    comments: 118,
    views: 156712,
    plays: 584077,
    bookmarks: 761,
  },
  {
    name: "2024-12-14",
    likes: 6285,
    comments: 55,
    views: 63825,
    plays: 452996,
    bookmarks: 387,
  },
  {
    name: "2024-11-14",
    likes: 6770,
    comments: 75,
    views: 29072,
    plays: 89212,
    bookmarks: 457,
  },
  {
    name: "2024-10-31",
    likes: 9296,
    comments: 46,
    views: 75469,
    plays: 265555,
    bookmarks: 636,
  },
  {
    name: "2024-08-22",
    likes: 1447,
    comments: 9,
    views: 8271,
    plays: 35708,
    bookmarks: 127,
  },
  {
    name: "2024-07-17",
    likes: 57903,
    comments: 239,
    views: 427126,
    plays: 826985,
    bookmarks: 1876,
  },
  {
    name: "2024-06-15",
    likes: 31876,
    comments: 108,
    views: 470739,
    plays: 2688316,
    bookmarks: 1973,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg border border-gray-300">
        <p className="text-gray-600 mb-2 font-medium text-sm">{label}</p>
        {payload.map((entry, index) => (
          <p
            key={index}
            style={{ color: entry.color }}
            className="font-medium text-sm"
          >
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const MetricCard = ({ title, dataSet, metrics, colors }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <div className="flex gap-4">
          {metrics.map((metric, idx) => (
            <span key={metric} className="flex items-center text-xs">
              <div
                className={`w-2 h-2 rounded-full mr-2`}
                style={{ backgroundColor: colors[idx] }}
              ></div>
              <span className="text-gray-600">{metric}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dataSet}>
            <defs>
              {colors.map((color, idx) => (
                <linearGradient
                  key={idx}
                  id={`gradient${idx}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              tick={{ fill: "#6b7280", fontSize: 10 }}
              axisLine={{ stroke: "#d1d5db" }}
            />
            <YAxis
              stroke="#9ca3af"
              tick={{ fill: "#6b7280", fontSize: 10 }}
              axisLine={{ stroke: "#d1d5db" }}
              tickFormatter={(val) => val.toLocaleString()}
            />
            <Tooltip content={<CustomTooltip />} />
            {metrics.map((metric, idx) => (
              <Area
                key={metric}
                type="monotone"
                dataKey={metric.toLowerCase()}
                stroke={colors[idx]}
                fillOpacity={1}
                fill={`url(#gradient${idx})`}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export function InstagramData() {
  const formattedData = instagram.map((item) => ({
    ...item,
    name: new Date(item.name).toLocaleDateString("en-US", {
      month: "short",
      year: "2-digit",
    }),
  }));

  const metrics = [
    {
      title: "Likes & Comments",
      metrics: ["Likes", "Comments"],
      colors: ["#3b82f6", "#f59e0b"],
    },
    {
      title: "Likes & Views",
      metrics: ["Likes", "Views"],
      colors: ["#3b82f6", "#10b981"],
    },
    {
      title: "Likes & Plays",
      metrics: ["Likes", "Plays"],
      colors: ["#3b82f6", "#6366f1"],
    },
    {
      title: "Likes & Bookmarks",
      metrics: ["Likes", "Bookmarks"],
      colors: ["#3b82f6", "#e11d48"],
    },
    {
      title: "Views & Comments",
      metrics: ["Views", "Comments"],
      colors: ["#10b981", "#f59e0b"],
    },
    {
      title: "Views & Plays",
      metrics: ["Views", "Plays"],
      colors: ["#10b981", "#6366f1"],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-gray-50">
      {metrics.map((item, idx) => (
        <MetricCard
          key={idx}
          title={item.title}
          dataSet={formattedData}
          metrics={item.metrics}
          colors={item.colors}
        />
      ))}
    </div>
  );
}

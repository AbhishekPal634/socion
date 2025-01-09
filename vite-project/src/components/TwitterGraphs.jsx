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

const twitter = [
  {
    name: "2024-12-21",
    likes: 51,
    replies: 5,
    impressions: 11982,
    retweets: 0,
    bookmarks: 1,
  },
  {
    name: "2024-12-08",
    likes: 5097,
    replies: 136,
    impressions: 159723,
    retweets: 88,
    bookmarks: 127,
  },
  {
    name: "2024-11-30",
    likes: 2096,
    replies: 86,
    impressions: 57315,
    retweets: 31,
    bookmarks: 33,
  },
  {
    name: "2024-11-12",
    likes: 39191,
    replies: 487,
    impressions: 770939,
    retweets: 731,
    bookmarks: 387,
  },
  {
    name: "2024-10-28",
    likes: 7705,
    replies: 105,
    impressions: 469665,
    retweets: 463,
    bookmarks: 761,
  },
  {
    name: "2024-10-04",
    likes: 11212,
    replies: 245,
    impressions: 1102020,
    retweets: 376,
    bookmarks: 1876,
  },
  {
    name: "2024-09-27",
    likes: 19348,
    replies: 748,
    impressions: 804697,
    retweets: 982,
    bookmarks: 457,
  },
  {
    name: "2024-08-15",
    likes: 21116,
    replies: 271,
    impressions: 798108,
    retweets: 2368,
    bookmarks: 636,
  },
  {
    name: "2024-07-20",
    likes: 483,
    replies: 76,
    impressions: 64033,
    retweets: 25,
    bookmarks: 31,
  },
  {
    name: "2024-06-22",
    likes: 186,
    replies: 26,
    impressions: 25045,
    retweets: 10,
    bookmarks: 9,
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

export function TwitterData() {
  const formattedData = twitter.map((item) => ({
    ...item,
    name: new Date(item.name).toLocaleDateString("en-US", {
      month: "short",
      year: "2-digit",
    }),
  }));

  const metrics = [
    {
      title: "Engagement Metrics",
      metrics: ["Likes", "Replies"],
      colors: ["#3b82f6", "#f59e0b"],
    },
    {
      title: "Reach Overview",
      metrics: ["Likes", "Impressions"],
      colors: ["#3b82f6", "#10b981"],
    },
    {
      title: "Sharing Activity",
      metrics: ["Likes", "Retweets"],
      colors: ["#3b82f6", "#6366f1"],
    },
    {
      title: "Content Saves",
      metrics: ["Likes", "Bookmarks"],
      colors: ["#3b82f6", "#e11d48"],
    },
    {
      title: "Interaction Rate",
      metrics: ["Impressions", "Replies"],
      colors: ["#10b981", "#f59e0b"],
    },
    {
      title: "Virality Metrics",
      metrics: ["Impressions", "Retweets"],
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

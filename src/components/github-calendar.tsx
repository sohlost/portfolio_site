"use client";

import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const selectLastHalfYear = (contributions: any[]) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

export function GithubContributions() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Wait for client-side hydration to complete
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the current theme, accounting for system preference
  const currentTheme = mounted ? (theme === 'system' ? systemTheme : theme) : 'light';
  
  const calendarTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  // Show nothing until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-full overflow-hidden rounded-xl bg-card p-4 h-[160px] animate-pulse" />
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-xl bg-card p-4">
      <GitHubCalendar 
        username="StarKnightt"
        colorScheme={currentTheme === "dark" ? "dark" : "light"}
        fontSize={12}
        blockSize={10}
        blockMargin={4}
        hideColorLegend
        hideMonthLabels
        transformData={selectLastHalfYear}
        style={{
          color: 'var(--foreground)',
          padding: '1rem',
          borderRadius: '0.75rem',
        }}
        theme={calendarTheme}
      />
    </div>
  );
}


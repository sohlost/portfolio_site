"use client";

import React from 'react';
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";

export function GithubContributions() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const theme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  if (!mounted) {
    return <div className="w-full h-[160px] rounded-xl bg-muted animate-pulse" />;
  }

  return (
    <div className="w-full overflow-hidden rounded-xl bg-card p-4">
      <GitHubCalendar
        username="StarKnightt"
        colorScheme={resolvedTheme as "light" | "dark"}
        fontSize={12}
        blockSize={12}
        blockMargin={4}
        hideColorLegend
        hideMonthLabels
        labels={{
          totalCount: '{{count}} total contributions'
        }}
        style={{
          color: 'var(--foreground)',
          padding: '1rem',
          borderRadius: '0.75rem',
        }}
        theme={theme}
      />
    </div>
  );
}


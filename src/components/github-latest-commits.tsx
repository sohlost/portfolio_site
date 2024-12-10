"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { GitCommit, RefreshCw } from "lucide-react";

interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  html_url: string;
  repo: string;
}

export function GithubLatestCommits() {
  const [commits, setCommits] = React.useState<Commit[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const { resolvedTheme } = useTheme();

  const fetchCommits = React.useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/StarKnightt/events/public"
      );
      const events = await response.json();
      
      // Filter push events and get the latest commits
      const latestCommits = events
        .filter((event: any) => event.type === "PushEvent")
        .slice(0, 2)
        .map((event: any) => ({
          sha: event.payload.commits[0].sha,
          commit: {
            message: event.payload.commits[0].message,
            author: {
              date: event.created_at
            }
          },
          html_url: `https://github.com/${event.repo.name}/commit/${event.payload.commits[0].sha}`,
          repo: event.repo.name
        }));

      setCommits(latestCommits);
    } catch (error) {
      console.error("Error fetching commits:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchCommits();
  };

  React.useEffect(() => {
    fetchCommits();
    // Auto-refresh every 5 minutes
    const interval = setInterval(fetchCommits, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchCommits]);

  if (loading) {
    return (
      <div className="w-full h-[100px] rounded-xl bg-muted animate-pulse" />
    );
  }

  return (
    <motion.div
      className="w-full overflow-hidden rounded-xl bg-card hover:shadow-lg transition-shadow duration-300 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Latest Commits</h3>
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
          title="Refresh commits"
        >
          <RefreshCw 
            className={`w-4 h-4 text-muted-foreground ${refreshing ? 'animate-spin' : ''}`} 
          />
        </button>
      </div>
      <div className="space-y-4">
        {commits.map((commit) => (
          <a
            key={commit.sha}
            href={commit.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:bg-muted p-3 rounded-lg transition-colors"
          >
            <div className="flex items-start gap-3">
              <GitCommit className="w-5 h-5 mt-1 text-muted-foreground" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {commit.repo}
                </p>
                <p className="text-sm text-muted-foreground break-words">
                  {commit.commit.message}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(commit.commit.author.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

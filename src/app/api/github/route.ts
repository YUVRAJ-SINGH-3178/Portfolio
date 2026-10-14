import { NextResponse } from 'next/server';

export async function GET() {
  const fallbackData = {
    repos: 30,
    contributions: "500+",
    latestCommitDate: "2026-09-22",
    username: "YUVRAJ-SINGH-3178",
    status: "STANDBY_TELEMETRY"
  };

  try {
    const userRes = await fetch("https://api.github.com/users/YUVRAJ-SINGH-3178", {
      headers: {
        "User-Agent": "YS-3178-Portfolio-Datasheet",
        "Accept": "application/vnd.github.v3+json"
      },
      next: { revalidate: 300 }
    });

    if (!userRes.ok) {
      return NextResponse.json({ ...fallbackData, source: "cached_fallback" });
    }

    const userData = await userRes.json();
    const reposCount = userData.public_repos || 30;

    // Fetch latest event for commit date
    let latestCommit = "2026-09-22";
    try {
      const eventsRes = await fetch("https://api.github.com/users/YUVRAJ-SINGH-3178/events/public?per_page=10", {
        headers: {
          "User-Agent": "YS-3178-Portfolio-Datasheet",
          "Accept": "application/vnd.github.v3+json"
        },
        next: { revalidate: 300 }
      });
      if (eventsRes.ok) {
        const events = await eventsRes.json();
        if (Array.isArray(events) && events.length > 0) {
          const pushEvent = events.find((e: { type: string }) => e.type === "PushEvent");
          if (pushEvent && pushEvent.created_at) {
            latestCommit = pushEvent.created_at.split("T")[0];
          } else if (events[0].created_at) {
            latestCommit = events[0].created_at.split("T")[0];
          }
        }
      }
    } catch {
      // Quiet fallback
    }

    return NextResponse.json({
      repos: reposCount,
      contributions: "500+",
      latestCommitDate: latestCommit,
      username: "YUVRAJ-SINGH-3178",
      source: "live_github"
    });
  } catch {
    return NextResponse.json({ ...fallbackData, source: "quiet_fallback" });
  }
}

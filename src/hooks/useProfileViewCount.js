import { useEffect, useState } from 'react';

const API_BASE = 'https://countapi.mileshilliard.com/api/v1';
const COUNTER_KEY = 'saurabh-kumar-portfolio-profile-views';
const SESSION_FLAG = 'sk-profile-view-counted';

function parseCount(payload) {
  const value = payload?.value;
  const n = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(n) ? n : null;
}

/**
 * Global profile view count. One increment per browser session.
 * Uses countapi.mileshilliard.com (countapi.xyz successor).
 */
export function useProfileViewCount() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const alreadyCounted = sessionStorage.getItem(SESSION_FLAG);

        if (!alreadyCounted) {
          const hitRes = await fetch(`${API_BASE}/hit/${encodeURIComponent(COUNTER_KEY)}`);
          if (hitRes.ok) {
            const hit = await hitRes.json();
            const count = parseCount(hit);
            if (!cancelled && count !== null) {
              setViews(count);
              sessionStorage.setItem(SESSION_FLAG, '1');
              return;
            }
          }
        }

        const getRes = await fetch(`${API_BASE}/get/${encodeURIComponent(COUNTER_KEY)}`);
        if (getRes.ok) {
          const data = await getRes.json();
          if (!data?.error) {
            const count = parseCount(data);
            if (!cancelled && count !== null) setViews(count);
          }
        }
      } catch {
        if (!cancelled) setViews(null);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return views;
}

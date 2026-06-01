import { useEffect, useState } from 'react';

const NAMESPACE = 'saurabh-kumar-portfolio';
const KEY = 'hero-profile-views';
const SESSION_FLAG = 'sk-profile-view-counted';

/**
 * Global profile view count (CountAPI). One increment per browser session.
 */
export function useProfileViewCount() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const alreadyCounted = sessionStorage.getItem(SESSION_FLAG);

        if (!alreadyCounted) {
          const hitRes = await fetch(
            `https://api.countapi.xyz/hit/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(KEY)}`,
          );
          if (hitRes.ok) {
            const hit = await hitRes.json();
            if (!cancelled && typeof hit.value === 'number') {
              setViews(hit.value);
              sessionStorage.setItem(SESSION_FLAG, '1');
              return;
            }
          }
        }

        const getRes = await fetch(
          `https://api.countapi.xyz/get/${encodeURIComponent(NAMESPACE)}/${encodeURIComponent(KEY)}`,
        );
        if (getRes.ok) {
          const data = await getRes.json();
          if (!cancelled && typeof data.value === 'number') setViews(data.value);
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

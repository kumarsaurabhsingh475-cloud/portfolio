import { useEffect } from 'react';

/** Updates document title and meta tags (React 19–compatible, no react-helmet). */
export function usePageMeta({ title, description, keywords }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
  }, [title, description, keywords]);
}

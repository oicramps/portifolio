import { useCallback } from 'react';

export default function useAnalyticsEvents() {
  const sendEvent = useCallback((name, data) => {
    if (window.gtag) window.gtag('event', name, data);
  }, []);

  return sendEvent;
}

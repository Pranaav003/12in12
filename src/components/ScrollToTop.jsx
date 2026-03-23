import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll position on client-side navigation (e.g. landing → archive). */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

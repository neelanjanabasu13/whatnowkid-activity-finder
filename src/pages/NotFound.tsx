import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    const prevTitle = document.title;
    document.title = "Page Not Found | WhatNow Kid";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute("content");
      el.setAttribute("content", content);
      return () => {
        if (prev === null) el?.remove();
        else el?.setAttribute("content", prev);
      };
    };

    const restoreDesc = setMeta(
      "description",
      "The page you're looking for doesn't exist. Head back to WhatNow Kid to find instant activity ideas for kids."
    );

    const canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", `https://whatnow-play-finder.lovable.app${location.pathname}`);
    document.head.appendChild(canonical);

    return () => {
      document.title = prevTitle;
      restoreDesc();
      canonical.remove();
    };
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">404 — Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Oops! We couldn't find that page.
        </p>
        <a href="/" className="text-primary hover:underline">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;

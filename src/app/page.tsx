'use client';
import React, { useEffect, useState } from "react";
import LandingLoading from "./LandingLoading";
const LandingPage = require("./landing_page/landing_page").default;

export default function Page() {
  const [showLoading, setShowLoading] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasVisited = sessionStorage.getItem('hasVisitedLanding');
      if (!hasVisited) {
        setShowLoading(true);
      } else {
        setReady(true);
      }
    }
  }, []);

  const handleFinishLoading = () => {
    sessionStorage.setItem('hasVisitedLanding', 'true');
    setShowLoading(false);
    setReady(true);
  };

  if (showLoading) {
    return <LandingLoading onFinish={handleFinishLoading} />;
  }
  if (ready) {
    return <LandingPage />;
  }
  // Prevent flicker on SSR
  return null;
}

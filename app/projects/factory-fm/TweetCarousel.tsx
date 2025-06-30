"use client";

import { useRef, useState, useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

interface TweetCarouselProps {
  children: React.ReactNode;
}

export default function TweetCarousel({ children }: TweetCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load Twitter widgets script before any layout calculations
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";

    script.onload = () => {
      setScriptLoaded(true);
      // Process any existing Twitter widgets
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector(
        'script[src="https://platform.twitter.com/widgets.js"]'
      );
      if (existingScript && existingScript !== script) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleEndScroll = () => {
    if (!containerRef.current) return;

    // Snap to nearest tweet after drag ends
    const container = containerRef.current;
    const itemWidth = 320 + 16; // w-80 (320px) + gap
    const scrollPosition = container.scrollLeft;
    const newIndex = Math.round(scrollPosition / itemWidth);

    container.scrollTo({
      left: newIndex * itemWidth,
      behavior: "smooth",
    });
  };

  // Don't render carousel until script is loaded to prevent layout shifts
  if (!scriptLoaded) {
    return (
      <div className="my-4 py-[4vw] overflow-hidden">
        <div className="flex gap-4 px-[4vw]">
          <div className="w-80 h-32 bg-gray-100 animate-pulse rounded flex-shrink-0"></div>
          <div className="w-80 h-32 bg-gray-100 animate-pulse rounded flex-shrink-0"></div>
          <div className="w-80 h-32 bg-gray-100 animate-pulse rounded flex-shrink-0"></div>
        </div>
        <p className="text-sm opacity-70 mt-4 px-[4vw] text-gray-700">
          Loading tweets...
        </p>
      </div>
    );
  }

  return (
    <div className="my-4 py-[4vw] overflow-hidden">
      <ScrollContainer
        className="flex gap-4 px-[4vw] cursor-grab overflow-x-hidden"
        innerRef={containerRef}
        onStartScroll={() => setIsDragging(true)}
        onEndScroll={() => {
          setIsDragging(false);
          setTimeout(handleEndScroll, 100);
        }}
      >
        {children}
      </ScrollContainer>
      <p className="text-sm opacity-70 mt-4 px-[4vw] text-gray-700">
        Tweets showed consistent & eager engagement from a select group of
        early-advocates in the music space.
      </p>
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    twttr: {
      widgets: {
        load: () => void;
      };
    };
  }
}

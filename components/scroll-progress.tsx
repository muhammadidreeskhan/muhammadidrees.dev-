"use client";
import { useRef, useEffect, useState } from "react";

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null); // Always called first
  const [progress, setProgress] = useState(0); // Always called second

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 4,
        width: `${progress}%`,
        background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
        zIndex: 9999,
        transition: "width 0.2s",
      }}
    />
  );
}
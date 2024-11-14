"use client";
import { useEffect, useState } from "react";

export default function StartupAnimation() {
  const [currentString, setCurrentString] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const text = "austinlong.dev";
  const typingDelay = 75;
  const blinkDelay = 500;

  useEffect(() => {
    if (currentIdx < text.length) {
      const timeout = setTimeout(() => {
        setCurrentString(
          prev => prev.substring(0, currentIdx) + text[currentIdx] + "_"
        );
        setCurrentIdx(prev => prev + 1);
      }, typingDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentIdx, typingDelay, text, currentString]);

  useEffect(() => {
    if (currentIdx >= text.length) {
      const timeout = setTimeout(() => {
        setCurrentString(prev => {
          if (prev.endsWith("_")) {
            return prev.substring(0, prev.length - 1);
          } else {
            return prev + "_";
          }
        });
      }, blinkDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentIdx, blinkDelay, currentString]);
  return currentString;
}

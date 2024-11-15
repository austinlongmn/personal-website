"use client";
import { useEffect, useState } from "react";

const text = "austinlong.dev";
const typingDelay = 75;
const returnDelay = 1000;

export const completionTime = typingDelay * text.length;

export function StartupAnimation() {
  const [currentString, setCurrentString] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const text = "austinlong.dev";

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
  }, [currentIdx, text, currentString]);

  useEffect(() => {
    if (currentIdx == text.length) {
      const timeout = setTimeout(() => {
        console.log("timeout")
        setCurrentString(prev => {
          return prev.substring(0, currentIdx)
        });
        setCurrentIdx(prev => prev + 1)
      }, returnDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentIdx, currentString]);
  return currentString;
}

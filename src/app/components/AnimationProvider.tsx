"use client";

import { useAnimate } from "framer-motion";
import { ReactNode, useEffect } from "react";
import { completionTime } from "./StartupAnimation";
import { usePathname } from "next/navigation";

export default function AnimationProvider({
  children
}: {
  children: ReactNode;
}) {
  const [scope, animate] = useAnimate();

  const pathname = usePathname();
  useEffect(() => {
    const timeout = setTimeout(() => {
      animate("div", { opacity: 1 });
    }, completionTime + 1000);

    return () => clearTimeout(timeout);
  }, [pathname, animate]);

  return (
    <div ref={scope}>
      <div style={{ opacity: 0 }}>{children}</div>
    </div>
  );
}

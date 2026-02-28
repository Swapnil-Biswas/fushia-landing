"use client";

import type { CSSProperties } from "react";

type AuroraProps = {
  colorStops?: [string, string, string] | string[];
  blend?: number;
  amplitude?: number;
  speed?: number;
  className?: string;
};

export default function Aurora({
  colorStops = ["#006eff", "#0544ff", "#4423c7"],
  blend = 0.5,
  amplitude = 1,
  speed = 1,
  className = "",
}: AuroraProps) {
  const style = {
    "--aurora-c1": colorStops[0] ?? "#006eff",
    "--aurora-c2": colorStops[1] ?? "#0544ff",
    "--aurora-c3": colorStops[2] ?? "#4423c7",
    "--aurora-blend": String(Math.max(0, Math.min(blend, 1))),
    "--aurora-amp": String(Math.max(0.2, amplitude)),
    "--aurora-speed": String(Math.max(0.2, speed)),
  } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      className={`aurora-bg ${className}`}
      style={style}
    />
  );
}


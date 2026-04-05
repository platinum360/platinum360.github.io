import React from "react";

interface HighlighterProps {
  children: React.ReactNode;
  action?: "highlight" | "underline";
  color?: string;
  className?: string;
}

export default function Highlighter({
  children,
  action = "highlight",
  color = "#fdf44f",
  className = "",
}: HighlighterProps) {
  return (
    <span style={{ position: "relative", display: "inline-block" }} className={className}>
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      {action === "highlight" && (
        <span
          style={{
            position: "absolute",
            bottom: "10%",
            left: "-5%",
            right: "-5%",
            height: "60%",
            backgroundColor: color,
            zIndex: 0,
            transformOrigin: "left center",
            borderRadius: "4px",
            mixBlendMode: "difference", 
          }}
        />
      )}
      {action === "underline" && (
        <svg
          width="100%"
          height="12"
          viewBox="0 0 100 12"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: "-4px",
            left: "0",
            zIndex: 0,
            width: "100%",
          }}
        >
          <path
            d="M 0 6 Q 50 12 100 6"
            stroke={color}
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}
